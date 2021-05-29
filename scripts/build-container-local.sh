GC_PROJECT_ID=$(grep GC_PROJECT_ID .env.prod | cut -d '=' -f2)
export CI_COMMIT_SHA=$(git rev-parse --verify HEAD)
export CONTAINER_REGISTRY=us.gcr.io/$GC_PROJECT_ID/backmean

# docker login -u _json_key --password-stdin https://us.gcr.io < src/config/gcp-key.json # Only first time
# docker build --tag $CONTAINER_REGISTRY:$CI_COMMIT_SHA .
# docker push $CONTAINER_REGISTRY:$CI_COMMIT_SHA
envsubst < ./docker-compose-template.yml > ./docker-compose.yml
docker-compose up -d