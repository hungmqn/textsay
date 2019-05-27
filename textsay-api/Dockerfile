FROM node:8.11.3

WORKDIR /app/sm/api-server

COPY ./ ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 9420
CMD ["npm", "start"]