pipeline{
  environment {
    registry = "scottdkey/basic-api"
    registryCredential = "1cb77339-1913-4cd5-8fb2-7a0bb2d2f0d3"
    dockerImage = ''
  }
  agent any
  stages {
    stage("Build"){
      steps {

      
      script {
        sh "npm install"
      }
    }
  } stage('Building image'){
      steps {
        script {
          dockerImage = docker.build registry + ":latest"
        }
      }
  }stage('Push Image'){
    steps{
      script {
        docker.withRegistry('', registryCredential){
          dockerImage.push()
        }
      }
    }
  } stage('Deploying into k8s'){
    steps {
      sh 'kubectl apply -f deployment.yaml'
    }
  }
}