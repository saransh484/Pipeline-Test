@Library('my_lib') _

pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        REG_CRED = credentials("reg_cred")
        PX = credentials("ptr_x_api")
    }
    stages {
        stage('Initialize') {
            steps {
                script {
                    def branchParts = env.CHANGE_BRANCH.split('-')
                    echo "${branchParts}"
                    def extractedNumber = 0000

                    branchParts.each { part ->
                        if (part.isNumber()) {
                            extractedNumber = part
                        }
                    }
                    env.EXTNUM = extractedNumber
                    
                    echo "${env.CHANGE_BRANCH}"
                    echo "${env.BRANCH_NAME}"
                    echo "${extractedNumber}"
                    env.BUILD_ENV="dev"
                }
            }
        }

        stage("Build") {
            steps {
                sh "docker build --build-arg BUILD_ENV=${env.BUILD_ENV} -t registry.deploy.flipr.co.in/flipr-connect-student-${env.EXTNUM}:latest ."
            }
        }

        stage("Push To Registry") {
            steps {
                sh 'docker -v'
                sh 'echo $REG_CRED_PSW | docker login registry.deploy.flipr.co.in -u $REG_CRED_USR --password-stdin'
                sh "docker push registry.deploy.flipr.co.in/flipr-connect-student-${env.EXTNUM}:latest"
            }
        }
        stage("Get Stacks and Delete Old") {
            steps {
                script{
                    def res = portainer.get_stacks("https://portainer.deploy.flipr.co.in", PX )
                    echo "portainer stacks => ${res}"
                    env.SID = portainer.get_stack_id(res, "deploy")
                }
            }
        }
        stage("PUT stack") {
            steps {
                script {
def VAR = """
version: "3.1"
services:
  ${portainer.pot_basic_template("flipr-connect", "student", env.EXTNUM, "registry.deploy.flipr.co.in", ".deploy.flipr.co.in")}

networks:
  proxy:
    name: traefik
    external: true
"""
                    
                    def res = portainer.put_stack("https://portainer.deploy.flipr.co.in", PX , VAR)
                    echo "${res}"                
                }
            }
        }
    }
}

