FROM node:4
COPY . /usr/src/app
RUN npm install forever -g
EXPOSE 1337
ENTRYPOINT node app.js --prod