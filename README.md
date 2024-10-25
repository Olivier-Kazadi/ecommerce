E-commerce Project

    Un projet de site e-commerce basique développé avec Node.js, Express et MongoDB. Ce projet permet aux utilisateurs de parcourir des produits, d'ajouter des articles au panier, et de passer des commandes. Il inclut des fonctionnalités d'authentification, de gestion de produits, et de commandes.

Table des matières

    Aperçu du projet
    Fonctionnalités
    Technologies utilisées
    Configuration et Installation
    Utilisation
    Structure des dossiers
    Contributions
    Licence

Aperçu du projet

Ce projet de site e-commerce est conçu pour démontrer les bases d'une application de commerce en ligne, incluant les interactions backend nécessaires pour l'authentification des utilisateurs, la gestion de produits, et la gestion des commandes. Le frontend est basique, et conçu avec HTML et CSS.
Fonctionnalités

    Inscription et connexion des utilisateurs
    Gestion des produits : Voir les détails des produits, consulter les stocks.
    Panier d'achat : Ajouter, visualiser et supprimer des articles du panier.
    Gestion des commandes : Passer des commandes et consulter l'historique des commandes.

Technologies utilisées

    Backend : Node.js, Express
    Base de données : MongoDB
    Authentification : JSON Web Token (JWT) et bcrypt.js pour le hachage des mots de passe
    Frontend : HTML, CSS, JavaScript (basique)

Configuration et Installation

    Cloner le dépôt

git clone https://github.com/votre-utilisateur/ecommerce.git
cd ecommerce

Installation des dépendances

Assurez-vous d'avoir Node.js et npm installés. Puis, exécutez la commande suivante dans le terminal :

npm install

Configuration de l'environnement

Créez un fichier .env à la racine du projet avec les variables suivantes :

MONGO_URI=<votre_lien_mongodb>
JWT_SECRET=<votre_secret_jwt>
PORT=5000

Lancer le serveur

Utilisez nodemon pour lancer le serveur en mode développement :

    npm run dev

    Le serveur sera accessible sur http://localhost:5000.

Utilisation
Endpoints principaux

    Utilisateurs
        POST /api/auth/register : Inscription d'un nouvel utilisateur
        POST /api/auth/login : Connexion de l'utilisateur

    Produits
        GET /api/products : Récupérer tous les produits
        GET /api/products/:id : Récupérer un produit spécifique par ID

    Commandes
        POST /api/orders : Créer une commande (utilisateur authentifié)
        GET /api/orders : Récupérer les commandes d'un utilisateur (utilisateur authentifié)

Structure des dossiers

ecommerce/
├── controllers/        # Contrôleurs pour les routes
├── models/             # Modèles de données (User, Product, Order)
├── routes/             # Routes de l'API (auth, products, orders)
├── views/              # Fichiers HTML pour le frontend
├── public/             # Ressources statiques (CSS, JS)
├── config/             # Configuration de la base de données
├── app.js              # Point d'entrée de l'application
├── package.json        # Fichier de configuration npm
└── .env                # Variables d'environnement

Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, vous pouvez faire un fork du dépôt, créer une branche avec votre fonctionnalité, et soumettre une pull request.

    Forkez le projet
    Créez une branche avec votre fonctionnalité (git checkout -b feature/FeatureName)
    Commitez vos modifications (git commit -m 'Add FeatureName')
    Poussez votre branche (git push origin feature/FeatureName)
    Ouvrez une Pull Request

Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer.