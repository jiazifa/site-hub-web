FROM nginx:1.19.6-alpine

COPY ./build /usr/share/nginx/html

EXPOSE 80