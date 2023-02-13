#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    rm -rf /var/www/html/EntradasATuAlcance-Backend
    mkdir -p /var/www/html/EntradasATuAlcance-Backend
    cd /var/www/html/EntradasATuAlcance-Backend    git init
    git remote add origin https://github.com/JMViiUDEZz/EntradasATuAlcance-Backend.git
    git pull origin master
}

config_npm(){
        # npm i nest
    npm i -g @nestjs/cli
    npm install
    # npm ci
    npm audit fix
    # cd ./EntradasATuAlcance-Backend
    echo "DB_HOST=194.61.28.54
DB_PORT=5433
DB_USERNAME=jose
DB_NAME=EntradasATuAlcance
DB_PASSWORD=pswEntradasATuAlcance

PORT=3000
HOST_API=http://localhost:3000/api

JWT_SECRET=MIclaveSecreta" > .env

sed -i 's/process.env.DB_HOST/"'194.61.28.54'"/' src/app.module.ts
sed -i 's/process.env.DB_PORT/"'5433'"/' src/app.module.ts
sed -i 's/process.env.DB_USERNAME/"'jose'"/' src/app.module.ts
sed -i 's/process.env.DB_NAME/"'EntradasATuAlcance'"/' src/app.module.ts
sed -i 's/process.env.DB_PASSWORD/"'pswEntradasATuAlcance'"/' src/app.module.ts

    # yarn start:dev
    npm run start:dev
}
main(){
    config_git
    config_npm
}

main
