# Benin Market

Annuaire des entreprises du Bénin : recherche par produit, par ville et par catégorie. Projet pilote né de SMART HOUSE (Lokossa), préparé pour une candidature de financement à Sèmè City.

## Fichiers

- `index.html` : page d'accueil (recherche par produit et par ville, catégories, membre fondateur, appel à rejoindre)
- `annuaire.html` : liste complète, recherche, filtre par ville et par catégorie
- `vision.html` : le problème, comment ça marche, la suite du projet
- `rejoindre.html` : formulaire d'inscription des entreprises
- `avis.html` : formulaire pour donner un avis sur une entreprise
- `favicon.svg` : l'icône BM affichée dans l'onglet du navigateur
- `styles.css` : toute la mise en forme
- `script.js` : chargement des données et logique de recherche et de filtres
- `businesses.json` : les données des entreprises (à compléter avec de nouvelles entreprises)

## Tester en local

`index.html` et `annuaire.html` chargent `businesses.json` avec `fetch()`. Les navigateurs bloquent cet appel si on ouvre simplement le fichier HTML en double-cliquant dessus (protocole `file://`). Il faut un petit serveur local. Dans PowerShell, lance les commandes une par une :

```powershell
cd benin-market
```

```powershell
python -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans le navigateur. (Avec VS Code, l'extension "Live Server" fait la même chose en un clic.)

## Ajouter une entreprise

Dans `businesses.json`, ajoute un bloc par entreprise, avec des coordonnées vérifiées. Garde le même format :

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

## Ajouter un avis

Les avis arrivent par le formulaire `avis.html` (via Formspree). Après vérification, ajoute-les à la main dans `businesses.json`, dans le champ `avis` de l'entreprise :

```json
"avis": [
  { "auteur": "Prénom N.", "note": 5, "texte": "Le texte de l'avis." }
]
```

Ne publie que des avis réellement reçus.

## Activer le formulaire "Rejoindre"

Le formulaire pointe vers `https://formspree.io/f/VOTRE_ID_FORMSPREE` dans `rejoindre.html` et dans `avis.html`. Pour qu'il fonctionne :

1. Crée un compte gratuit sur [formspree.io](https://formspree.io)
2. Crée un nouveau formulaire et copie son ID
3. Remplace `VOTRE_ID_FORMSPREE` dans `rejoindre.html` et `avis.html` par cet ID

Sans cette étape, le formulaire reste visible mais n'envoie rien.

## Déployer sur GitHub Pages

1. Crée un nouveau dépôt GitHub nommé `benin-market`
2. Ajoute tous ces fichiers à la racine du dépôt, puis commit et push
3. Dans les paramètres du dépôt, ouvre *Pages* et choisis la branche principale comme source
4. Le site sera disponible à `https://<ton-identifiant>.github.io/benin-market/`

## Prochaines étapes

- Ajouter de vraies entreprises (viser au moins 10 à 15, dans plusieurs villes)
- Activer Formspree
- Déployer et tester le lien final avant de le mettre dans la candidature

## La boutique SMART HOUSE (dossier `smart-house/`)

Première boutique en ligne créée avec Benin Market. Adresse : `https://<ton-identifiant>.github.io/benin-market/smart-house/`

- `products.json` : la liste des produits. Pour chaque produit : `nom`, `categorie` (`telephonie`, `audio` ou `maison`), `prix` en FCFA (un nombre sans espace), `description`.
- **Photos** : mets l'image dans `smart-house/photos/`, puis écris son chemin dans le champ `photo`, par exemple `"photo": "photos/ecouteurs.jpg"`. Sans photo, un pictogramme s'affiche.
- `"demo": true` affiche le bandeau jaune « Catalogue de démonstration ». Passe-le à `false` quand les vrais produits et les vrais prix sont en place.
- `whatsapp` : le numéro qui reçoit les commandes, sans `+` ni espaces.

Le panier et le compte client sont enregistrés dans le navigateur du client. Il n'y a pas de paiement en ligne : la commande part sur WhatsApp.
