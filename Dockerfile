FROM mhart/alpine-node:12
ARG DATABASE

RUN apk update && \
    npm install pm2@latest -g

ENV NODE_ENV production
ENV JWT_KEY 123456
ENV APP_PORT 3000
ENV APP_URL /api/v1
ENV MONGODB_URI ${DATABASE}

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

COPY . .

EXPOSE 3000

CMD [ "pm2-runtime", "/app/ecosystem.config.js" ]