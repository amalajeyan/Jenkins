pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
       finally {
        emailext (
            to: 'amalajeyan@hpe.com',
            subject: "test",
            body: "test",
            mimeType: 'text/html',
            attachLog: true
        )
    }
    }
}
