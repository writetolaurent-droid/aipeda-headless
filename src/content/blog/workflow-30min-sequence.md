---
title: "Mon workflow 30 min pour préparer une séquence avec l'IA"
description: "Préparez une séquence pédagogique complète en 30 minutes : brainstorming, structuration, supports. Workflow pas à pas avec prompts copier-coller."
category: "Préparer"
pubDate: 2026-07-17
---

![Workflow IA - Préparation de séquence](/images/claude/claude-prompt.webp)

Préparer une séquence le soir, c'est rarement un moment de plaisir. On ouvre un document vierge, on cherche les objectifs dans le Bulletin Officiel, on ébauche un déroulé, on se rappelle qu'il faut du matériel, on commence les exercices — et deux heures plus tard, la séquence n'est toujours pas terminée. Pire : à chaque nouvelle notion, on recommence tout depuis le début, comme si l'expérience accumulée ne servait à rien.

Ce constat, des centaines de professeurs des écoles le vivent quotidiennement. Et si 30 minutes suffisaient pour passer de l'idée à une séquence structurée et opérationnelle ? C'est ce que ce workflow propose — non pas en travaillant plus vite, mais en travaillant autrement, avec l'IA comme co-pilote.

Pour un panorama complet, consultez notre [guide complet sur la préparation de cours avec l'IA](/article/preparer-ses-cours-ia-guide-complet/).

<div class="essential-box">

## ⚡ L'Essentiel en 30 secondes

**Le workflow en 3 phases :**
1. **Définir le besoin** (5 min) — Brainstorming des objectifs et compétences avec l'IA
2. **Structurer la séquence** (10 min) — Génération du squelette des séances
3. **Créer les supports** (15 min) — Fiches élèves, traces écrites, exercices

**Ce que l'IA ne remplace pas** : votre expertise pédagogique, la connaissance fine de vos élèves, l'évaluation (toujours humaine), et l'adaptation au contexte de classe.

**Principe** : l'IA génère 80% de la structure en 20% du temps. Le prof valide, ajuste et personnalise les 20% restants.

</div>

---

## Le problème : la séquence qui n'en finit pas

Toute préparation de séquence suit le même cycle. On commence par définir les objectifs et les compétences du socle. Puis il faut imaginer une situation de découverte, prévoir la trace écrite, concevoir les exercices d'application, réfléchir à la différenciation, anticiper le matériel, et enfin construire l'évaluation.

Chaque étape semble gérable prise isolément. Mais mises bout à bout, elles forment une chaîne qui s'étire sans fin. Le passage d'une étape à l'autre demande un changement de posture cognitive — du général (les objectifs) au particulier (la consigne de l'exercice 3) — qui épuise l'énergie de préparation.

C'est là que l'IA change la donne. Non pas parce qu'elle fait le travail à votre place, mais parce qu'elle fluidifie les transitions. Au lieu de rester bloqué cinq minutes sur la formulation d'un objectif, l'enseignant obtient une proposition en quelques secondes, qu'il valide ou ajuste. La friction diminue, le rythme de travail reste constant, et la séquence prend forme sans rupture.

La méthode Pareto s'applique ici directement : 80% du travail préparatoire (structure, premiers brouillons de supports, trame d'exercices) peut être généré en 20% du temps habituel. Les 20% restants — l'expertise pédagogique, l'adaptation aux élèves, le jugement professionnel — restent l'apanage de l'enseignant.

---

## Le workflow 30 min détaillé

### Phase 1 : Définir le besoin (5 min)

La première phase ne consiste pas à demander à l'IA de tout faire. Elle consiste à cadrer la séquence : quels objectifs, quelles compétences visées, quels prérequis chez les élèves. L'IA agit ici comme un partenaire de brainstorming — elle propose, l'enseignant trie.

**Ce que vous faites :** vous notez la notion à travailler, le niveau de classe et le contexte. Vous lancez le prompt ci-dessous. L'IA renvoie une liste structurée d'objectifs et de compétences. Vous éliminez ce qui ne convient pas, vous gardez ce qui est pertinent. Cinq minutes, pas plus.

<div class="prompt-block">
<span class="prompt-label">📋 Prompt — Brainstorming de séquence</span>

Tu es un professeur des écoles expérimenté, expert dans les programmes français (Bulletin Officiel). Je dois préparer une séquence et j'ai besoin de cadrer les objectifs.

**Niveau** : [ex : CE2 — Cycle 3]
**Matière** : [ex : Étude de la langue / grammaire]
**Notion** : [ex : L'accord sujet-verbe]
**Nombre de séances** : [ex : 3]
**Durée par séance** : [ex : 45 min]

Génère pour moi :
1. **3 objectifs pédagogiques** formulés en termes de compétence observable (verbe d'action)
2. **Les compétences du socle mobilisées** (référence explicite au BO cycle 3)
3. **Les prérequis nécessaires** chez les élèves (ce qu'ils doivent déjà maîtriser)
4. **2 obstacles d'apprentissage anticipés** (erreurs typiques, confusions fréquentes)
5. **Une situation de découverte possible** pour la séance 1 (1-2 lignes)

Format : liste structurée, concis, prêt à intégrer dans une fiche de prep.
</div>

À l'issue de cette phase, vous avez un cadre clair : vous savez où vous allez et pourquoi. C'est le socle sur lequel les phases suivantes s'appuient.

---

### Phase 2 : Structurer la séquence (10 min)

Une fois le besoin défini, il faut passer de la liste d'objectifs à un véritable déroulé de séance. C'est l'étape où l'enseignant perd le plus de temps — non par difficulté, mais par décisions microscopiques à répétition : combien de temps pour la découverte ? Quel type de travail en atelier ? Quand passer à l'institutionnalisation ?

L'IA accélère cette étape en générant un squelette complet que l'enseignant n'a plus qu'à affiner.

<div class="prompt-block">
<span class="prompt-label">🏗️ Prompt — Structuration en 3 séances</span>

Tu es un professeur des écoles expérimenté. À partir des objectifs suivants, structure une séquence de 3 séances avec déroulé détaillé.

**Objectifs** :
[COLLER LES OBJECTIFS GÉNÉRÉS EN PHASE 1]

Pour chaque séance, génère :

**Séance 1 — Découverte / Représentations initiales**
- Phase d'activation (5-10 min) : consigne et support
- Phase de recherche (15-20 min) : modalité de travail (individuel / en groupe / collectif)
- Phase de mise en commun (10 min) : comment structurer les retours
- Trace écrite (5 min) : éléments à institutionnaliser
- Matériel nécessaire

**Séance 2 — Structuration / Entraînement**
- Rappel de la séance précédente (5 min)
- Phase d'application (25 min) : type d'exercices
- Différenciation prévue (5 min) : ajustements pour élèves en difficulté
- Synthèse (10 min)

**Séance 3 — Réinvestissement / Évaluation formative**
- Situation de transfert (20 min)
- Évaluation formative (15 min) : format court, critères de réussite visibles par l'élève
- Auto-évaluation (5 min)

Format : tableau ou liste structurée par séance, avec timings précis.
</div>

Le résultat n'est pas un plan définitif — c'est un brouillon solide. L'enseignant lit, ajuste les durées, modifie une modalité de travail, ajoute un détail propre à sa classe. Dix minutes suffisent : la structure est là, il ne reste qu'à l'habiller.

---

### Phase 3 : Créer les supports (15 min)

C'est la phase la plus chronophage en temps traditionnel, et celle où l'IA fait gagner le plus. Fiche élève, trace écrite, exercices d'application : autant de documents qui se construisent à partir du squelette de la Phase 2.

<div class="prompt-block">
<span class="prompt-label">📝 Prompt — Création de supports pédagogiques</span>

À partir de la structure de séance suivante, crée les supports élèves :

[COLLER LE DÉROULLÉ DE LA SÉANCE 1]

Génère :

### 1. Fiche élève (1 page A4 max)
- Titre de la séance et notion
- Espace pour la situation de découverte (consignes formulées telles quelles)
- Espace pour la trace écrite (avec lignes Séyès ou cadre)
- Exercice d'application n°1 (avec exemple guidé)

### 2. Trace écrite (10 lignes max)
- Définition claire, vocabulaire adapté au niveau
- 2 exemples concrets
- Format reproductible au tableau ou à coller dans le cahier

### 3. Affichage mémoire (pour le mur de la classe)
- Mots-clés en gros caractères
- Code couleur suggéré
- Schéma ou organisateur graphique simple

Format : prêt à imprimer après relecture.
</div>

À ce stade, les supports existent en version brouillon structurée. La relecture et l'ajustement prennent 5 à 8 minutes. Le total — brainstorming, structuration, supports — s'établit autour de 30 minutes.

---

### Bonus : Différenciation en 5 minutes supplémentaires

Avec 5 minutes de plus, l'enseignant peut générer des variantes pour les élèves à besoins éducatifs particuliers. C'est l'un des gains les plus concrets de l'IA : la différenciation, qui demanderait normalement 20 à 30 minutes supplémentaires, devient quasi instantanée.

<div class="prompt-block">
<span class="prompt-label">🧩 Prompt — Différenciation rapide (variantes DYS et difficultés)</span>

À partir de la fiche élève suivante, crée 2 versions adaptées :

[COLLER LA FICHE ÉLÈVE GÉNÉRÉE EN PHASE 3]

**Version A — Élèves DYS (dyslexie, dyspraxie)**
- Police Arial ou OpenDyslexic, taille 14 minimum
- Interligne 1,5
- Consignes reformulées en phrases courtes (max 10 mots)
- Mots-clés surlignés en gras
- Exercices à trous ou choix multiples quand c'est pertinent
- Numérotation claire, repères visuels

**Version B — Élèves en grande difficulté de lecture**
- Vocabulaire simplifié (niveau de lecture inférieur d'un cycle)
- Un seul exercice par page
- Exemple résolu inclus avant chaque consigne
- Pictogrammes de guidance

Format : 2 versions distinctes, prêtes à imprimer, même compétence visée.
</div>

Pour aller plus loin sur ce sujet, consultez notre [guide complet sur l'adaptation DYS avec l'IA](/article/adaptation-dys-ia/).

---

## Le workflow chronométré en un coup d'œil

| Phase | Temps | Action | Outil |
|---|---|---|---|
| **1 — Définir** | 0-5 min | Brainstorming objectifs, compétences, prérequis | ChatGPT / Claude / Gemini |
| **2 — Structurer** | 5-15 min | Génération du déroulé des séances | ChatGPT / Claude / Gemini |
| **3 — Supports** | 15-30 min | Fiches élèves, traces écrites, exercices | ChatGPT / Claude / Gemini |
| **Bonus — DYS** | +5 min | Variantes différenciées | ChatGPT / Claude / Gemini |

**Total** : 30 minutes pour une séquence structurée, supports compris. 35 minutes avec la différenciation DYS.

---

## Les limites : ce que l'IA ne fait pas

L'IA est un co-pilote, pas un pilote. Ce workflow ne fonctionne que parce que l'enseignant garde le contrôle à chaque étape. Voici ce que l'IA ne remplace pas :

**La connaissance de vos élèves.** L'IA ne sait pas que votre classe a vu telle notion la semaine dernière, que tel groupe est fragile en lecture, que tel élève a besoin de manipuler pour comprendre. C'est vous qui adaptez les propositions générées à la réalité de votre classe.

**L'exactitude disciplinaire.** L'IA peut simplifier un concept au point de le déformer, ou utiliser un vocabulaire inadapté au niveau visé. La trace écrite doit être relue systématiquement avec un œil d'expert. Une erreur factuelle dans une institutionnalisation, c'est une confusion qui se propage.

**L'évaluation.** L'IA peut générer des exercices et des grilles critériées, mais l'analyse des productions d'élèves, le repérage des erreurs récurrentes, le feedback individualisé — tout cela reste du ressort de l'enseignant. L'évaluation est et reste une compétence humaine.

**Le lien pédagogique.** Une séquence n'est pas une succession de séances indépendantes. C'est un arc cohérent qui mène les élèves d'un point A à un point B. L'IA génère des éléments — c'est l'enseignant qui tisse les liens entre eux.

---

## FAQ

### Ce workflow fonctionne-t-il pour toutes les matières du primaire ?

Oui. La structure en 3 phases (définition, structuration, supports) est transversale. En mathématiques, en français, en sciences, en histoire-géo — le canevas reste identique. Seuls les champs à remplir dans les prompts changent (la notion, le niveau, le type de manipulation).

### Quelle IA utiliser : ChatGPT, Claude ou Gemini ?

Les trois fonctionnent pour ce workflow. ChatGPT (version gratuite) est suffisant. Claude (version gratuite) excelle sur les tâches de structuration et de rédaction de traces écrites. Gemini s'intègre nativement à l'écosystème Google (pratique si vous travaillez sur Google Docs). Choisissez celui dont l'interface vous convient le mieux.

### Est-ce que 30 minutes suffisent vraiment pour une séquence complète ?

Oui — à condition de partir du principe que le résultat est un brouillon structuré à 80%, pas un produit fini. Les 30 minutes incluent la génération par l'IA et la relecture-ajustement par l'enseignant. Le produit final reste de la responsabilité du prof. Si vous visez la perfection au premier jet, comptez plutôt 45 minutes.

### Peut-on utiliser ce workflow pour le réseau AEFE ou l'enseignement à l'étranger ?

Absolument. Le workflow s'adapte au contexte de l'enseignement français à l'étranger. Il suffit de préciser dans le prompt le pays et le contexte linguistique, et de demander à l'IA d'adapter les exemples et le matériel aux ressources disponibles localement.

---

## Conclusion

Préparer une séquence en 30 minutes, ce n'est pas sacrifier la qualité au profit de la vitesse. C'est redéployer son temps et son énergie : moins de temps sur la mécanique de préparation (structurer, formater, chercher le bon exemple), plus de temps sur ce qui compte vraiment — l'expertise pédagogique, l'adaptation aux élèves, le sens donné à la séquence.

L'IA n'invente pas la séquence à votre place. Elle vous débarrasse de la page blanche, des allers-retours entre le Bulletin Officiel et votre document, des hésitations sur la formulation d'un objectif. Le squelette arrive en quelques secondes. À vous de l'habiller.

Le prof reste le pilote. L'IA est le co-pilote qui tient la carte pendant que vous gardez les yeux sur la route.

---

## Aller plus loin

- 📘 [Préparer ses cours avec l'IA : le guide complet](/article/preparer-ses-cours-ia-guide-complet/) — Le guide pilier du cocon, avec 5 étapes et des dizaines de prompts
- 📐 [Améliorer une séquence avec l'IA : 5 leviers concrets](/article/ameliorer-sequence-pedagogique/) — Enrichir une séquence déjà existante
- 📝 [Créer des supports de cours avec l'IA](/article/creer-supports-cours-ia/) — Approfondir la phase 3 du workflow
- 🔧 [Adapter ses supports pour les élèves DYS avec l'IA](/article/adaptation-dys-ia/) — Le guide complet de la différenciation DYS
- ⚡ [Alléger la charge mentale : le défi n°1 et l'IA](/article/defi-charge-mentale/) — Déléguer la production brute, garder les décisions
- ⚡ [La méthode Pareto pour préparer vos séquences](/article/methode-pareto-sequence/) — Trier les tâches à fort impact et déléguer le reste à l'IA

*30 minutes aujourd'hui, c'est une séquence prête demain. Copiez, testez, ajustez — le workflow devient un réflexe en moins d'une semaine.*
