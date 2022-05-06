FROM node:16-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV=production
COPY . .
RUN yarn build
CMD sleep 5 && npx prisma migrate dev && yarn start
