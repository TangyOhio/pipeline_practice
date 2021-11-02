pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
              nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm config ls'
                }
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}