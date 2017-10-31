FROM node:8-alpine

ENV NODE_ENV=production
ENV PORT=6001

ADD . /srv

WORKDIR /srv

RUN npm install
RUN npm cache clean --force

EXPOSE 6001
CMD ["npm", "run", "start"]
