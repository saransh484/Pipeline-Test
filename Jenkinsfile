pipeline{
  agent any

  environment{
    REG_CRED = credentials("reg_cred")
  }
  
  stages {
    
    stage("Checkout"){
      checkout scm
    }

    stage("Build"){
      sh 'docker build -t test-image:latest .'
    }

    stage("Push To Registry"){
      sh 'echo $REG_CRED_PSW | docker login -u $REG_CRED_USR --password-stdin'
      sh 'docker push registry.deploy.flipr.co.in/test-image:latest'
    }
  }
  
}
