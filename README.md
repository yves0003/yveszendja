# How i build my website

## Règles

Pour les codes, toujours mettre 1 tags

Pour les articles toujours mettres au moins 2 tags

photoUrl uniquement pour voyages et découvertes

## Configurer son espace de travail

### 1 - Installer les dépendance

      yarn create next-app --typescript

### 2 - Supprimer les fichiers inutiles

### 3 - Installer sass et mettre à jour next.config

- installer sass à l'aide de yarn

      yarn add sass -D

- Dans next-config ajouter :

      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },

### 4 - Installer style-components

- Installer à l'aide de yarn

      yarn add styles-component
      yarn add @types/styled-components -D

- mettre à jour le package.json

      "resolutions": {
        "styled-components": "^5"
      }

### 5 - Rajouter prettierrc

- copier le fichier dans 1 de mes repertoires de travail : .prettierrc

### 6- Mettre à jour yarn

Lien pour la [migration](https://yarnpkg.com/getting-started/migration)

lien pour les fichier yarn à inclure dans [.gitignore](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

mettre à jour toutes les dépendances dans packages.json
[lien source](https://stackoverflow.com/questions/62650640/yarn-how-do-i-update-each-dependency-in-package-json-to-the-latest-version)
Résumé:
installer le plugin : yarn plugin import interactive-tools
exécuter: yarn upgrade-interactive
