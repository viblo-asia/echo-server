FROM node:14-alpine

ENV NODE_ENV=production
ENV PORT=6001

COPY index.js /srv/index.js
COPY package.json /srv/package.json
COPY src /srv/src

WORKDIR /srv

RUN yarn
RUN yarn cache clean

EXPOSE 6001
CMD ["yarn", "start"]
