---
title: "Khanmigo : que vaut le tuteur IA de Khan Academy côté professeur ?"
description: "Tuteur IA pour élèves ou assistant de préparation pour le prof ? Ce que Khanmigo permet vraiment dans une classe française — usages, limites, prompts."
category: "Outils"
pubDate: 2026-08-28
---

« Un tuteur pour chaque élève » : la formule a de quoi séduire. Avec Khanmigo, Khan Academy promet un assistant adossé à GPT-4 qui guide l'élève sans jamais lui donner la réponse. Face aux annonces sur l'IA éducative, le prof des écoles peut se demander : qu'est-ce que cela change pour une classe française ?

La réponse est plus fine que le discours marketing : Khanmigo décline trois offres — enseignants, élèves, parents. L'une met l'IA en coulisses, au service du professeur. Les deux autres installent un dialogue direct entre un enfant et une machine. Ni le même outil, ni le même enjeu. Cet article fait le tri.

![Khanmigo, page d'accueil de l'outil IA de Khan Academy](/images/khanmigo/khanmigo-homepage.webp)

<div class="essential-box">

## ⚡ L'Essentiel en 30 secondes

**Trois offres** : **For teachers** (assistant de préparation du prof), **For learners** (tuteur en dialogue direct avec l'élève), **For parents** (aide aux devoirs).

**Côté prof** : offre enseignante **gratuite** — plans de cours, exit tickets, grilles d'évaluation, textes simplifiés. Intéressant, à condition d'adapter chaque sortie aux programmes français.

**Côté élèves** : **dialogue direct élève-IA** = **ligne rouge au primaire et au collège** (aucune supervision possible en classe). Seulement envisageable au **lycée, sous supervision enseignante explicite**.

**Limite de fond** : outil américain, en anglais, **non aligné sur le Bulletin Officiel**.

</div>

---

## Khanmigo, c'est quoi exactement ?

Khanmigo est l'assistant IA de Khan Academy, construit sur GPT-4 et décliné en trois offres visibles sur leur site :

- **For teachers** : assistant de préparation pour l'enseignant — plans de cours, exit tickets, grilles d'évaluation critériées (les rubrics), simplification de textes. Inscription gratuite.
- **For learners** : le tuteur proprement dit, qui dialogue directement avec l'élève en le guidant sans livrer la réponse. Accès payant.
- **For parents** : une aide aux devoirs à la maison, payante également.

La FAQ du site évoque d'ailleurs la possibilité de donner accès aux élèves et le paiement pour familles et learners. Dernier contexte : l'outil est américain, en anglais, jamais pensé pour les programmes français. Cela n'interdit pas d'en tirer parti, mais cela change la manière de l'utiliser.

---

## Ce que l'offre « For teachers » permet

L'offre enseignante est la seule qui nous concerne directement, et elle a un mérite de fond : elle place l'IA du bon côté du bureau. Le prof formule une demande, l'assistant génère un brouillon, il reprend la main. Aucun élève ne dialogue avec la machine.

Les éléments publics de l'outil montrent quatre usages : plans de cours, exit tickets, grilles d'évaluation critériées — les rubrics anglophones — et simplification de textes à plusieurs niveaux de lecture.

Rien de magique : une IA généraliste fait la même chose. L'intérêt tient au cadrage — formulaires guidés, formats pensés pour l'enseignement. Mais la décision pédagogique reste celle du prof : l'outil génère du matériel, il ne décide rien.

---

## Le tuteur pour élèves : pourquoi on s'en méfie au primaire

Venons-en au tuteur « For learners », qui fait la réputation de Khanmigo. Le principe décrit par Khan Academy est séduisant : un tuteur socratique qui questionne, encourage, décompose les problèmes, sans jamais livrer la réponse.

Le problème n'est pas la qualité du tuteur, mais l'architecture de l'usage : un dialogue direct entre un élève et une IA. Notre position est claire — un élève de primaire ou de collège ne dialogue jamais directement avec un modèle de langage. En classe entière, aucun enseignant ne peut suivre ce que chaque élève écrit à l'IA, ni ce qu'elle répond. Les dérives — erreurs assurées, contenus inadaptés, réponse toute prête — ne se gèrent pas à trente élèves simultanément.

Si un usage élève se conçoit, c'est au lycée, dans un cadre explicitement supervisé : objectifs précis, séances identifiées, débriefing collectif. Pour le primaire français, le verdict est sans appel : ce n'est pas un outil pour vos élèves, mais pour vous.

---

## Les limites pour un prof français

**L'anglais.** Interface et contenus générés sont en anglais. On peut formuler ses demandes en français, mais chaque sortie demandera une reprise : formats, exemples, vocabulaire anglophone.

**Le non-alignement sur les programmes.** Khanmigo ne connaît ni le Bulletin Officiel ni les attendus de fin de cycle. Un plan de cours suivra la logique américaine : reprécisez systématiquement niveau, notion et cadre français — ou utilisez les prompts ci-dessous.

**Les données.** Comme tout service hébergé hors d'Europe, Khanmigo pose la question habituelle : quelles données sont collectées, où sont-elles traitées ? À vérifier dans la politique de confidentialité de Khan Academy, au regard du RGPD, avant tout usage professionnel.

**Pas de magie.** Malgré l'étiquette de « tuteur », la partie enseignante reste un générateur de brouillons, qui ne connaît ni vos élèves ni votre progression. Ce qu'elle propose, vous le validez, l'ajustez ou l'écartez.

---

## Quatre prompts à copier-coller (portables)

Ces quatre prompts sont portables : ils fonctionnent dans l'offre « For teachers » de Khanmigo comme dans toute IA généraliste, et intègrent d'emblée le cadre des programmes français.

### 1. Générer un exit ticket de fin de séance

<div class="prompt-block">
<span class="prompt-label">🔧 Prompt — Exit ticket de fin de séance</span>

Tu es professeur des écoles expérimenté, expert des programmes français (Bulletin Officiel).

**Niveau** : [ex : CM1]
**Notion de la séance** : [ex : la multiplication des nombres à deux chiffres]
**Objectif de la séance** : [formuler en une phrase ce qui devait être acquis]

Génère un exit ticket de fin de séance :
1. **Trois questions courtes** (5 minutes de travail maximum), de la plus simple à la plus exigeante
2. **Une question d'auto-évaluation** pour l'élève, avec trois niveaux de réponse (je sais faire / je crois savoir / j'ai besoin d'aide)
3. **Les critères de correction rapide** pour repérer en un coup d'œil qui a acquis la notion et qui est en difficulté

Format : une demi-page A4, prête à imprimer, consignes formulées telles quelles pour les élèves.
</div>

### 2. Créer une grille d'évaluation critériée (rubric)

<div class="prompt-block">
<span class="prompt-label">🔧 Prompt — Grille critériée (rubric) à partir d'un objectif</span>

Tu es professeur des écoles expérimenté, expert des programmes français (Bulletin Officiel).

**Niveau** : [ex : CE2]
**Compétence évaluée** : [ex : produire un écrit court en respectant la structure du récit]
**Tâche de l'élève** : [ex : rédiger la fin d'un récit à partir d'un début imposé]

Construis une grille d'évaluation critériée (rubric) :
1. **Trois à quatre critères observables** (des faits vérifiables, pas des impressions : « la ponctuation est respectée », pas « c'est bien écrit »)
2. **Trois niveaux de maîtrise par critère** — acquis / en cours d'acquisition / non acquis — avec un descripteur concret pour chaque niveau
3. **Une colonne « observation »** pour noter ce que la grille ne capture pas

Format : tableau, une ligne par critère, formulation réutilisable telle quelle dans un bilan ou un carnet de suivi.
</div>

### 3. Planifier une séquence alignée sur le Bulletin Officiel

<div class="prompt-block">
<span class="prompt-label">🔧 Prompt — Plan de séquence aligné sur le Bulletin Officiel</span>

Tu es professeur des écoles expérimenté, expert des programmes français (Bulletin Officiel). Je prépare une séquence et je veux un plan aligné sur le programme officiel français.

**Niveau** : [ex : CE1, cycle 2]
**Notion du programme français** : [ex : le passé, le présent, le futur — conjugaison]
**Nombre de séances souhaité** : [ex : 4]
**Durée par séance** : [ex : 45 min]
**Contexte particulier** : [ex : classe à double niveau / aucune contrainte]

Génère un plan de séquence :
1. **Les attendus du BO concernés** (cycle et domaine) pour situer officiellement la notion
2. **La progression séance par séance** : objectif, phase de découverte, phase d'entraînement, trace écrite prévue
3. **Un point d'étape formatif en milieu de séquence** : ce que je vérifie, et comment
4. **Les erreurs typiques** attendues sur cette notion à ce niveau

Format : une section par séance, timings indicatifs, vocabulaire officiel français (pas de terminologie anglophone).
</div>

### 4. Reformuler un texte documentaire à plusieurs niveaux

<div class="prompt-block">
<span class="prompt-label">🔧 Prompt — Texte documentaire à plusieurs niveaux de complexité</span>

Tu es professeur des écoles expérimenté, spécialiste de la lecture documentaire au primaire.

**Texte source** : [coller le texte documentaire]
**Niveau de classe** : [ex : CM2]
**Objectif d'apprentissage** : [ex : identifier les caractéristiques du milieu montagnard]

À partir de ce texte, produis **trois versions du même contenu**, sans rien ajouter qui ne soit pas dans la source :

1. **Version facilitée** : phrases de huit mots maximum, une seule idée par phrase, mots difficiles repris avec une courte définition — pour les lecteurs fragiles
2. **Version standard** : niveau attendu de la classe
3. **Version approfondie** : même contenu enrichi de nuances et de connecteurs — pour les lecteurs à l'aise

Termine par la **liste des mots clés** introduits et **une question de compréhension par version**.

Format : trois sections distinctes, prêtes à imprimer, même titre de document.
</div>

---

## FAQ

### Khanmigo est-il gratuit pour les enseignants ?

Oui. L'inscription enseignante est gratuite ; les offres « For learners » et « For parents » sont payantes. Gratuit ne dispense pas de relire chaque production.

### Peut-on l'utiliser avec des élèves de primaire ?

Non — c'est notre recommandation la plus ferme. Le tuteur « For learners » repose sur un dialogue direct élève-IA, sans qu'aucun adulte puisse suivre les échanges. En classe entière au primaire, ce n'est pas tenable. On retient l'offre « For teachers » : l'IA travaille pour le prof, jamais avec les élèves. Seul un usage lycée supervisé peut se discuter.

### Est-ce disponible en français ?

Non. Interface et contenus sont en anglais, calibrés sur le système éducatif américain, sans connaissance du Bulletin Officiel. Chaque sortie demandera une adaptation — d'où les prompts portables ci-dessus.

### Faut-il Khanmigo pour appliquer ces prompts ?

Non. Ils fonctionnent dans toute IA généraliste comme dans Khanmigo. Si l'anglais ou les données vous freinent, un autre outil fera le même travail.

---

## Conclusion

Notre verdict tient en une phrase : Khanmigo vaut le détour comme assistant de préparation supplémentaire, pas comme tuteur pour vos élèves du primaire.

Côté prof, l'offre gratuite « For teachers » fait ce qu'on attend d'un générateur : plans de cours, exit tickets, grilles critériées, textes simplifiés — en anglais, hors programmes français, donc avec un vrai travail d'adaptation.

Côté élèves, la ligne rouge tient : le dialogue direct entre un enfant et une IA n'a pas sa place au primaire ni au collège — c'est l'architecture même du produit. Utilisez-le pour vous, jamais à votre place. Le prof reste le pilote.

---

## Aller plus loin

- 🤖 [Quelle IA choisir pour un professeur des écoles ?](/article/quelle-ia-professeurs-ecoles/)
- 🔧 [MagicSchool : l'assistant IA pensé pour les enseignants](/article/outil-magicschool/)
- 💬 [ChatGPT pour les profs : bien démarrer sans se tromper](/article/chatgpt-pour-prof/)
- 🧠 [Exercices différenciés avec l'IA : la méthode complète](/article/exercices-differencies-ia/)
