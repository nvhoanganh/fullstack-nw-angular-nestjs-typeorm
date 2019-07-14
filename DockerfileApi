FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ["dist/apps/api/main.js", "./"]
EXPOSE 3333
CMD [ "node", "main.js" ]
