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
          when{
                expression { return current_status == "opened"}
            }
            steps {
                sh """
                    curl -X POST \
                         https://portainer.deploy.flipr.co.in/api/auth \
                         -H 'Content-Type: application/json' \
                         -d '{"Username":"${PORTAINER_USR}", "Password":"${PORTAINER_PSW}"}'
                """
                echo 'connected'
            }
        }
    }
}

