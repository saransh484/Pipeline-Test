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
                    if(existingStackId?.trim()){
                        def delete = sh(script: """
                                curl -X DELETE \
                                     -H "Authorization: Bearer ${env.JWT}" \
                                     https://portainer.deploy.flipr.co.in/api/stacks/${existingStackId}?endpointId=2
                                """, 
                                      returnStdout: true).trim()
                    }
                }
            }
        }
        stage("Deploy Stack") {
          // when{
          //       expression { return current_status == "opened"}
          //   }
            steps {
                script {
                    // def LT = "latest"
                    // def API_ENDPOINT = "https://portainer.deploy.flipr.co.in/api/stacks?method=string&type=2&endpointId=2"
                    // def STACK = "version: '3.1'\nservices:\n   webserver:\n     image: registry.deploy.flipr.co.in/test-image:${LT}\n     container_name: webserver"
                    // def JSON_PAYLOAD = "{'name': 'deploy', 'stackFileContent': '${STACK}'}"
                    def response
                    
                    response = sh(script: """
                        curl -X POST \
                             -H "Authorization: Bearer ${env.JWT}" \
                             -H "Content-Type: application/json" \
                             -d '{ "name": "deploy", "stackFileContent": "version: 3.1\nservices:\n   webserver:\n     image: nginx:alpine\n     container_name: webserver"}' \
                             "https://portainer.deploy.flipr.co.in/api/stacks?method=string&type=2&endpointId=2"
                        
                        """, returnStdout: true).trim()
                    echo "Response: ${response}"
                }
            }
        }
    }
}

