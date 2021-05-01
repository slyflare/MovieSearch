FROM node:14-slim

WORKDIR /app

COPY package*.json ./server

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]