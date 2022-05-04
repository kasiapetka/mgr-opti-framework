FROM --platform=linux/amd64 node:alpine

WORKDIR /usr/src/app/api

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001

CMD ["npm", "run", "start-server"]