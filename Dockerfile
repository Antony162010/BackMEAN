FROM mhart/alpine-node:12

RUN apk update && \
    npm install pm2@latest -g

ENV NODE_ENV production
ENV JWT_KEY 123456
ENV APP_PORT 3000
ENV APP_URL /api/v1

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

COPY . .

RUN chmod 777 /app/scripts/deploy.sh

EXPOSE 3000

RUN  sh /app/scripts/deploy.sh
RUN echo $MONGODB_URI
CMD pm2-runtime /app/ecosystem.config.js