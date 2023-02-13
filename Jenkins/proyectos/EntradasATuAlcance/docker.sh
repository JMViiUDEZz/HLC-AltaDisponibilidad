# Comandos Docker
cd docker-compose/ubuntu/
docker compose -f ub-node-nginx-nest.yml build --no-cache
docker compose -f ub-node-nginx-nest.yml down
docker compose -f ub-node-nginx-nest.yml up -d --remove-orphans