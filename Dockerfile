FROM mhart/alpine-node:12

ENV NODE_ENV ${NODE_ENV}
ENV JWT_KEY ${JWT_KEY}
ENV APP_PORT ${APP_PORT}
ENV APP_URL ${APP_URL}
ENV MONGODB_URI ${MONGODB_URI}
ENV GC_EMAIL ${GC_EMAIL}
ENV GC_PROJECT_ID ${GC_PROJECT_ID}
ENV GC_PUBSUB_TOPIC ${GC_PUBSUB_TOPIC}
ENV GC_PRIVATE_KEY ${GC_PRIVATE_KEY}

RUN apk update && \
    npm install pm2@latest -g

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 
RUN echo $GC_PROJECT_ID

COPY . .

EXPOSE 3000

CMD [ "pm2-runtime", "/app/ecosystem.config.js" ]