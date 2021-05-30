GC_PROJECT_ID=$(grep GC_PROJECT_ID .env.prod | cut -d '=' -f2)
export CI_COMMIT_SHA=$(git rev-parse --verify HEAD)
export CONTAINER_REGISTRY=us.gcr.io/$GC_PROJECT_ID/backmean
export TYPE_ENV=.prod

# docker login -u _json_key --password-stdin https://us.gcr.io < src/config/gcp-key.json # Only first time
envsubst < ./system/template-docker-compose.yml > ./docker-compose.yml
docker-compose build 