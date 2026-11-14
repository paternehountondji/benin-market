# Benin Market

Annuaire des entreprises du Bénin : recherche par produit, par ville et par catégorie. Projet pilote né de SMART HOUSE (Lokossa), préparé pour une candidature de financement à Sèmè City.

## Fichiers

- `index.html` : page d'accueil (recherche par produit et par ville, catégories, membre fondateur, appel à rejoindre)
- `annuaire.html` : liste complète, recherche, filtre par ville et par catégorie
- `vision.html` : le problème, comment ça marche, la suite du projet
- `rejoindre.html` : formulaire d'inscription des entreprises
- `styles.css` : toute la mise en forme
- `script.js` : chargement des données et logique de recherche et de filtres
- `businesses.json` : les données des entreprises (actuellement des exemples, à remplacer)

## Tester en local

`index.html` et `annuaire.html` chargent `businesses.json` avec `fetch()`. Les navigateurs bloquent cet appel si on ouvre simplement le fichier HTML en double-cliquant dessus (protocole `file://`). Il faut un petit serveur local. Dans PowerShell, lance les commandes une par une :

```powershell
cd benin-market
```

```powershell
python -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans le navigateur. (Avec VS Code, l'extension "Live Server" fait la même chose en un clic.)

## Remplacer les données d'exemple

Dans `businesses.json`, chaque entreprise dont le nom finit par `(exemple)` doit être remplacée par une vraie entreprise, ou supprimée. Mets aussi le vrai numéro et le vrai lien de SMART HOUSE. Garde le même format :

```json
{
  "nom": "...",
  "categorie": "electronique",
  "ville": "...",
  "description": "...",
  "contact": "+229 ...",
  "lien": "",
  "membreFondateur": false
}
```

Les catégories valides sont listées en haut de `script.js` (`CATEGORIES`). Le filtre par ville se remplit tout seul à partir des villes présentes dans `businesses.json`. Le numéro de contact sert aussi pour le lien WhatsApp : écris-le avec l'indicatif (`+229 ...`).

## Activer le formulaire "Rejoindre"

Le formulaire pointe vers `https://formspree.io/f/VOTRE_ID_FORMSPREE` dans `rejoindre.html`. Pour qu'il fonctionne :

1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire et copie son ID
3. Remplace `VOTRE_ID_FORMSPREE` dans `rejoindre.html` par cet ID

Sans cette étape, le formulaire reste visible mais n'envoie rien.

## Déployer sur GitHub Pages

1. Crée un nouveau dépôt GitHub nommé `benin-market`
2. Ajoute tous ces fichiers à la racine du dépôt, puis commit et push
3. Dans les paramètres du dépôt, ouvre *Pages* et choisis la branche principale comme source
4. Le site sera disponible à `https://<ton-identifiant>.github.io/benin-market/`

## Prochaines étapes

- Remplacer les entreprises d'exemple par de vraies entreprises (viser au moins 10 à 15, dans plusieurs villes)
- Mettre les vraies coordonnées de SMART HOUSE dans `businesses.json`
- Activer Formspree
- Déployer et tester le lien final avant de le mettre dans la candidature
