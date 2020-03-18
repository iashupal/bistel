FROM php:7.1.30-apache

RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html

COPY ./build /var/www/html
COPY ./.htaccess /var/www/html