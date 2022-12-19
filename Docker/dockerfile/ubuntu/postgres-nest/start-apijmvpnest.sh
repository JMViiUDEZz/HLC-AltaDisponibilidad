#!/bin/bash

set -e

bash /root/ub-base.sh

config_git(){
    mkdir -p /var/www/html/$REPO_GITHUB
    cd /var/www/html/$REPO_GITHUB
    git init
    # git remote add origin $URL_GITHUB
    git pull origin master
}

config_npm(){
    npm i -g @nestjs/cli
    npm install --force
    echo "DB_HOST=194.61.28.54
DB_PORT=5435
DB_USERNAME=jose
DB_NAME=IncidenciasNest
DB_PASSWORD=pswIncidenciasNest

PORT=3000
HOST_API=http://localhost:3000/api

JWT_SECRET=MIclaveSecreta" > .env

sed -i 's/5432/5435/' src/app.module.ts


# sed -i 's/process.env.DB_HOST/"'194.61.28.54'"/' src/app.module.ts
# sed -i 's/"'5435'"/5435/' src/app.module.ts
# sed -i 's/process.env.DB_USERNAME/"'jose'"/' src/app.module.ts
# sed -i 's/process.env.DB_NAME/"'IncidenciasNest'"/' src/app.module.ts
# sed -i 's/process.env.DB_PASSWORD/"'pswIncidenciasNest'"/' src/app.module.ts

    npm run start:dev
}
main(){
    config_git
    config_npm
}

main
