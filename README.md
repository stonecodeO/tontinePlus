## TontinePLus

C'est une application de gestion d'épargne et un système de tontine à l'africaine.
##Architecture 

TontinePlus s'appuie sur le framework Laravel pour les api rest pour le backend
et un frontend écrit entièrement en vanilla Javascript..

TontinePLus est concu sous en microservices. Toutefois pour le moment le projet tourne totalement sur le serveur local de laravel et n'admet qu'une seule route, le routing devant être gérer côté frontend


## Lancer le projet chez vous

### côté backend ###

-> installer les dépendances côté laravel avec composer (prérequis: installer composer)
        ** php composer install or php composer.phar install
-> créer un fichier .env à la racine du projet en remplissant correctement les informations de votre base de données.
        ps: vous pouvez vous inspiré du .env.example
-> Migrations et seeding (pour générer les fixtures qui permettent de remplir la base de données avec des données fictives.
        php artisan migrate --seed
->lancer le serveur web
    php artisan serve
    
### côté Frontend #### 

-> Installer les dépendances 
    npm install ou yarn 
-> lancer le serveur de frontend avec vite comme bundler
    npm run dev ou yarn run dev

### Authentification 

    aller dans le fichier "database/seeders/userAndRoleSeeder" pour voir les comptes crés avec les mots de passe. Ceci vous permettra de vous connecter et avoir une meilleure expérience utilisateur..Toutefois si vous souhaitez créer vote propre compte de test (la vue register n'etant pas encore faite). vous pouvez utilisé un client http (postman) et vous enregistrer sur l'url: http://localhost:8000/api/register et renseigner (name, email et password) vous obtiendrez ensuite un token qui vous permmettra d'authoriser les requêtes 
    
### L'application est disponible sur localhost:8000
