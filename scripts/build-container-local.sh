DATABASE=$(grep MONGODB_URI .env.prod | cut -d '=' -f2)
GC_PROJECT_ID=$(grep GC_PROJECT_ID .env.prod | cut -d '=' -f2)
COMMIT_ID=$(git rev-parse --verify HEAD)

# docker login -u _json_key --password-stdin https://us.gcr.io < src/config/gcp-key.json # Only first time
docker build --tag us.gcr.io/$GC_PROJECT_ID/backmean:$COMMIT_ID --build-arg DATABASE=$DATABASE .
docker push us.gcr.io/$GC_PROJECT_ID/backmean:$COMMIT_ID
