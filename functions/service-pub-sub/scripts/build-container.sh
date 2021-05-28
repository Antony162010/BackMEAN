GC_PROJECT_ID=$(grep GC_PROJECT_ID .env.prod | cut -d '=' -f2)
COMMIT_ID=$(git rev-parse --verify HEAD)

# docker login -u _json_key --password-stdin https://us.gcr.io < src/config/gcp-key.json # Only first time
docker build --tag us.gcr.io/$GC_PROJECT_ID/service-pub-sub:$COMMIT_ID .
docker push us.gcr.io/$GC_PROJECT_ID/service-pub-sub:$COMMIT_ID
