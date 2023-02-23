# Comandos Docker
docker compose -f build/Docker/docker-compose/ubuntu/ub-node-nginx.yml build --no-cache
docker compose -f build/Docker/docker-compose/ubuntu/ub-node-nginx.yml down
# docker compose -f build/Docker/docker-compose/ubuntu/ub-postgres-nest.yml up -d --remove-orphans
docker compose -f build/Docker/docker-compose/ubuntu/ub-node-nginx.yml up -d --remove-orphans