# Mallow - Social Media App

Mallow est une plateforme de réseau social moderne, inspirée d'Instagram, permettant aux utilisateurs de partager leur quotidien à travers des photos. Ce projet est une application Full Stack performante utilisant les dernières technologies du Web.

Ce projet est en cours de développement. 

# Technologies utilisées

## Frontend

- React.js (Vite) : Pour une interface réactive et une expérience de développement ultra-rapide.

- Tailwind CSS (v4) : Pour un design moderne, "mobile-first" et entièrement personnalisé.

- Shadcn UI : Une collection de composants accessibles et stylisés.

- React Query (TanStack) : Pour la gestion de l'état serveur, le caching et les synchronisations de données.

## Backend

- Appwrite : Authentification, base de données NoSQL, stockage d'images (Buckets) et gestion des fichiers.

# Fonctionnalités clés

- Authentification complète : Inscription et connexion sécurisées via Appwrite.

- Gestion des Posts : Création, modification et suppression de publications avec upload d'images.

- Interactions : Système de "Like" et sauvegarde de posts (Bookmarks).

- Exploration : Recherche d'utilisateurs et de publications en temps réel.

- Responsive Design : Interface fluide adaptée du smartphone à l'ordinateur de bureau.

- Optimisation : Chargement infini (Infinite Scroll) et gestion des données optimisée avec React Query.

# Installation et Configuration

1. Cloner le projet

Bash
git clone https://github.com/douniacodes/mallow.git
cd mallow

2. Installer les dépendances

Bash
npm install

3. Variables d'environnement

Créez un fichier .env.local à la racine et ajoutez vos identifiants Appwrite

4. Lancer l'application

Bash
npm run dev

# Structure du Projet

src/
├── _auth/          # Pages d'authentification (Login/Register)
├── _root/          # Pages principales de l'app (Feed, Explore, etc.)
├── components/     # Composants réutilisables (Shared & UI)
├── lib/            # Configuration Appwrite, Utils et Validations (Zod)
├── context/        # Authentification et état global
└── queries/        # Hooks personnalisés TanStack Query

# TO DO LIST (ROADMAP)

[ ] Ajouter les commentaires sous les posts.

[ ] Système de messagerie instantanée (Realtime).

[ ] Mode sombre / Mode clair dynamique.

[ ] Notifications push pour les likes.

# Auteur

Dounia Boukrim (@douniacodes)

GitHub : @douniacodes

LinkedIn : Dounia B.

