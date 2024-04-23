pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/VishSeran/EG20204222'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t seranvishwa/appeg20204222-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: '4222-dockerpassword', variable: '4222dockerhubpass')]) {
                    script{
                        bat'docker login -u seranvishwa -p %4222dockerhubpass%'
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push seranvishwa/appeg20204222-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}