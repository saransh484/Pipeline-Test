pipeline{
  agent any

  environment{
    REG_CRED = credentials("reg_cred")
  }
  
  stages {
    
    stage("Checkout"){
      steps{
        checkout scm
      }
    }

    stage("Build"){
      steps{
        sh 'docker build -t test-image:latest .'
      }
    }

    stage("Push To Registry"){
      steps{
        sh 'echo $REG_CRED_PSW | docker login registry.deploy.flipr.co.in -u $REG_CRED_USR --password-stdin'
        sh 'docker push registry.deploy.flipr.co.in/test-image:latest'
      }
    }
  }
  
}
