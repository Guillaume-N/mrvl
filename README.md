# mrvl - test technique

Ce projet est le résultat d'un test technique qui m'a été demandé. Le sujet était :
```A partir de l'[API Marvel](https://developer.marvel.com/), affichez une liste de 20 personnages à partir du centième. Chaque item de la liste doit avoir le nom du personnage et son image et un clic sur son nom doit afficher le détail du personnage avec les informations suivantes : name / description / image / le nombre de comics où le personnage apparait / les titres des 3 premiers comics où le personnage apparaît.```

## Technologies

Le projet utilise :
- React et Create-React-App
- React Router pour le routing
- [https://www.npmjs.com/package/prop-types](prop-types) et defaultProps pour la validation des props
- [rbx](https://dfee.github.io/rbx/), implémentation du framework CSS [Bulma](https://bulma.io/) pour le design
- [materialuicolors](https://materialuicolors.co/), une palette de couleurs MaterialUI
- [surge.sh](https://surge.sh/) pour le déploiement

## Démo

https://mrvl.surge.sh/

## Si c'était à refaire

Le projet date d'une époque où mes connaissances en React étaient plus limitées qu'aujourd'hui, si c'était à refaire :
- Je réécrirais les Class Based Components en Functional Components avec des Hooks,
- J'essayerais de placer des concepts de React un peu plus avancés comme l'API context ou du lazy loading avec Suspense ou des Error Boundaries, par exemple,
- J'éviterais de mettre des conditions dans les méthodes render() de mes composants et les déplacerais plutôt dans des fonctions helpers,
- J'utiliserais les grilles CSS pour le design plutôt qu'un framework CSS, pour de meilleures performances,
- J'utiliserais seulement une couleur forte et des nuances de gris pour un design moins chargé,
- Idéalement, mais cela prend du temps, il aurait fallu créer un serveur pour cacher les images côté serveur, car le premier chargement du site est assez long à cause du nombre d'images.

Aussi, il y a un bug à corriger quand on charge la page /character/:id avec un id de personnage qui n'existe pas.

## Installer le projet

Télécharger le repo, ou le forker et télécharger le fork.

```
cd marvel
npm install
```

Ensuite, dans src/utils, créer un fichier API_KEY.js et lui donner le contenu suivant :

```
const API_PUBLIC_KEY = "your_api_key";

export default API_PUBLIC_KEY;
```

Enfin, taper :

```
npm run start
```

