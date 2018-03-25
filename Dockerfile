FROM armhf/alpine

RUN apk --update add nodejs

WORKDIR /root/
ADD ./package.json ./package.json

RUN npm i
ADD ./app.js ./app.js

CMD ["node", "app.js"]