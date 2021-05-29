# envsubst < ./system/template-docker-compose.yml > ./docker-compose.yml
docker-compose --env-file "./.env.prod" build 
docker-compose push