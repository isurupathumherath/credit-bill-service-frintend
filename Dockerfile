FROM node:12.22.10-alpine3.14 AS build_image
RUN apk add --no-cache nodejs npm
WORKDIR /isuru
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.22.10-alpine3.14
WORKDIR /webapp
COPY --from=build_image /isuru /webapp/
EXPOSE 3000
CMD [ "npm", "start" ]