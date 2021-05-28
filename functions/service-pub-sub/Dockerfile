FROM mhart/alpine-node:12

ENV NODE_ENV production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn 

COPY . .

CMD [ "npm", "start" ]