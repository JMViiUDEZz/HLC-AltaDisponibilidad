# Comandos Docker
docker compose -f build/docker-compose/ubuntu/ub-postgres-node-nginx-nest.yml build --no-cache
docker compose -f build/docker-compose/ubuntu/ub-postgres-node-nginx-nest.yml down
docker compose -f build/docker-compose/ubuntu/ub-postgres-node-nginx-nest.yml up -d --remove-orphans