FROM node:18-alpine

COPY ./src /frontend/src
COPY package.json /frontend/package.json
COPY vite.config.js /frontend/vite.config.js

WORKDIR /frontend

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host" ]
