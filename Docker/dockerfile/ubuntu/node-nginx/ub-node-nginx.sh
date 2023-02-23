#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    rm -rf /var/www/html/app
    mkdir -p /var/www/html
    cd /var/www/html
    # cd /usr/share/nginx/html
    git clone https://github.com/JMViiUDEZz/EntradasATuAlcance-Frontend.git app
    # git init
    # git remote add origin $URL_GITHUB
    # git pull origin master
#     echo "DB_HOST=$DB_HOST
# DB_PORT=$DB_PORT
# DB_USERNAME=$DB_USERNAME
# DB_NAME=$DB_NAME
# DB_PASSWORD=$DB_PASSWORD

# PORT=$PORT
# HOST_API=$HOST_API

# JWT_SECRET=$JWT_SECRET" > .env
}

config_nginx(){
    cd /var/www/html/app
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
