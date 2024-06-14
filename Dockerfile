FROM node:21-alpine

WORKDIR /usr/app/src

COPY package*.json /usr/app

RUN npm install

RUN npm audit fix

COPY ./src .

EXPOSE 3000

CMD ["npm", "start"]


