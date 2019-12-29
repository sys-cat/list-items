FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR ./list-data

COPY ./list-data/package*.json ./

RUN npm install

COPY ./list-data .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
