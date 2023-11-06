Société ArgentBank


## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
`nvm use v12`
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)


```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```
Your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database!

--> Go README in Backend

Explication projet:

![Alt text](src/assets/images/argentBankLogo.png)

Mise en place du tableau de bord des utilisateurs en 2 phases.

But de la première phase :

- Créer l’application web complète et responsive avec React (nous avions le HTML et CSS pour la page d'accueil, la page de connexion et la page de profil déjà fourni)
- Utiliser Redux pour gérer le state de l'ensemble de l'application.

- Ce que doit faire l’application :

    •  L'utilisateur peut visiter la page d’accueil.
    •  L'utilisateur peut se connecter au système.
    •  L'utilisateur peut se déconnecter du système.
    •  L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès.
    •  L’utilisateur ne peut pas modifier son nom ni son prénom, mais il peut modifier son pseudo.
      
Actions :
- Forker le repo existant 
- Intégrer une bonne pratique de Green Code (optimisation des images et du code).

Les routes API déjà crée par les ingénieurs back-end. 

Le but de la deuxième phase :

- Donner notre avis pour la modélisation coté back-end des routes API concernant les transactions.

- Elles doivent permettre aux utilisateurs 
    •  De visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
    •  De visualiser les détails d'une transaction dans une autre vue ;
    •  D'ajouter, de modifier ou de supprimer des informations sur une transaction (on ne supprimera ou n'ajoutera pas de transaction).

Actions :
Fournir un document décrivant les routes API proposées pour les manipulations sur les transactions, en suivant les directives de Swagger.  

Mise en place du projet
Frontend
- Installation dépendance « npm install »
- Modification node v12 avec « nvm use v12 »
- Installation create-react-app « npm create-react-app@3.4.1 -- scripts-version 4 .0.3
- Installation react-router-dom « npm install react-router-dom »
- Installation de redux et toolkit « npm install react-redux @reduxjs/toolkit
- Installation immer « npm install immer »
- Installation MongoDB –> db version v7.0.2

Lancement du projet

Modifier node avec « nvm use v12 »
Lancer le serveur en local depuis le backend avec ‘npm run dev:server’
Lancer l’application depuis le frontend avec ‘npm start’
La base de donnée avec ‘npm run populate-db’ ou avec l’extension mongoDB de vsCode



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
