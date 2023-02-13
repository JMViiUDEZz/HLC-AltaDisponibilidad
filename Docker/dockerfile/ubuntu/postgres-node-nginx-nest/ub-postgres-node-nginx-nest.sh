#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    rm -rf /var/www/html/$REPO_GITHUB
    # mkdir -p /var/www/html/$REPO_GITHUB
    # cd /var/www/html/$REPO_GITHUB
    cd /var/www/html
    git clone $URL_GITHUB $REPO_GITHUB --recurse-submodules
    # git init
    # git remote add origin $URL_GITHUB
    # git pull origin master
}

config_nest(){
    cd /var/www/html/$REPO_GITHUB/api
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

config_next(){
    cd /var/www/html/$REPO_GITHUB/app
    npm install --force
    npm run start
}

main(){
    config_git
    config_nest
    config_next
}

main
