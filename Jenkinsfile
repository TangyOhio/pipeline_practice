pipeline {
    agent any

    tools {nodejs "node"}
    
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}