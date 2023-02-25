FROM node:lts-alpine
WORKDIR /usr/app/
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod +x /usr/src/app/node_modules/.bin/nodemon