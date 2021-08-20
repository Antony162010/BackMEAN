FROM mhart/alpine-node:12

ENV NODE_ENV production

WORKDIR /app

COPY ["package.json", "./"]

RUN yarn 

COPY . .

CMD [ "npm", "start" ]