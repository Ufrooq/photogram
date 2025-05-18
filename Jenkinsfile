pipeline {
    agent any

    environment {
        VITE_APIKEYS = credentials('VITE_APIKEYS')
        VITE_AUTHDOMAIN = credentials('VITE_AUTHDOMAIN')
        VITE_PROJECTEDID = credentials('VITE_PROJECTEDID')
        VITE_STORAGEBUCKET = credentials('VITE_STORAGEBUCKET')
        VITE_MESSAGINGSENDERID = credentials('VITE_MESSAGINGSENDERID')
        VITE_APPID = credentials('VITE_APPID')
    }

    stages {
        stage('delete php folder if it exists') {
            steps {
                sh '''
                    if [ -d "/var/lib/jenkins/DevOps/" ]; then
                        find "/var/lib/jenkins/DevOps/" -mindepth 1 -delete
                        echo "Contents of /var/lib/jenkins/DevOps/ have been removed."
                    else
                        echo "Directory /var/lib/jenkins/DevOps/ does not exist."
                    fi
                '''
            }
        }
        
        stage('Fetch code ') {
            steps {
                sh 'git clone https://github.com/Ufrooq/photogram.git /var/lib/jenkins/DevOps/php/'
            }
        }

        stage('Create .env file') {
            steps {
                dir('/var/lib/jenkins/DevOps/php') {
                    sh '''
                        cat <<EOF > .env
VITE_APIKEYS=$VITE_APIKEYS
VITE_AUTHDOMAIN=$VITE_AUTHDOMAIN
VITE_PROJECTEDID=$VITE_PROJECTEDID
VITE_STORAGEBUCKET=$VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID=$VITE_MESSAGINGSENDERID
VITE_APPID=$VITE_APPID
EOF
                        echo ".env file created"
                    '''
                }
            }
        }

        stage('Build and Start Docker Compose') {
            steps {
                dir('/var/lib/jenkins/DevOps/php') {
                    sh 'docker-compose -p thereactapp up -d'
                }
            }
        }
    }
}
