FROM node:14-alpine

RUN mkdir /app && chown -R node:node /app

USER node

WORKDIR /app

COPY --chown=node:node package.json package-lock*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]