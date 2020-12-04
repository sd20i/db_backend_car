FROM node:12.3.1-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

ENTRYPOINT [ "node", "src/app.js" ]
