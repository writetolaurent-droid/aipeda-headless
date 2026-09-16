---
title: "Travailler avec son AESH : préparer des supports adaptés avec l’IA"
description: "Coordonner avec l’AESH, adapter les supports pour un élève à PPS ou PAP, sans jamais transmettre de données personnelles à l’IA : la méthode complète."
category: "Différencier"
pubDate: 2026-09-16
---

Accompagner un élève à besoins particuliers, ce n’est pas une heure de plus dans l’emploi du temps : c’est un fil qui traverse toutes les autres. Adapter la consigne de mathématiques, préparer la version allégée du document de sciences, noter deux lignes pour l’AESH avant la séance suivante. Chaque geste pris isolément tient en quelques minutes ; mis bout à bout, ils forment une charge invisible qui déborde sur les soirées.

Et il y a ce vide documentaire : entre l’enseignant et l’AESH, la coordination repose souvent sur l’oral, sur des échanges volés entre deux récréations, rarement sur un support écrit commun. Ce qui a fonctionné une semaine se perd la suivante.

C’est là que l’IA peut vous aider, dans un périmètre précis : décliner vos supports existants en versions adaptées, préparer des trames de coordination. Vous validez tout — et une règle domine toutes les autres : on n’y met jamais une donnée personnelle. Pour poser les bases, notre [guide complet sur la préparation de cours avec l’IA](/article/preparer-ses-cours-ia-guide-complet/) reste la porte d’entrée du cocon.

<div class="essential-box">

## ⚡ L’Essentiel en 30 secondes

**Le principe :** l’IA ne fabrique pas votre projet d’accompagnement. Elle décline les supports que vous avez déjà conçus — consignes segmentées, versions à trous, lexique outillé — et prépare les trames de votre coordination avec l’AESH. Vous relisez, vous ajustez, vous validez.

**La règle d’or :** anonymisation absolue. Jamais de prénom, de nom, de date de naissance, d’extrait de dossier MDPH dans un prompt. On décrit un besoin (« un élève de CE1 qui déchiffre avec peine »), jamais une personne. C’est la condition du respect du RGPD.

**Ce que l’IA ne remplace pas :** l’AESH, professionnel·le de l’équipe ; l’équipe éducative, seul cadre où le PPS se construit avec la famille ; les démarches MDPH, qui restent des procédures officielles.

</div>

---

## Ce que l’adaptation demande au quotidien

Quand un élève est accompagné, la même séance existe en plusieurs versions. La version standard, d’abord, celle que vous préparez pour la classe. La version allégée ensuite : même objectif, mais une consigne coupée en segments courts, une page moins chargée, des repères visuels qui doublent le texte. Parfois la version à police claire et interligne aéré, ou le support où le lexique difficile est glosé au fil du texte. Et parfois la version échelonnée, où l’exercice se franchit par paliers, avec un exemple résolu avant chaque étape.

À cela s’ajoute la charge que personne ne mesure : la coordination. Prévenir l’AESH de ce qui est prévu, signaler sur quoi l’élève risque de buter, noter ce qui a aidé, se souvenir de ce qui a été essayé en octobre. Ce travail d’interface n’apparaît sur aucun document officiel, et pourtant il décide de la qualité de l’accompagnement.

C’est précisément sur ces deux chantiers — décliner des supports, structurer des échanges — que l’IA fait gagner du temps, à condition de respecter une règle non négociable.

---

## La règle d’or : anonymiser avant tout

Un chatbot n’est pas un environnement de traitement confidentiel au sens du RGPD. Ce que vous y collez peut être conservé, stocké sur des serveurs hors de votre contrôle, voire réutilisé selon les paramètres de l’outil. Les documents officiels — PPS, PAP, notifications MDPH, comptes rendus de réunion — ne sont donc jamais à coller dans une IA. Pas d’extrait, pas de version « juste pour le contexte », jamais.

Concrètement, ce qui ne part jamais dans un prompt : le prénom ou le nom, la date de naissance, les références du dossier, la liste des troubles telle qu’elle figure dans une notification, les détails de la vie de l’élève.

Ce qui part, en revanche, c’est le besoin, décrit sans identifier personne : « un élève de cycle 2 qui lit avec difficulté et fatigue vite », « un élève accompagné qui a besoin de consignes segmentées ». Cette formulation décrit une situation d’apprentissage, pas une personne — et elle suffit largement à l’IA pour adapter un support. Si un doute subsiste sur la nature d’une donnée, elle ne part pas.

---

## Les prompts à copier-coller

Quatre prompts pour les deux chantiers : adapter les supports, outiller la coordination. Dans tous les cas, vous ne collez que le contenu pédagogique de vos documents — jamais une information sur un élève.

### Décliner un support en version adaptée

La base du travail : partir d’un support que vous avez déjà conçu et en produire une version plus accessible, à relire ensuite avec votre connaissance réelle de la classe.

<div class="prompt-block">
<span class="prompt-label">📋 Prompt — Version adaptée d’un support</span>

Tu es un professeur des écoles expérimenté en adaptation pédagogique. Voici le contenu pédagogique d’un support de classe à adapter (aucune donnée personnelle n’y figure) :

[COLLER LE CONTENU PÉDAGOGIQUE DU SUPPORT : texte, consignes, exercices]

Génère une version adaptée pour un élève à besoins particuliers (lecture fatigable, attention fragile) :
1. **Consignes segmentées** : une consigne par ligne, phrases courtes (« 10 mots maximum »), verbe d’action en début de ligne
2. **Mise en page** : police claire suggérée (« Arial » ou « OpenDyslexic »), interligne aéré, une page aérée plutôt que deux colonnes
3. **Lexique outillé** : les mots potentiellement difficiles glosés entre parenthèses ou en note de bas de page
4. **Repères visuels** : mots-clés en gras, numérotation visible, pictogrammes quand c’est utile
5. **Objectif conservé** : même compétence visée, exigence réduite dans la forme, pas dans le fond

Format : prêt à copier dans un traitement de texte pour relecture et impression.
</div>

### Générer une version à trous et échelonnée

Pour les mêmes exercices, une seconde déclinaison : l’élève avance par paliers, avec des appuis qui s’estompent progressivement.

<div class="prompt-block">
<span class="prompt-label">🪜 Prompt — Version à trous échelonnée</span>

À partir du même contenu pédagogique, génère une version à trous et échelonnée du même exercice :

[COLLER LE MÊME CONTENU PÉDAGOGIQUE]

Structure en trois niveaux d’appui :
1. **Niveau 1** : phrases à compléter avec choix multiples (« 3 propositions »)
2. **Niveau 2** : phrases à trous avec une banque de mots donnés en désordre
3. **Niveau 3** : mêmes phrases à trous, sans banque de mots, avec un exemple résolu en tête d’exercice

Prévois une consigne courte et séparée pour chaque niveau, et indique que l’élève peut s’arrêter au niveau atteint. Garde le même vocabulaire et la même compétence que le support d’origine.
</div>

### Préparer la trame de coordination avec l’AESH

Chaque semaine, les mêmes informations circulent — ou ne circulent pas. Une trame écrite commune change cela. On y parle de « l’élève accompagné », jamais d’une personne nommée.

<div class="prompt-block">
<span class="prompt-label">👥 Prompt — Trame de coordination hebdomadaire</span>

Tu es un conseiller pédagogique spécialisé. Génère une trame de coordination hebdomadaire entre un enseignant et un AESH, sous forme de document à remplir, sans aucune information identifiante : on parle de « l’élève accompagné ».

Sections de la trame :
1. **Objectifs de la semaine** (« 2-3 lignes » : notions en cours, ce qui est attendu en classe)
2. **Rôle de l’AESH dans la séance** (moments où l’accompagnement est actif, moments de retrait volontaire pour favoriser l’autonomie)
3. **Points de vigilance** (ce qui a bloqué la semaine passée, signaux à observer)
4. **Ce qui a fonctionné** (aménagements efficaces à reconduire)
5. **À anticiper** (évaluations, sorties, changements d’emploi du temps)

Format : une page, cases courtes à remplir à la main ou au clavier, réutilisable chaque semaine.
</div>

### Installer l’élève dans la séance : rituels d’accroche

Les premières minutes décident souvent de toute la séance. Un petit stock de rituels adaptés, prêts à l’emploi, évite l’improvisation du lundi matin.

<div class="prompt-block">
<span class="prompt-label">✨ Prompt — Ban de rituels d’accroche adaptés</span>

Tu es un professeur des écoles spécialisé dans les besoins éducatifs particuliers. Constitue un ban de « 6 » rituels d’accroche courts (« 3 à 5 minutes ») pour installer dans la séance un élève accompagné, sans le mettre en avant devant la classe.

Critères pour chaque rituel :
- Objectif d’accroche : rappel des prérequis, activation de l’attention ou mise en confiance
- Durée et matériel (rien de plus qu’un tableau ou des étiquettes)
- Déroulé en « 3 » étapes maximum
- L’aménagement intégré discrètement (place dans la classe, reformulation de la consigne, support individuel)
- Une variante pour l’adapter d’une matière à l’autre

Matières à couvrir : français, mathématiques, questionner le monde. Format : une fiche courte par rituel.
</div>

---

## Faire vivre la coordination AESH-enseignant

La trame ne vaut que si elle vit. Trois habitudes suffisent à la faire exister.

Le document commun, d’abord : un seul support, partagé — une copie dans le cahier de liaison ou un fichier partagé, selon vos habitudes. Pas dix canaux parallèles : un document, rempli par l’un, lu par l’autre.

La boucle courte, ensuite : cinq minutes après la séance ou avant celle du lendemain, pour ajuster. La trame ne remplace pas l’échange ; elle le prépare et en garde la trace. Un point écrit le mardi n’a pas besoin d’être rediscuté le jeudi.

Les zones grises, enfin : qui adapte le support final, qui relit, que fait-on quand l’AESH est absente. Ces questions n’ont pas de réponse universelle — elles ont besoin d’être dites une fois, ensemble, plutôt que tranchées dans l’urgence au fil des semaines. L’AESH est un professionnel·le de l’équipe : la coordination se construit en vrai, et la trame n’en est que le support écrit.

---

## Limites honnêtes

Restons clairs sur ce que l’IA ne fait pas — et ne doit pas faire.

Elle ne connaît pas le dossier de l’élève, et c’est très bien ainsi. Aucun extrait de PPS, de PAP ou de notification MDPH ne doit jamais entrer dans un chatbot. Ce que vous lui demandez, ce sont des adaptations génériques de contenus pédagogiques ; c’est votre connaissance de l’élève qui sélectionne et ajuste.

Le PPS se construit en équipe éducative — famille, enseignant, AESH, partenaires du suivi spécialisé. Un chatbot n’y a pas sa place, pas plus qu’il ne rédige une demande MDPH. Ces écrits officiels engagent des personnes et des droits ; ils s’élaborent à plusieurs, selon des procédures.

Les adaptations validées par le suivi spécialisé restent la référence. Si la notification prévoit un aménagement, c’est cet aménagement qui s’applique — pas une variante générée en trente secondes. L’IA produit des brouillons de supports, jamais des décisions d’adaptation.

Enfin, jamais de diagnostic improvisé. Deviner un trouble, suggérer un « profil », émettre une hypothèse médicale via un prompt : ce n’est pas le rôle d’une IA, et ce n’est pas le vôtre. Le repérage et l’évaluation relèvent des professionnels habilités — l’IA ne vous en déchargera pas.

---

## FAQ

### Puis-je coller le PAP de l’élève dans un chatbot pour l’adapter ?

Non, jamais. Le PAP contient des données personnelles et des informations médicales protégées ; un chatbot n’est pas un environnement de traitement au sens du RGPD, et ce que vous y déposez peut être conservé ou réutilisé selon les paramètres de l’outil. À la place : vous lisez le document, vous en tirez deux ou trois besoins formulés anonymement (« consignes segmentées », « temps majoré », « police adaptée »), et vous ne collez que le contenu pédagogique du support à adapter. Le document officiel reste entre vos mains.

### Comment adapter sans stigmatiser ?

En travaillant sur le support, jamais sur la personne. Les mêmes ressources servent souvent à toute la classe : la version à trous peut aider un élève accompagné comme un lecteur fatigué du jour. On prépare les versions avant la séance, on les propose discrètement, on évite l’aménagement annoncé à voix haute devant le groupe. Et on garde l’objectif : même compétence visée, simplement un chemin différent.

### L’AESH peut-elle utiliser l’IA elle-même, avec l’élève ?

Non pour un usage direct par l’élève : l’IA reste un outil d’adulte, entre les mains de l’enseignant et de l’AESH pour la préparation. Un élève accompagné n’a pas à dialoguer avec un chatbot pendant la séance. En revanche, l’AESH peut tout à fait s’appuyer sur les supports préparés en amont, les trames et le ban de rituels — à condition de respecter la même règle d’anonymisation.

---

## Aller plus loin

- 🧭 [Le guide complet pour préparer ses cours avec l'IA](/article/preparer-ses-cours-ia-guide-complet/) — la porte d'entrée du cocon.
- 🧩 [Adapter ses supports pour les élèves DYS](/article/adaptation-dys-ia/) — la méthode d'adaptation détaillée.
- 🪜 [Des exercices différenciés en quelques minutes](/article/exercices-differencies-ia/) — décliner un exercice sur trois niveaux.
- 👥 [Faire fonctionner l'équipe de cycle](/article/travail-equipe-cycle-ia/) — coordonner les adultes autour des besoins.
- ✍️ [La dictée différenciée avec l'IA](/article/dictee-differenciee-ia/) — un exemple concret d'adaptation à plusieurs niveaux.
