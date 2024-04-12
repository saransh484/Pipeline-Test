pipeline {
    agent any

    environment {
        REG_CRED = credentials("reg_cred")
        PORTAINER = credentials("portainer")
    }

    stages {
        stage('Initialize') {
            steps {
                script {
                    def branchParts = env.BRANCH_NAME.split('-')
                    def extractedNumber = 0000

                    branchParts.each { part ->
                        if (part.isNumber()) {
                            extractedNumber = part
                        }
                    }
                    env.EXTNUM = extractedNumber
                    def rx  =  sh(script: 'git rev-parse --abbrev-ref HEAD')
                    echo "${rx}"
                    echo "${env.BRANCH_NAME}"
                    echo "${extractedNumber}"
                    env.BUILD_ENV="dev"
                }
            }
        }

        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Build") {
            steps {
                sh "docker build --build-arg BUILD_ENV=${env.BUILD_ENV} -t registry.deploy.flipr.co.in/flipr-connect-students:${env.EXTNUM} ."
            }
        }

        stage("Push To Registry") {
            steps {
                sh 'docker -v'
                sh 'echo $REG_CRED_PSW | docker login registry.deploy.flipr.co.in -u $REG_CRED_USR --password-stdin'
                sh "docker push registry.deploy.flipr.co.in/flipr-connect-students:${env.EXTNUM}"
            }
        }

        stage("Connect to Portainer") {
            steps {
                script{
                    def response = sh(script: """
                                curl -X POST \
                                     https://portainer.deploy.flipr.co.in/api/auth \
                                     -H 'Content-Type: application/json' \
                                     -d '{"Username":"${PORTAINER_USR}", "Password":"${PORTAINER_PSW}"}'
                                """, returnStdout: true).trim()
                echo "Response: ${response}"
                def jsonObj = readJSON text: response
                env.JWT = jsonObj.jwt
                }
            }
        }
        stage("Get Stacks and Delete Old") {
            steps {
                script{
                    def response = sh(script: """
                                curl -X GET \
                                     -H "Authorization: Bearer ${env.JWT}" \
                                     https://portainer.deploy.flipr.co.in/api/stacks
                                """, 
                                      returnStdout: true).trim()
                String existingStackId = ""
                def jsonObj = readJSON text: response
                echo "${jsonObj}"
                    jsonObj.each { stack ->
                      if(stack.Name == "deploy") {
                        existingStackId = stack.Id
                      }
                    }
                env.SID = existingStackId
                echo "${env.SID}"

                }
            }
        }
        stage("GET Stack Content") {
            steps {
                script {

                    def VAR = """
version: "3.1"
services:
  flipr-connect-students:
    image: registry.deploy.flipr.co.in/flipr-connect-students:${env.EXTNUM}
    container_name: flipr-connect-students-${env.EXTNUM}
    labels:
        - "traefik.enable=true"
        - "traefik.http.routers.deploy.rule=Host(`${env.EXTNUM}-student.deploy.flipr.co.in`)"
        - "traefik.http.routers.deploy.entrypoints=websecure"
        - "traefik.http.routers.deploy.tls.certresolver=deploy-resolver"
    networks:
        - proxy

networks:
  proxy:
    name: traefik
    external: true
"""
                    
                    def res = sh(script: """ 
                        curl -X PUT \
                             -H "Authorization: Bearer ${env.JWT}" \
                             -H "Content-Type: application/json" \
                             -d '{ "pullImage": true, "StackFileContent":${ groovy.json.JsonOutput.toJson(VAR) } }' \
                             https://portainer.deploy.flipr.co.in/api/stacks/${env.SID}?endpointId=2
                        """, returnStdout: true).trim()
                    
                    echo "${res}"                
                }
            }
        }
    }
}

