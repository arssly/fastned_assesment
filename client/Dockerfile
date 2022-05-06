FROM node:16-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV=production
COPY . .
RUN yarn build

FROM caddy:2-alpine AS server
WORKDIR /app
COPY Caddyfile .
COPY --from=build /app/build/ .
CMD caddy run
