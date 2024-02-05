# Tests pour le serveur

Le code source du serveur est accompagné d'une série de tests qui permettent de vérifier les interactions entre votre serveur et une instance MongoDB. Le code source des tests est disponible dans le répertoire `server/tests`.

Les tests unitaires utilisent la librairie _Jest_ que vous avez utilisée tout au long de la session. La librairie _MongoMemoryServer_ est utilisée pour remplacer une vraie instance de MongoDB par une instance _mocked_ pour les tests. Il est très important de se connecter à une base de données locale et contrôlée et non à votre instance MongoDB déployée en mode **production** pendant vos tests.

Vous êtes fortement encouragés de consulter les tests fournis. Ils vous aideront à mieux comprendre le travail à faire et le bon comportement du serveur.

Vous pouvez exécuter les tests unitaires automatisés avec la commande `npm test`. Ceci exécutera les tests et produira un rapport dans votre terminal. La commande `npm run coverage` pour la couverture de code est à votre disposition.

Notez que la fonction `console.log()` est remplacée par un mock vide (`()=>{ }`) pour diminuer le bruit dans la console lors des tests. Évitez l'utilisation de `console.log()` pour deboguer vos tests.

# Tests pour le site web

Quelques tests sont fournis pour votre site web dans le cadre de ce travail pratique. Notez que les tests fournis sont là pour aider le développement, mais ne couvrent pas 100% des cas possibles.

Les fonctions non testées dans `CreatePlaylist.jsx` vous sont déjà fournies et vous pouvez assumer qu'elles sont bien implémentées. Nous vous recommandons également de tester manuellement les différentes fonctionnalités pour vous assurer de leur bon fonctionnement et vérifier que chaque élément UI de votre page web se situe au bon endroit.