FROM node:12

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json  ./

RUN yarn 

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]