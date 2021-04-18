FROM mhart/alpine-node:12

RUN apk update && \
    npm install pm2@latest -g

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

COPY . .

RUN chmod 777 /app/scripts/deploy.sh

EXPOSE 3000

CMD [ "sh", "/app/scripts/deploy.sh" ]