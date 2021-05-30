FROM mhart/alpine-node:12

RUN apk update && \
    npm install pm2@latest -g

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

COPY . .

EXPOSE 3000

CMD [ "pm2-runtime", "/app/ecosystem.config.js" ]