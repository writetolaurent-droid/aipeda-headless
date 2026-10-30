---
title: "Co-intervention et décloisonnement : organiser l'échange de services avec l'IA"
description: "Co-intervention, décloisonnement : l'IA porte la logistique (plans de séance, plannings de groupes, grilles communes). Le prof garde la concertation."
category: "Préparer"
pubDate: "2026-10-30"
---

Co-intervenir avec un collègue, échanger des groupes, décloisonner une classe sur un créneau : ces dispositifs font partie des plus efficaces pour différencier… et des plus pénibles à organiser. Il ne s'agit plus seulement de préparer une séance, mais d'en préparer deux ou trois **synchronisées** : les groupes ne travaillent pas la même chose au même rythme, les objectifs doivent rester cohérents d'un enseignant à l'autre, et la moindre absence ou date de sortie décale tout le planning de la semaine. C'est là que l'IA, bien utilisée, trouve sa place : non pas pour décider qui fait quoi — c'est votre travail de concertation — mais pour porter la logistique de la synchronisation pendant que vous gardez la main sur la pédagogie.

<div class="essential-box">

**L'essentiel en 30s**

- **Le problème** : en co-intervention ou en décloisonnement, chaque séance se prépare en plusieurs versions alignées, et la coordination documentaire explose (grilles communes, plannings de groupes, cohérence des objectifs entre deux enseignants).
- **Ce que l'IA fait bien** : produire les variantes de séances à partir d'un cadrage commun, générer les tableaux de suivi de groupes, réécrire un document pour l'autre discipline ou l'autre niveau, maintenir des critères d'évaluation partagés.
- **Ce que l'IA ne remplace pas** : la concertation entre collègues, la répartition des groupes, l'observation des élèves et l'évaluation — toujours humaines.
- **La ligne rouge** : l'IA travaille en coulisses pour le professeur ; elle ne dialogue jamais directement avec les élèves.

</div>

## Pourquoi la co-intervention est un cauchemar logistique (et pas pédagogique)

Sur le fond, la co-intervention est souvent bien pensée : deux enseignants, deux cadres, des groupes plus fins, des besoins mieux traités. Ce qui plonge les équipes dans l'épuisement, c'est la *production documentaire* qui gravite autour. Une séance classique, vous la préparez une fois. Une séance en décloisonnement, il faut : un scénario pour le groupe A, un scénario pour le groupe B, des supports compatibles avec les deux, une grille d'observation utilisable par les deux adultes, et un point de convergence — ce que les élèves feront de commun malgré les parcours différents.

Multiplier par le nombre de créneaux par semaine, puis par le risque de désynchronisation (un collègue absent, une sortie, une réunion qui décale la séance), et on obtient une charge qui n'a rien à voir avec le geste pédagogique lui-même. Beaucoup d'équipes finissent par abandonner le dispositif non pas parce qu'il ne fonctionne pas auprès des élèves, mais parce que la coordination coûte plus cher que les bénéfices.

L'IA ne supprimera pas la concertation — et ne doit pas le faire. Mais elle peut absorber une grande partie de la production de seconde main : transformer un cadrage en documents prêts à l'emploi, aligner des formulations, maintenir des tableaux à jour. C'est exactement le profil de tâche où elle est la plus fiable.

## Un cadrage commun, plusieurs documents : la méthode en 3 temps

La méthode qui fonctionne repose sur une règle simple : **une seule source de vérité**, le cadrage de concertation, et tous les documents en dérivent.

**Temps 1 — la concertation produit un cadrage court.** Entre collègues, vous décidez : objectifs des groupes, répartition des élèves, critères de réussite, place dans la progression. Rien d'illégal à le faire à la main, et c'est même le seul moment qui demande une vraie discussion. Le cadrage tient en une dizaine de lignes.

**Temps 2 — l'IA décline le cadrage en documents.** À partir de ce cadrage, vous demandez à un assistant : le plan de séance de chaque groupe, les supports, le tableau de suivi des rotations, la grille d'observation commune. Vous relisez, vous ajustez, vous validez. L'outil propose, le professeur dispose.

**Temps 3 — l'IA maintient la synchronisation.** Quand quelque chose bouge (séance décalée, groupe rééquilibré), plutôt que de tout réécrire, vous demandez à l'IA de mettre à jour les documents concernés à partir du nouveau cadrage. La cohérence d'ensemble est préservée d'un simple prompt.

### Prompt 1 : produire le plan de séance de chaque groupe

Voici un prompt de cadrage à adapter. La structure en deux colonnes (ce que fait chaque groupe) est ce qui rend la co-intervention lisible sur le terrain.

<div class="prompt-block"><span class="prompt-label">📋 Plan de séance en co-intervention</span>

Tu es assistant de préparation pour deux enseignants du primaire qui co-interviennent sur un créneau. Voici notre cadrage de concertation :

- Niveau : [ex. CM1-CM2] · Discipline : [ex. mathématiques]
- Groupe A : [objectif spécifique, besoin visé]
- Groupe B : [objectif spécifique, besoin visé]
- Point commun : [ce que les deux groupes partagent : rituel de lancement, trace écrite, critères de réussite]
- Durée : [X min] · Matériel disponible : [liste]

Produis, pour chaque groupe, un plan de séance structuré : objectif, lancement commun, phase de recherche (consignes adaptées, un ou deux exemples), phase de structuration, trace écrite attendue. Termine par une grille d'observation commune, utilisable par l'un ou l'autre enseignant, avec 3 à 4 indicateurs simples sur les élèves.

Ne remplace pas nos choix : signale par un marqueur [À VALIDER] tout endroit où une décision pédagogique nous revient.

</div>

La consigne finale — le marqueur [À VALIDER] — est importante : elle force l'outil à rester dans son rôle et rend la relecture rapide, car vos décisions sont immédiatement repérables.

### Prompt 2 : le tableau de suivi des groupes et des rotations

Le deuxième document qui fait perdre le plus de temps est le planning des groupes. Surtout quand il faut le réécrire à chaque réajustement.

<div class="prompt-block"><span class="prompt-label">📋 Tableau de suivi des groupes en décloisonnement</span>

Voici la composition actuelle de nos groupes en décloisonnement : [collez la liste des élèves par groupe, ou uniquement les effectifs et caractéristiques si vous préférez anonymiser : ex. « Groupe A : 8 élèves travaillant la fluence, Groupe B : 10 élèves sur la compréhension »].

Voici notre créneau hebdomadaire : [jour, horaire, durée] et nos contraintes connues : [ex. sortie le 12, conseil d'école le 19].

Produis : 1) un tableau de rotation sur X semaines (dates, groupe A, groupe B, objectif de chaque séance repris de notre progression) ; 2) une version « plan B » pour le cas où l'un des deux enseignants est absent (ce que fait le groupe restant en autonomie encadrée) ; 3) la liste des documents à préparer avant chaque séance, déduite des objectifs.

Format : tableau markdown, imprimable en A4 paysage.

</div>

Deux précautions. D'abord, la vie privée : si vous passez par un assistant en ligne, anonymisez — effectifs et besoins suffisent pour construire un planning, pas besoin de noms. Ensuite, la vérification des dates : les modèles se trompent parfois sur les calendriers, relisez toujours la colonne des dates avant impression.

### Prompt 3 : maintenir les critères d'évaluation partagés

Le point de friction le plus sous-estimé de la co-intervention : deux adultes qui évaluent avec des critères légèrement différents. Un document de référence commun, relu par l'IA pour la cohérence, règle le problème.

<div class="prompt-block"><span class="prompt-label">📋 Grille d'évaluation commune aux deux enseignants</span>

Voici les critères d'évaluation que nous avons retenus en concertation pour notre dispositif de co-intervention en [discipline] : [collez vos critères, même en vrac].

1. Mets-les en cohérence : signale les doublons, les formulations ambiguës et les niveaux d'exigence qui varient d'un critère à l'autre.
2. Propose une grille unique à 3 niveaux de maîtrise, avec pour chaque critère un observable concret par niveau (ce que l'élève fait, pas ce qu'il « sait »).
3. Rédige une version courte (une demi-page) à coller en tête des cahiers ou des supports, compréhensible par les élèves de [niveau].

</div>

Le résultat reste à valider en concertation — c'est votre outil commun, pas celui de l'IA. Mais partir d'une mise en cohérence automatique fait gagner la séance de concertation qu'on aurait passée à débattre de formulations.

## Les limites honnêtes

- **L'IA ne connaît ni vos élèves ni votre collègue.** La répartition des groupes, l'ajustement des objectifs et la dynamique entre deux adultes échappent complètement à l'outil. Toute proposition de l'IA sur la composition des groupes est à écarter.
- **Risque de standardisation.** Si les deux enseignants utilisent les documents générés sans les relire, la séance perd ce qui fait la valeur de la co-intervention : deux regards différents. Le cadrage commun doit rester court et vivant, pas un document d'usine.
- **Confidentialité.** Jamais de noms d'élèves ou de données sensibles dans un prompt envoyé à un service en ligne. Anonymisez systématiquement (effectifs, besoins, initiales codées si nécessaire).
- **L'évaluation reste humaine.** La grille peut être rédigée avec l'IA, mais l'observation des élèves et le jugement sur leur travail appartiennent aux deux enseignants. Aucun feedback automatisé sur les productions d'élèves.
- **La synchronisation de secours.** Si l'outil ou l'accès fait défaut un jour donné, vous devez savoir reconstruire l'essentiel à la main : d'où l'intérêt de garder le cadrage de concertation sur papier, comme source de vérité.

## FAQ

### Peut-on utiliser l'IA pour répartir les élèves dans les groupes ?

Non. La composition des groupes est une décision pédagogique qui repose sur votre connaissance fine des élèves — affective autant que scolaire. L'IA peut en revanche formater la liste obtenue, produire les étiquettes, les tableaux et les plannings à partir de VOTRE répartition.

### Faut-il deux comptes ou un compte partagé avec le collègue ?

Le plus simple est un document de cadrage partagé (drive commun, voire papier) que chacun copie-colle dans ses propres sessions. Évitez les comptes partagés : les historiques de conversation mélangeraient des contenus sans lien, et la traçabilité de qui a généré quoi se perd.

### Le décloisonnement entre plusieurs classes d'un cycle change-t-il la méthode ?

Non : c'est le même schéma, avec plus de variantes. Le cadrage de concertation devient un tableau à N colonnes (un groupe par enseignant ou par niveau), et les prompts demandent autant de plans de séance qu'il y a de groupes. Prévoyez des sessions séparées par groupe plutôt qu'une seule méga-demande : les résultats sont plus lisibles et plus faciles à relire.

### Et si mon collègue ne veut pas utiliser l'IA ?

Aucun problème : la méthode fonctionne même à sens unique. Vous produisez les documents à partir du cadrage commun, il les relit et les annote comme n'importe quel support préparé à l'avance. La seule condition est qu'il garde le droit de veto sur tout ce qui sera vu par les élèves.

## Conclusion

La co-intervention et le décloisonnement échouent rarement pour de bonnes raisons pédagogiques : ils s'essoufflent le plus souvent parce que la logistique — multiplier les documents, maintenir la cohérence, gérer les aléas — finit par peser plus lourd que le dispositif lui-même. En confiant à l'IA la déclinaison documentaire d'un cadrage que vous avez construit à deux, vous remettez le temps de concertation là où il sert : les décisions pédagogiques, pas la mise en page. L'IA propose la version B de la séance, le planning à jour, la grille cohérente. Vous et votre collègue restez les seuls à décider ce qui est bon pour ces élèves-là.

## Aller plus loin

- 📘 [Préparer ses cours avec l'IA : le guide complet](/article/preparer-ses-cours-ia-guide-complet/) — la méthode de base dont dérive tout workflow de préparation.
- 🗓️ [Construire l'emploi du temps de sa classe avec l'IA](/article/emploi-du-temps-classe-ia/) — pour poser les créneaux de co-intervention dans un emploi du temps tenable.
- 🧩 [Organiser des groupes de besoin avec l'IA](/article/groupes-de-besoin-organisation-ia/) — la logique de groupes que le décloisonnement vient élargir.
- 📗 [Exercices différenciés avec l'IA](/article/exercices-differencies-ia/) — produire les supports de chaque groupe sans tripler le travail.
