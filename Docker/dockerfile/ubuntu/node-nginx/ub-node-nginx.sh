#!/bin/bash

set -e

bash /root/ub-base.sh

config_env(){
    # rm -rf /var/www/html/$REPO_GITHUB
    # mkdir -p /var/www/html/$REPO_GITHUB
    # cd /var/www/html/$REPO_GITHUB
    # cd /var/www/html
    # git clone $URL_GITHUB $REPO_GITHUB --recurse-submodules
    # git init
    # git remote add origin $URL_GITHUB
    # git pull origin master
    echo "DB_HOST=$DB_HOST
DB_PORT=$DB_PORT
DB_USERNAME=$DB_USERNAME
DB_NAME=$DB_NAME
DB_PASSWORD=$DB_PASSWORD

PORT=$PORT
HOST_API=$HOST_API

JWT_SECRET=$JWT_SECRET" > .env
}

config_nginx(){
    cd /usr/share/nginx/html/app
    npm install --force
    # npm run start
    npm run build
    systemctl restart nginx
}

main(){
   config_git
   config_nginx
}

main
