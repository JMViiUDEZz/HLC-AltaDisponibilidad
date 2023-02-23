#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    # rm -rf /var/www/html/$REPO_GITHUB
    # mkdir -p /var/www/html/$REPO_GITHUB
    # cd /var/www/html/$REPO_GITHUB
    rm -rf /var/www/html/api
    mkdir -p /var/www/html
    cd /var/www/html
    git clone https://github.com/JMViiUDEZz/EntradasATuAlcance-Backend.git api
}

config_npm(){
    cd /var/www/html/api
    npm i -g @nestjs/cli
    npm install --force
    echo "DB_HOST=$DB_HOST
DB_PORT=$DB_PORT
DB_USERNAME=$DB_USERNAME
DB_NAME=$DB_NAME
DB_PASSWORD=$DB_PASSWORD

PORT=$PORT
HOST_API=$HOST_API

JWT_SECRET=$JWT_SECRET" > .env
    npm run start:dev
}
main(){
    config_git
    config_npm
}

main
