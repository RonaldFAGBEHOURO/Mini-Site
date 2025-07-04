
# Mini Site - Connexion / Inscription

Ce projet est une application web simple avec une interface de connexion / inscription côté client (React) et un backend en NodeJS/Express, connecté à une base PostgreSQL (hébergée sur Supabase) via Prisma.

---

## Structure du projet

```

mini\_site/
├── backend/         # Serveur Express + Prisma
│   ├── index.js
│   ├── prisma/
│   │   └── schema.prisma
│   ├── package.json
│   └── .env         # Variables d'environnement
│
├── frontend/        # Interface React
│   ├── src/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env         # Variables d'environnement React

```

---

## Prérequis

- [Node.js](https://nodejs.org/) (v18+ recommandé)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

##  Backend - Installation et lancement

Dans un premier terminal à laisser tourner en arrière plan afin de lancer le serveur du backend:

```bash
cd backend
npm install
node index.js                        # Lance le serveur sur http://localhost:3001
````

---

##  Frontend - Installation et lancement

Dans un second terminal :

```bash
cd frontend
npm install
npm start                            # Lance l'app React sur http://localhost:3000
```

L'interface vous permet de :

* S'inscrire avec un nom + email
* Se connecter avec le **même nom + email**
* Voir les infos de l'utilisateur et un lien vers la liste des utilisateurs

---

## API disponibles (backend)

| Méthode | URL         | Description                           |
| ------: | ----------- | ------------------------------------- |
|    POST | `/register` | Enregistre un nouvel utilisateur      |
|    POST | `/login`    | Connecte un utilisateur (nom + email) |
|     GET | `/users`    | Liste des utilisateurs (JSON brut)    |

---

## Technologies utilisées

* Backend : ExpressJS, Prisma, PostgreSQL
* Frontend : ReactJS
* Hébergement DB : Supabase

---

## 🛑 À ne pas versionner (déjà ignoré via `.gitignore`)

* `node_modules/`
* `.env`
* `prisma/migrations/` (optionnel)
* fichiers système `.DS_Store`, `Thumbs.db`

---

##  Auteur

Projet développé par Ronald FAGBEHOURO
'''
