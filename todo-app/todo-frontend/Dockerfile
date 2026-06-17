FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

RUN npm install -g serve

ENV VITE_BACKEND_URL=http://localhost:3000

CMD ["serve", "-n", "dist"]