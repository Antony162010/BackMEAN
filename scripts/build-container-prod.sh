envsubst < ./system/template-docker-compose.yml > ./docker-compose.yml
docker-compose build
docker-compose push