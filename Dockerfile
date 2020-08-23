FROM node:12.18.3-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build

CMD npm run start

FROM nginx:1.19.2

COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
