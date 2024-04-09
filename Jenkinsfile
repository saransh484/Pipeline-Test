pipeline {
    agent any

    environment {
        REG_CRED = credentials("reg_cred")
        PORTAINER = credentials("portainer")
    }

    stages {
        stage('Initialize') {
          when{
                expression { return current_status == "opened1"}
            }
            steps {
                script {
                    def branchParts = branch.split('-')
                    def extractedNumber = 0000

                    branchParts.each { part ->
                        if (part.isNumber()) {
                            extractedNumber = part
                        }
                    }
                    env.EXTNUM = extractedNumber
                    echo "${current_status}"
                    echo "${merged}"
                    echo "${extractedNumber}"
                }
            }
        }

        stage("Checkout") {
          when{
                expression { return current_status == "opened1"}
            }
            steps {
                checkout scm
            }
        }

        stage("Build") {
          when{
                expression { return current_status == "opened1"}
            }
            steps {
                sh "docker build -t registry.deploy.flipr.co.in/test-image:${env.EXTNUM} ."
            }
        }

        stage("Push To Registry") {
          when{
                expression { return current_status == "opened1"}
            }
            steps {
                sh 'docker -v'
                sh 'echo $REG_CRED_PSW | docker login registry.deploy.flipr.co.in -u $REG_CRED_USR --password-stdin'
                sh "docker push registry.deploy.flipr.co.in/test-image:${env.EXTNUM}"
            }
        }

        stage("Connect to Portainer") {
          // when{
          //       expression { return current_status == "opened"}
          //   }
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
          // when{
          //       expression { return current_status == "opened"}
          //   }
            steps {
                script{
                    def response = sh(script: """
                                curl -X GET \
                                     -H "Authorization: Bearer ${env.JWT}" \
                                     https://portainer.deploy.flipr.co.in/api/stacks
                                """, 
                                      returnStdout: true).trim()
                // echo "Response: ${response}"
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
                    // if(existingStackId?.trim()){
                    //     def delete = sh(script: """
                    //             curl -X DELETE \
                    //                  -H "Authorization: Bearer ${env.JWT}" \
                    //                  https://portainer.deploy.flipr.co.in/api/stacks/${existingStackId}?endpointId=2
                    //             """, 
                    //                   returnStdout: true).trim()
                    // }
                }
            }
        }
        stage("GET Stack Content") {
          // when{
          //       expression { return current_status == "opened"}
          //   }
            steps {
                script {

                    def VAR = """
                            "version": "3.1"
                            services:
                              nginx:
                                image: registry.deploy.flipr.co.in/nginx:latest
                                container_name: nginx
                            """
                    
                    // def response
                    
                    // response = sh(script: """
                    //     curl -X GET \
                    //          -H "Authorization: Bearer ${env.JWT}" \
                    //          -H "Content-Type: application/json" \
                    //          https://portainer.deploy.flipr.co.in/api/stacks/${env.SID}/file
                    //     """, returnStdout: true).trim()
                    // echo "Response: ${response}"

                    def res = sh(script: """ 
                        curl -X PUT \
                             -H "Authorization: Bearer ${env.JWT}" \
                             -H "Content-Type: application/json" \
                             -d '{ "pullImage": true, "StackFileContent":${ groovy.json.JsonOutput.toJson(VAR) } }' \
                             https://portainer.deploy.flipr.co.in/api/stacks/${env.SID}?endpointId=2
                        """, returnStdout: true).trim()
                    
                    echo "${res}"                }
            }
        }
    }
}

