FROM node:slim

WORKDIR /usr/app/src

COPY package*.json /usr/app

RUN npm install

RUN npm audit fix

COPY ./src .

EXPOSE 3000

CMD ["npm", "install"]


