FROM node:12

WORKDIR /DOCKERASSIGNMENT

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081


CMD [ "node", "server.js" ]