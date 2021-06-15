FROM node:16-buster-slim as build
WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn test
RUN yarn tsc



FROM node:16-buster-slim
WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
COPY --from=build /usr/app/dist ./dist
EXPOSE 5000
CMD ["yarn", "start"]