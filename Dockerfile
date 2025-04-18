# syntax = docker/dockerfile:1

ARG NODE_VERSION=23.1.0
FROM node:${NODE_VERSION}-slim as base
ARG PORT=3000
WORKDIR /src

# Build
FROM base as build

COPY --link package.json package-lock.json .
RUN npm install

COPY --link . .
RUN npm run build

# Run
FROM base

ENV PORT=$PORT
ENV NODE_ENV=production

COPY --from=build /src/.output /src/.output
COPY --from=build /src/.output/public /src/public

CMD ["node", ".output/server/index.mjs" ]