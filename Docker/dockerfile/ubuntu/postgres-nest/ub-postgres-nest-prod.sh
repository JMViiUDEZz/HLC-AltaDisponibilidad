#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    rm -rf /var/www/html/$REPO_GITHUB
    mkdir -p /var/www/html/$REPO_GITHUB
    cd /var/www/html/$REPO_GITHUB
    git init
    git remote add origin $URL_GITHUB
    git pull origin master
}

config_npm(){
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
    npm run build
    cp -r /var/www/html/$REPO_GITHUB/dist /var/www/html/dist-$REPO_GITHUB
    npm run start:prod
}
main(){
    config_git
    config_npm
}

main
