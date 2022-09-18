FROM php:7.4-cli
 
WORKDIR /var/www
 
RUN apt update && \
    apt install libzip-dev -y && \
    docker-php-ext-install zip
 
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
 
RUN composer create-project --prefer-dist laravel/laravel laravel
 
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]

CMD [ "--host=0.0.0.0" ]
