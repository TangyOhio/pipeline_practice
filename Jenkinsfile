pipeline {
    agent any
    stages {
        stage('Installl') {
            steps {
                sh 'yarn'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
}