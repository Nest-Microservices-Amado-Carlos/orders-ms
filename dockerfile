FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/
RUN npm install

COPY . .

RUN npm install @prisma/client
RUN npx prisma generate 

EXPOSE 3002
