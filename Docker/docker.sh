# Comandos Docker
docker compose -f build/docker-compose/ubuntu/ub-node-nginx.yml build --no-cache
docker compose -f build/docker-compose/ubuntu/ub-node-nginx.yml down
docker compose -f build/docker-compose/ubuntu/ub-node-nginx.yml up -d --remove-orphans