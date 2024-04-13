@Library('my_lib') _

pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        REG_CRED = credentials("reg_cred")
        PX = credentials("ptr_x_api")
        SVC = "student"
    }
    stages {
        stage('Initialize') {
            steps {
                script {
                    def branchParts = env.CHANGE_BRANCH.split('-')
                    def extractedNumber = branchParts[1]
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
                docker.build(env.BUILD_ENV, env.EXTNUM, SVC)
            }
        }

        stage("Push To Registry") {
            steps {
                docker.registry_push($REG_CRED_PSW, $REG_CRED_USR, SVC, env.BUILD_ENV)
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

