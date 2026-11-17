/* ===========================================================
   Benin Market — changement de langue (français / anglais)
   Le site est écrit en français. Quand le visiteur choisit EN,
   ce fichier remplace chaque texte par sa traduction ci-dessous.
   Pour traduire un nouveau texte : ajoute une ligne
   "texte français": "English text" dans le dictionnaire EN.
   =========================================================== */

(function () {
  const STORAGE_KEY = "bm-lang";

  const EN = {
    /* --- Menu, boutons communs --- */
    "Accueil": "Home",
    "Annuaire": "Directory",
    "Offres": "Plans",
    "Notre vision": "Our vision",
    "Rejoindre": "Join",
    "Menu": "Menu",
    "Fermer": "Close",
    "Aide": "Help",
    "Chercher": "Search",
    "Contact": "Contact",
    "Catégories": "Categories",
    "Catégorie": "Category",
    "Ville": "City",
    "Note": "Rating",
    "Choisir…": "Choose…",
    "Tout": "All",
    "Total": "Total",
    "WhatsApp": "WhatsApp",
    "Changer de langue / Switch language": "Changer de langue / Switch language",

    /* --- Titres des pages --- */
    "Benin Market — l'annuaire des entreprises du Bénin": "Benin Market — the business directory of Benin",
    "Annuaire — Benin Market": "Directory — Benin Market",
    "Offres — Benin Market": "Plans — Benin Market",
    "Notre vision — Benin Market": "Our vision — Benin Market",
    "Rejoindre l'annuaire — Benin Market": "Join the directory — Benin Market",
    "Donner un avis — Benin Market": "Write a review — Benin Market",
    "Merci — Benin Market": "Thank you — Benin Market",
    "SMART HOUSE — boutique en ligne, Lokossa": "SMART HOUSE — online shop, Lokossa",
    "Benin Market : l'annuaire des entreprises du Bénin. Cherchez un produit ou un service et trouvez qui le propose près de chez vous.": "Benin Market: the business directory of Benin. Search for a product or a service and find who offers it near you.",

    /* --- Accueil --- */
    "Trouvez une entreprise béninoise en quelques secondes.": "Find a business in Benin in seconds.",
    "Benin Market rassemble les commerces et services du Bénin dans un seul annuaire. Cherchez un produit ou un service, choisissez votre ville, puis contactez directement l'entreprise.": "Benin Market brings the shops and services of Benin together in one directory. Search for a product or a service, choose your city, then contact the business directly.",
    "entreprises référencées": "businesses listed",
    "villes couvertes": "cities covered",
    "catégories": "categories",
    "Que cherchez-vous ?": "What are you looking for?",
    "Ex. téléphone, couture, hôtel…": "E.g. phone, tailor, hotel…",
    "Rechercher une entreprise ou un produit": "Search for a business or a product",
    "Choisir une ville": "Choose a city",
    "Tout le Bénin": "All of Benin",
    "Autres": "Others",
    "Les entreprises s'affichent pendant que vous écrivez.": "Businesses appear as you type.",
    "Voir toute la catégorie": "See the whole category",
    "Ajouter une entreprise": "Add a business",
    "Parcourir par catégorie": "Browse by category",
    "Du téléphone au menuisier, choisissez un domaine pour voir les entreprises qui s'en occupent.": "From phones to carpenters, choose a field to see the businesses that handle it.",
    "Bientôt": "Coming soon",
    "Benin Market en 34 secondes": "Benin Market in 34 seconds",
    "Le problème, l'annuaire et la boutique en ligne, expliqués en une courte vidéo.": "The problem, the directory and the online shop, explained in a short video (in French).",
    "Votre navigateur ne peut pas lire cette vidéo.": "Your browser cannot play this video.",
    "Télécharger la vidéo": "Download the video",
    "Comment ça marche": "How it works",
    "Tapez un produit, un service ou un nom d'entreprise, ou choisissez une catégorie.": "Type a product, a service or a business name, or choose a category.",
    "Comparer": "Compare",
    "Regardez les fiches : description, ville, avis des clients et boutique en ligne.": "Look at the listings: description, city, customer reviews and online shop.",
    "Contacter": "Contact",
    "Appelez, écrivez sur WhatsApp ou commandez directement dans la boutique de l'entreprise.": "Call, write on WhatsApp or order directly in the business's shop.",
    "Membre fondateur": "Founding member",
    "Vente d'accessoires de téléphonie, d'électronique et de petits appareils électroménagers à Lokossa. Première entreprise référencée sur Benin Market, à l'origine du projet.": "Phone accessories, electronics and small home appliances in Lokossa. The first business listed on Benin Market, and the origin of the project.",
    "Visiter la boutique en ligne": "Visit the online shop",
    "Écrire sur WhatsApp": "Write on WhatsApp",
    "Page Facebook": "Facebook page",
    "Les rayons de la boutique SMART HOUSE à Lokossa": "The shelves of the SMART HOUSE shop in Lokossa",
    "Pas encore de site web ? Nous le créons pour vous.": "No website yet? We build it for you.",
    "Benin Market construit la boutique en ligne de votre entreprise : vos produits avec photos et prix, un panier qui calcule le total, et les commandes qui arrivent sur votre WhatsApp.": "Benin Market builds your business's online shop: your products with photos and prices, a cart that works out the total, and orders that arrive on your WhatsApp.",
    "Voir les offres": "See the plans",
    "Exemple en ligne": "Live example",
    "La boutique SMART HOUSE": "The SMART HOUSE shop",
    "Catalogue, panier et commande WhatsApp, créés avec Benin Market.": "Catalogue, cart and WhatsApp ordering, built with Benin Market.",
    "Vous avez une entreprise au Bénin ?": "Do you run a business in Benin?",
    "Ajoutez-la gratuitement à l'annuaire et devenez plus visible auprès des clients de tout le pays.": "Add it to the directory for free and become more visible to customers across the country.",
    "Ajouter mon entreprise": "Add my business",

    /* --- Pied de page --- */
    "L'annuaire des entreprises du Bénin. Trouvez un produit, un service ou un commerce près de chez vous.": "The business directory of Benin. Find a product, a service or a shop near you.",
    "Explorer": "Explore",
    "Pour les entreprises": "For businesses",
    "Offres et tarifs": "Plans and prices",
    "Exemple de boutique en ligne": "Example of an online shop",
    "Donner un avis": "Write a review",
    "WhatsApp : +229 01 59 00 03 98": "WhatsApp: +229 01 59 00 03 98",
    "Lokossa, Bénin": "Lokossa, Benin",
    "Code source sur GitHub": "Source code on GitHub",
    "Benin Market. Projet pilote né de SMART HOUSE.": "Benin Market. A pilot project born from SMART HOUSE.",
    "Les entreprises sont référencées à partir de leurs informations publiques.": "Businesses are listed from their public information.",

    /* --- Annuaire --- */
    "L'annuaire": "The directory",
    "Tapez un produit ou un nom d'entreprise : la liste se met à jour pendant que vous écrivez.": "Type a product or a business name: the list updates as you type.",
    "Rechercher une entreprise, un produit…": "Search for a business, a product…",
    "Rechercher dans l'annuaire": "Search the directory",
    "Filtrer par catégorie": "Filter by category",
    "Filtrer par ville": "Filter by city",
    "Toutes les catégories": "All categories",
    "Aucune entreprise ne correspond à votre recherche pour l'instant.": "No business matches your search yet.",
    "Ajouter la vôtre": "Add yours",
    "Visiter la boutique": "Visit the shop",
    "Voir le site": "Visit the website",
    "Pas encore d'avis.": "No reviews yet.",
    "Donner le premier avis": "Write the first review",
    "Entreprise vérifiée": "Verified business",

    /* --- Catégories --- */
    "Électronique & Téléphonie": "Electronics & Phones",
    "Télécoms & Internet": "Telecoms & Internet",
    "Mode & Couture": "Fashion & Tailoring",
    "Beauté & Coiffure": "Beauty & Hairdressing",
    "Alimentation & Épicerie": "Food & Groceries",
    "Restauration & Maquis": "Restaurants & Maquis",
    "Agriculture & Élevage": "Farming & Livestock",
    "Bâtiment & Travaux publics": "Construction & Public works",
    "Menuiserie & Ébénisterie": "Carpentry & Woodwork",
    "Vitrerie & Aluminium": "Glazing & Aluminium",
    "Mécanique auto & moto": "Car & Motorbike repair",
    "Transport & Livraison": "Transport & Delivery",
    "Énergie & Solaire": "Energy & Solar",
    "Services numériques": "Digital services",
    "Imprimerie & Publicité": "Printing & Advertising",
    "Santé & Pharmacie": "Health & Pharmacy",
    "Éducation & Formation": "Education & Training",
    "Hôtellerie & Tourisme": "Hotels & Tourism",
    "Banque & Finance": "Banking & Finance",
    "Immobilier": "Real estate",
    "Événementiel & Décoration": "Events & Decoration",
    "Artisanat & Art": "Crafts & Art",
    "Commerce général": "General trade",

    /* --- Descriptions des entreprises --- */
    "Vente d'accessoires de téléphonie, d'électronique et de petits appareils électroménagers.": "Phone accessories, electronics and small home appliances.",
    "Composants électroniques, solutions IoT, formations en technologie et impression 3D.": "Electronic components, IoT solutions, technology training and 3D printing.",
    "Couture sur mesure : mise en relation avec des couturières partenaires, de la prise de mesures à la livraison.": "Made-to-measure tailoring: connects you with partner seamstresses, from measurements to delivery.",
    "Production de jus de fruits, principalement du pur jus d'ananas.": "Fruit juice production, mainly pure pineapple juice.",
    "Livraison locale, courses et services à domicile pour particuliers et entreprises.": "Local delivery, errands and home services for individuals and businesses.",
    "Vérification physique des colis pour que l'acheteur en ligne contrôle l'article avant de payer.": "Physical parcel checks so online buyers can inspect the item before paying.",
    "Magasin de meubles au centre commercial Erevan.": "Furniture store at the Erevan shopping centre.",
    "Société Béninoise d'Énergie Électrique : distribution de l'électricité au Bénin.": "Benin's electric power company: electricity distribution in Benin.",
    "Courrier, colis et services postaux dans tout le pays.": "Mail, parcels and postal services across the country.",
    "Application de transport à la demande (zémidjan, taxi) et de livraison, présente à Cotonou.": "On-demand transport (motorbike taxi, taxi) and delivery app, available in Cotonou.",
    "Opérateur de téléphonie mobile, internet et Mobile Money.": "Mobile phone, internet and Mobile Money operator.",
    "Opérateur de téléphonie mobile, internet et Moov Money.": "Mobile phone, internet and Moov Money operator.",
    "Banque : comptes, épargne et crédits pour particuliers et entreprises.": "Bank: accounts, savings and loans for individuals and businesses.",
    "Hôtel 4 étoiles avec restaurant et salles de réunion.": "4-star hotel with a restaurant and meeting rooms.",
    "Université publique : formations de la licence au doctorat.": "Public university: programmes from bachelor's to doctorate.",

    /* --- Offres --- */
    "Une fiche gratuite, des offres pour aller plus loin": "A free listing, and plans to go further",
    "Toute entreprise béninoise peut figurer gratuitement dans l'annuaire. Les abonnements ajoutent la boutique en ligne, la publicité et le marketing, selon le niveau choisi.": "Any business in Benin can be listed in the directory for free. Subscriptions add the online shop, advertising and marketing, depending on the plan.",
    "Gratuit": "Free",
    "Bronze": "Bronze",
    "Argent": "Silver",
    "Gold": "Gold",
    "Premium": "Premium",
    "FCFA / mois": "FCFA / month",
    "Pour être trouvé": "To be found",
    "Pour se présenter": "To present yourself",
    "Pour vendre en ligne": "To sell online",
    "Pour être mis en avant": "To be featured",
    "Pour dominer sa catégorie": "To lead your category",
    "Fiche dans l'annuaire : nom, ville, catégorie, description": "Directory listing: name, city, category, description",
    "Numéro et lien WhatsApp": "Phone number and WhatsApp link",
    "Lien vers votre page ou votre site": "Link to your page or website",
    "Vérification simple : appel de confirmation et photo du commerce": "Basic check: confirmation call and a photo of the shop",
    "Tout ce qui est dans Gratuit": "Everything in Free",
    "Tout ce qui est dans Bronze": "Everything in Bronze",
    "Tout ce qui est dans Argent": "Everything in Silver",
    "Tout ce qui est dans Gold": "Everything in Gold",
    "Badge « Entreprise vérifiée » après contrôle du registre de commerce et de l'IFU": "“Verified business” badge after we check the trade register and tax ID (IFU)",
    "Logo et photos de l'entreprise sur la fiche": "Business logo and photos on the listing",
    "Affichage des avis clients": "Customer reviews displayed",
    "1 publication par mois sur les réseaux sociaux de Benin Market": "1 post per month on Benin Market's social media",
    "Votre boutique en ligne, jusqu'à 20 produits avec photos et prix": "Your online shop, up to 20 products with photos and prices",
    "Panier avec total automatique et commandes sur votre WhatsApp": "Cart with automatic total and orders on your WhatsApp",
    "2 publications par mois sur nos réseaux sociaux": "2 posts per month on our social media",
    "Boutique en ligne sans limite de produits": "Online shop with unlimited products",
    "Mise en avant sur la page d'accueil et dans votre catégorie": "Featured on the home page and in your category",
    "4 publications par mois et 1 affiche publicitaire créée pour vous": "4 posts per month and 1 advertising poster designed for you",
    "Première position dans votre catégorie et votre ville": "First position in your category and your city",
    "Campagne publicitaire sur Facebook et WhatsApp gérée pour vous": "Advertising campaign on Facebook and WhatsApp managed for you",
    "Rapport mensuel : visites de votre fiche et commandes reçues": "Monthly report: visits to your listing and orders received",
    "Choisir Gratuit": "Choose Free",
    "Choisir Bronze": "Choose Bronze",
    "Choisir Argent": "Choose Silver",
    "Choisir Gold": "Choose Gold",
    "Choisir Premium": "Choose Premium",
    "Les abonnements sont mensuels et sans engagement. Pour la campagne publicitaire Premium, le budget versé aux plateformes (Facebook, par exemple) est à la charge de l'entreprise.": "Subscriptions are monthly with no commitment. For the Premium advertising campaign, the budget paid to the platforms (Facebook, for example) is covered by the business.",

    /* --- Vision --- */
    "Pourquoi un annuaire national des entreprises béninoises ?": "Why a national directory of businesses in Benin?",
    "Beaucoup d'entreprises du Bénin — ateliers, commerces, prestataires de services — n'ont aucune présence en ligne. Pour les trouver, il faut connaître quelqu'un qui les connaît. Un client qui cherche un produit précis n'a souvent pas d'autre choix que de faire le tour des marchés.": "Many businesses in Benin — workshops, shops, service providers — have no online presence. To find them, you need to know someone who knows them. A customer looking for a specific product often has no choice but to walk around the markets.",
    "Allée d'un marché couvert avec des étals de pagnes": "Aisle of a covered market with stalls of wax fabrics",
    "Benin Market est un annuaire pensé pour que toute entreprise du pays, même sans site web, devienne trouvable en quelques secondes, par produit et par ville.": "Benin Market is a directory designed so that any business in the country, even without a website, can be found in seconds, by product and by city.",
    "Découvrir": "Discover",
    "Le visiteur tape le produit ou le service qu'il cherche, choisit sa ville, ou parcourt les catégories.": "The visitor types the product or service they need, chooses their city, or browses the categories.",
    "L'annuaire affiche les entreprises correspondantes : description, ville, contact.": "The directory shows the matching businesses: description, city, contact.",
    "Le visiteur appelle ou écrit sur WhatsApp directement à l'entreprise. Aucune transaction ne passe par le site.": "The visitor calls or writes to the business directly on WhatsApp. No transaction goes through the site.",
    "La suite": "What comes next",
    "Benin Market est né du projet SMART HOUSE, à Lokossa. Cette première version est un annuaire simple et gratuit. L'objectif à moyen terme est d'ouvrir l'inscription aux entreprises elles-mêmes, puis de proposer des services complémentaires, comme la création de vitrines en ligne et la visibilité sur les réseaux sociaux, aux commerces qui n'ont pas encore de présence numérique.": "Benin Market grew out of the SMART HOUSE project in Lokossa. This first version is a simple, free directory. The medium-term goal is to let businesses sign up by themselves, then to offer extra services, such as online storefronts and social media visibility, to shops that have no digital presence yet.",

    /* --- Rejoindre --- */
    "Ajoutez votre entreprise": "Add your business",
    "Remplissez ce formulaire pour apparaître dans l'annuaire. La fiche de base est gratuite. Votre demande part sur le WhatsApp de Benin Market, et nous vous recontactons avant publication.": "Fill in this form to appear in the directory. The basic listing is free. Your request is sent to Benin Market's WhatsApp, and we contact you before publishing.",
    "Nom de l'entreprise": "Business name",
    "Description courte": "Short description",
    "Numéro de contact (téléphone ou WhatsApp)": "Contact number (phone or WhatsApp)",
    "Ce numéro sera visible publiquement dans l'annuaire.": "This number will be publicly visible in the directory.",
    "Lien (Facebook, site web, facultatif)": "Link (Facebook, website, optional)",
    "Offre souhaitée": "Plan you want",
    "Gratuit — fiche dans l'annuaire": "Free — directory listing",
    "Bronze — 5 000 FCFA par mois": "Bronze — 5,000 FCFA per month",
    "Argent — 15 000 FCFA par mois": "Silver — 15,000 FCFA per month",
    "Gold — 30 000 FCFA par mois": "Gold — 30,000 FCFA per month",
    "Premium — 50 000 FCFA par mois": "Premium — 50,000 FCFA per month",
    "Comparer les offres": "Compare the plans",
    "Je n'ai pas de site web et je souhaite que Benin Market crée ma boutique en ligne": "I have no website and I would like Benin Market to build my online shop",
    "Envoyer ma demande": "Send my request",
    "Comment nous vérifions les entreprises": "How we verify businesses",
    "Pour protéger les clients contre les fraudes, chaque entreprise est contrôlée avant d'apparaître dans l'annuaire.": "To protect customers from fraud, every business is checked before it appears in the directory.",
    "Fiche gratuite": "Free listing",
    "Nous confirmons votre numéro par un appel et nous vous demandons la localisation, les activités et une photo de votre commerce ou atelier.": "We confirm your number with a call and ask for your location, your activities and a photo of your shop or workshop.",
    "Offres payantes": "Paid plans",
    "Vous présentez en plus votre registre de commerce (RCCM) et votre IFU. Votre fiche reçoit alors le badge": "You also show your trade register (RCCM) and your tax ID (IFU). Your listing then gets the badge",
    "Vos documents": "Your documents",
    "La pièce d'identité du gérant sert uniquement à comparer son nom avec le registre de commerce. Nous ne gardons aucune copie de vos documents après le contrôle.": "The manager's ID is only used to compare their name with the trade register. We keep no copy of your documents after the check.",

    /* --- Avis et remerciement --- */
    "Vous avez acheté chez une entreprise de l'annuaire ? Racontez votre expérience. Chaque avis est vérifié avant d'être publié.": "Did you buy from a business in the directory? Tell us about your experience. Every review is checked before it is published.",
    "Entreprise concernée": "Business concerned",
    "Votre nom": "Your name",
    "5 — Excellent": "5 — Excellent",
    "4 — Bien": "4 — Good",
    "3 — Correct": "3 — Fair",
    "2 — Décevant": "2 — Disappointing",
    "1 — Mauvais": "1 — Poor",
    "Votre avis": "Your review",
    "Envoyer mon avis": "Send my review",
    "Merci, votre demande est prête": "Thank you, your request is ready",
    "Merci pour votre avis": "Thank you for your review",
    "Votre demande d'inscription a été préparée dans WhatsApp. Appuyez sur Envoyer pour nous la transmettre. Nous vous recontactons pour confirmer vos informations avant publication.": "Your sign-up request has been prepared in WhatsApp. Tap Send to pass it on to us. We will contact you to confirm your details before publishing.",
    "Votre avis a été préparé dans WhatsApp. Appuyez sur Envoyer pour nous le transmettre. Il sera publié après vérification.": "Your review has been prepared in WhatsApp. Tap Send to pass it on to us. It will be published after checking.",
    "WhatsApp ne s'est pas ouvert ? Écrivez-nous directement au": "WhatsApp did not open? Write to us directly at",
    "Retour à l'annuaire": "Back to the directory",

    /* --- Assistant d'aide --- */
    "Besoin d'aide ?": "Need help?",
    "Fermer l'aide": "Close help",
    "Choisissez une question :": "Choose a question:",
    "Autres questions": "Other questions",
    "Parler à quelqu'un sur WhatsApp": "Talk to someone on WhatsApp",
    "Comment trouver une entreprise ?": "How do I find a business?",
    "Tapez un produit, un service ou un nom dans la recherche, ou choisissez une catégorie. Vous pouvez aussi filtrer par ville.": "Type a product, a service or a name in the search, or choose a category. You can also filter by city.",
    "Ouvrir l'annuaire": "Open the directory",
    "Comment inscrire mon entreprise ?": "How do I list my business?",
    "Remplissez le formulaire d'inscription. Votre demande part sur notre WhatsApp et nous vous recontactons avant publication.": "Fill in the sign-up form. Your request is sent to our WhatsApp and we contact you before publishing.",
    "Inscrire mon entreprise": "List my business",
    "Est-ce que c'est gratuit ?": "Is it free?",
    "La fiche dans l'annuaire est gratuite. Les abonnements vont de 5 000 à 50 000 FCFA par mois et ajoutent la boutique en ligne, la publicité et la mise en avant.": "The directory listing is free. Subscriptions range from 5,000 to 50,000 FCFA per month and add the online shop, advertising and featured placement.",
    "Comment obtenir une boutique en ligne ?": "How do I get an online shop?",
    "À partir de l'offre Argent, nous créons votre boutique : vos produits avec photos et prix, un panier, et les commandes sur votre WhatsApp.": "From the Silver plan up, we build your shop: your products with photos and prices, a cart, and orders on your WhatsApp.",
    "Voir un exemple de boutique": "See an example shop",
    "Comment commander un produit ?": "How do I order a product?",
    "Ouvrez la boutique de l'entreprise, ajoutez vos articles au panier, puis envoyez la commande sur WhatsApp. Le paiement se fait à la livraison ou en boutique.": "Open the business's shop, add your items to the cart, then send the order on WhatsApp. You pay on delivery or in the shop.",
    "Comment vérifiez-vous les entreprises ?": "How do you verify businesses?",
    "Nous confirmons le numéro par un appel et nous demandons une photo du commerce. Pour le badge « Entreprise vérifiée », nous contrôlons le registre de commerce et l'IFU.": "We confirm the number with a call and ask for a photo of the shop. For the “Verified business” badge, we check the trade register and the tax ID (IFU).",
    "En savoir plus": "Learn more",
    "Comment donner un avis ?": "How do I write a review?",
    "Sur la fiche d'une entreprise, cliquez sur « Donner un avis ». Chaque avis est vérifié avant d'être publié.": "On a business's listing, click “Write a review”. Every review is checked before it is published.",
    "Une information est fausse, que faire ?": "Some information is wrong. What should I do?",
    "Écrivez-nous sur WhatsApp. Nous corrigeons ou nous retirons la fiche.": "Write to us on WhatsApp. We correct or remove the listing.",

    "Ce que disent les utilisateurs": "What users say",
    "Aucun avis publié pour l'instant. Soyez le premier à donner le vôtre.": "No reviews published yet. Be the first to write one.",
    "Donner mon avis sur Benin Market": "Review Benin Market",
    "Formulaire d'avis": "Review form",
    "Anonyme": "Anonymous",

    /* --- Page d'une entreprise --- */
    "Fiche entreprise — Benin Market": "Business page — Benin Market",
    "Chargement de la fiche…": "Loading the page…",
    "Entreprise introuvable": "Business not found",
    "Cette fiche n'existe pas ou a été retirée de l'annuaire.": "This listing does not exist or has been removed from the directory.",
    "Voir la fiche": "View the listing",
    "Appeler": "Call",
    "Itinéraire": "Directions",
    "Pas encore d'avis pour cette entreprise.": "No reviews for this business yet.",
    "Cette fiche a été créée à partir d'informations publiques. Vous êtes le gérant ?": "This listing was created from public information. Are you the manager?",
    "Réclamer cette fiche": "Claim this listing",
    "Avis des clients": "Customer reviews",
    "Partager cette fiche": "Share this listing",
    "Envoyez cette page à vos clients et à vos proches.": "Send this page to your customers and to people you know.",
    "Partager sur WhatsApp": "Share on WhatsApp",
    "Copier le lien": "Copy the link",
    "Lien copié": "Link copied",
    "QR code de l'entreprise": "Business QR code",
    "Imprimez-le et collez-le sur votre vitrine : vos clients le scannent pour ouvrir cette page.": "Print it and stick it on your shop window: your customers scan it to open this page.",
    "Télécharger le QR code": "Download the QR code",

    /* --- Boutique SMART HOUSE --- */
    "Me connecter": "Sign in",
    "Me déconnecter": "Sign out",
    "Panier": "Cart",
    "Catalogue": "Catalogue",
    "Catalogue de démonstration : les produits et les prix sont indicatifs.": "Demo catalogue: products and prices are indicative.",
    "Ton téléphone, ta musique, ta maison. Un seul panier.": "Your phone, your music, your home. One cart.",
    "Choisis tes articles, le total se calcule tout seul, et ta commande part directement sur le WhatsApp de la boutique à Lokossa.": "Choose your items, the total adds up by itself, and your order goes straight to the shop's WhatsApp in Lokossa.",
    "Les rayons de la boutique SMART HOUSE : téléphones, casques et accessoires": "The shelves of the SMART HOUSE shop: phones, headphones and accessories",
    "La boutique, à Lokossa": "The shop, in Lokossa",
    "Filtrer les produits": "Filter products",
    "Téléphonie": "Phones",
    "Audio": "Audio",
    "Maison": "Home",
    "Ajouter au panier": "Add to cart",
    "Ajouté": "Added",
    "Votre panier": "Your cart",
    "Fermer le panier": "Close the cart",
    "Ton panier est vide. Ajoute un article pour commencer.": "Your cart is empty. Add an item to get started.",
    "Retirer": "Remove",
    "Commander sur WhatsApp": "Order on WhatsApp",
    "Paiement à la livraison ou en boutique. La boutique confirme ta commande par WhatsApp.": "Pay on delivery or in the shop. The shop confirms your order on WhatsApp.",
    "SMART HOUSE, Lokossa. WhatsApp :": "SMART HOUSE, Lokossa. WhatsApp:",
    "Boutique créée avec": "Shop built with",
    "Mon compte": "My account",
    "Ces informations servent à préparer ta commande. Elles restent enregistrées sur cet appareil.": "These details are used to prepare your order. They stay saved on this device.",
    "Nom et prénom": "Full name",
    "Numéro WhatsApp": "WhatsApp number",
    "Ville ou quartier de livraison": "Delivery city or neighbourhood",
    "Annuler": "Cancel",
    "Enregistrer": "Save",
    "Écouteurs Bluetooth": "Bluetooth earbuds",
    "Écouteurs sans fil de qualité, avec réduction de bruit.": "Quality wireless earbuds with noise reduction.",
    "Enceinte Bluetooth": "Bluetooth speaker",
    "Enceinte portable, basses puissantes et longue autonomie.": "Portable speaker with powerful bass and long battery life.",
    "Montre connectée": "Smartwatch",
    "Montre multifonction avec suivi de santé.": "Multi-function watch with health tracking.",
    "Chargeur de téléphone": "Phone charger",
    "Adaptateur de charge rapide, compatible avec tous les appareils.": "Fast-charging adapter, compatible with all devices.",
    "Coque de téléphone": "Phone case",
    "Coque de protection pour les principales marques de téléphones.": "Protective case for the main phone brands.",
    "Protection d'écran": "Screen protector",
    "Verre trempé pour tous les modèles de téléphones.": "Tempered glass for all phone models.",
    "Ventilateur électrique": "Electric fan",
    "Ventilateur portable, économe en énergie.": "Portable, energy-saving fan.",
    "Bouilloire électrique": "Electric kettle",
    "Chauffe vite et s'arrête automatiquement.": "Heats fast and switches off automatically."
  };

  /* Textes qui contiennent une partie variable (un nombre, un nom). */
  const PATTERNS = [
    [/^(\d+) entreprises trouvées$/, (m) => `${m[1]} businesses found`],
    [/^1 entreprise trouvée$/, () => "1 business found"],
    [/^(\d+) entreprises$/, (m) => `${m[1]} businesses`],
    [/^1 entreprise$/, () => "1 business"],
    [/^Aucun résultat pour « (.*) »\.$/, (m) => `No results for “${m[1]}”.`],
    [/^Bonjour, (.*)$/, (m) => `Hello, ${m[1]}`],
    [/^(\d) sur 5$/, (m) => `${m[1]} out of 5`],
    [/^QR code de (.*)$/, (m) => `QR code for ${m[1]}`],
    [/^Client : (.*)$/, (m) => `Customer: ${m[1]}`],
    [/^Ajouter un (.*)$/, (m) => `Add one ${translate(m[1]) || m[1]}`],
    [/^Retirer un (.*)$/, (m) => `Remove one ${translate(m[1]) || m[1]}`]
  ];

  function readLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "fr";
    } catch (err) {
      return "fr";
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* sans mémoire, la langue revient au français à la page suivante */
    }
  }

  /* Renvoie la traduction d'un texte, ou null s'il n'y en a pas. */
  function translate(text) {
    const key = text.replace(/\s+/g, " ").trim();
    if (!key) return null;
    if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    if (key.includes(" · ")) {
      const parts = key.split(" · ");
      const done = parts.map((part) => translate(part) || part);
      if (done.join(" · ") !== key) return done.join(" · ");
    }
    for (const [regex, build] of PATTERNS) {
      const match = key.match(regex);
      if (match) return build(match);
    }
    return null;
  }

  const ATTRIBUTES = ["placeholder", "aria-label", "alt", "title"];

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, [data-no-translate]")) return;
    const result = translate(node.nodeValue);
    if (result === null) return;
    const lead = node.nodeValue.match(/^\s*/)[0];
    const trail = node.nodeValue.match(/\s*$/)[0];
    const next = lead + result + trail;
    if (next !== node.nodeValue) node.nodeValue = next;
  }

  function translateElement(el) {
    ATTRIBUTES.forEach((attr) => {
      const value = el.getAttribute && el.getAttribute(attr);
      if (!value) return;
      const result = translate(value);
      if (result !== null && result !== value) el.setAttribute(attr, result);
    });
  }

  function translateTree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    translateElement(root);
    root.querySelectorAll("*").forEach(translateElement);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
  }

  function applyEnglish() {
    document.documentElement.lang = "en";
    const title = translate(document.title);
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      const desc = translate(meta.content);
      if (desc) meta.content = desc;
    }
    translateTree(document.body);

    /* Les listes et le panier sont remplis après coup : on traduit ce qui arrive. */
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTextNode(mutation.target);
        if (mutation.type === "attributes") translateElement(mutation.target);
        mutation.addedNodes.forEach(translateTree);
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRIBUTES
    });
  }

  const lang = readLang();
  window.BM_LANG = lang;

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "en" ? "FR" : "EN";
    toggle.setAttribute("data-no-translate", "");
    toggle.addEventListener("click", () => {
      saveLang(lang === "en" ? "fr" : "en");
      window.location.reload();
    });
  }

  if (lang === "en") applyEnglish();
})();
