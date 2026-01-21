FROM mcr.microsoft.com/devcontainers/php:8.4

# Installation des extensions PHP nécessaires pour Laravel
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath

# On vérifie si xdebug est déjà là, sinon on l'installe. 
# On utilise "|| true" pour éviter que le build plante si déjà présent.
RUN pecl install xdebug || echo "Xdebug déjà installé"

# On active l'extension
RUN docker-php-ext-enable xdebug

# On supprime d'éventuels fichiers de config conflictuels
RUN rm -f /usr/local/etc/php/conf.d/*xdebug.ini

# On crée une configuration propre
RUN echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/20-xdebug.ini \
    && echo "xdebug.client_port=9003" >> /usr/local/etc/php/conf.d/20-xdebug.ini \
    && echo "xdebug.client_host=host.docker.internal" >> /usr/local/etc/php/conf.d/20-xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/20-xdebug.ini \
    && echo "xdebug.log=/tmp/xdebug.log" >> /usr/local/etc/php/conf.d/20-xdebug.ini

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# S'assurer que les dossiers de stockage existent et sont scriptables
RUN mkdir -p storage/framework/sessions \
             storage/framework/views \
             storage/framework/cache \
             bootstrap/cache \
    && chown -R vscode:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache