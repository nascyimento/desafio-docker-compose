FROM node:20.14.0

WORKDIR /usr/src/app

COPY docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["node", "index.js"]
