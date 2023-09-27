FROM alpine:3.12

RUN apk add --no-cache nginx

RUN mkdir -p /run/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]