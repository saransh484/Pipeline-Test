// if ( current_status == "opened" && merged == false ){
  
  pipeline {
    agent any

    environment {
        REG_CRED = credentials("reg_cred")
    }

    stages {
        stage('Initialize') {
          when{
                expression { return current_status == "opened"}
            }
            steps {
                script {
                    def extractedNumber = (title =~ /\d+/).find() ? (title =~ /\d+/).find()[0] : "No number found"
                    echo "${current_status}"
                    echo "${merged}"
                    echo "${extractedNumber}"
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
                sh 'docker build -t registry.deploy.flipr.co.in/test-image:latest .'
            }
        }

        stage("Push To Registry") {
            steps {
                sh 'docker -v'
                sh 'echo $REG_CRED_PSW | docker login registry.deploy.flipr.co.in -u $REG_CRED_USR --password-stdin'
                sh 'docker push registry.deploy.flipr.co.in/test-image:latest'
            }
        }
    }
}

// }
