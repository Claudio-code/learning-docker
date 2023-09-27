FROM ubuntu:18.04

LABEL maintainer="soneca@gmail.com"

EXPOSE 80

ENV APP_VERSION=1.0.0

RUN apt update \
    && apt install nginx curl -y \
    && rm -rf /var/lib/apt/lists/*

ADD ./example-tar.tar.gz /root/node-exporter

COPY index.html /var/www/html/

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]

HEALTHCHECK --timeout=3s CMD curl -f http://localhost || exit 1
