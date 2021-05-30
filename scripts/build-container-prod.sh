envsubst < ./system/template-docker-compose.yml > ./docker-compose.yml
docker-compose --env-file ./.env.prod config > ./docker-compose.yaml
rm ./docker-compose.yml
mv ./docker-compose.yaml ./docker-compose.yml
docker-compose build 
docker-compose push