# Résumé cours UML

## généralités

en UML il existes plusieurs diagrammes, où chacun a un rôle bien précis.

![diagrammes](https://uml2.laurent-thiry.fr/file/all.png)

## diagramme de classe/package

### généralités

le diagramme de classe/package est un diagramme qui permet de représenter les classes et les packages d'un système.

![diagramme de classe](https://uml2.laurent-thiry.fr/file/objects3.png)

### classes

pour methodes/attributs privées : \- nom
pour methodes/attributs publiques : \+ nom
pour methodes/attributs protégées : \# nom

![classes examples](https://uml2.laurent-thiry.fr/file/objects14.png)

il existes plusieurs types de clases, que voici

![types de classes](https://uml2.laurent-thiry.fr/file/objects15.png)

pour les types générique et les commentaires

![types générique et commentaires](https://uml2.laurent-thiry.fr/file/objects16.png)

il est aussi possible de faire des associations entre les classes

![associations](https://uml2.laurent-thiry.fr/file/objects17.png)

le premier type d'association est l'association simple

le second type d'association est l'association maitre/esclave

enfin, il y a aussi l'implementation (pour les interfaces) et les dépendances (extends) qui sont des types d'associations

![associations types](https://uml2.laurent-thiry.fr/file/objects18.png)

### packages

les packages sont des regroupements de classes, qui permettent de mieux organiser le code

![packages](https://uml2.laurent-thiry.fr/file/objects19.png)

entre plusieurs paquets, il existe 2 types de relations : les dépendances (extension sur l'image) et les associations(java.awt sur l'image)

## diagramme d'objet/comunication

### objet

le diagramme d'objet est un diagramme qui permet de représenter les objets d'un système.

plus generalement, on representes les instances d'un objet pour montrer des examples, ou pour montrer les relations entre les objets.

on les representes de la manière suivante :

![diagramme d'objet](https://uml2.laurent-thiry.fr/file/objects21.png)

### communication

pour representer des fonctionnalité comme des appels de fonctions, on peut utiliser un diagramme de communication

![communication](https://uml2.laurent-thiry.fr/file/objects22.png)


## diagramme de séquence

### généralités

un  moyen de representer des appels de fonctions, en prenant en compte le temps, est le diagramme de séquence

![diagramme de séquence](https://uml2.laurent-thiry.fr/file/objects23.png)

### senario

un senario permet, de regrouper une suite de sequences afin de mieux de comprendre une fonctionalité

![senario](https://uml2.laurent-thiry.fr/file/objects24.png)

### état d'objet

il est possible d'ajouter des états d'objet dans un diagramme de séquence afin de mieux comprendre le fonctionnement d'une fonctionalité

![état d'objet](https://uml2.laurent-thiry.fr/file/objects25.png)

## diagramme de déploiement

### généralités

le diagramme de déploiement est un diagramme qui permet de représenter les machines et les logiciels qui tournent sur ces machines

il est souvent utile pour comprendre la partie resaux d'un logiciel entre plusieurs machine, par example

![diagramme de déploiement](https://uml2.laurent-thiry.fr/file/objects27.png)

## diagramme d'état

### généralités

le diagramme d'état est un diagramme qui permet de représenter les differents états d'un objet, et les transitions entre ces états

![diagramme d'état](https://uml2.laurent-thiry.fr/file/objects26.png)

### états imbriqués

il est possible de creer une hierarchie de plusieurs états, afin de mieux les organiser, exemple :

![états imbriqués](https://uml2.laurent-thiry.fr/file/objects31.png)

## diagramme de timing

### généralités

le diagramme de timing est un diagramme qui permet de représenter en fonction du temps, les les differents états d'un objet, et les transitions entre ces états

![diagramme de timing](https://uml2.laurent-thiry.fr/file/objects33.png)

## diagramme de cas d'utilisation

### généralités

un diagramme de cas d'utilisation est un diagramme qui permet de représenter les differents cas d'utilisation d'un logiciel

il permet par example d'expliquer les fonctionnalités d'une machine a retirer de l'argent

![diagramme de cas d'utilisation](https://uml2.laurent-thiry.fr/file/objects34.png)

### acteurs

il est possible de rajouter des acteurs, qui sont des utilisateurs du logiciel, afin de mieux comprendre les cas d'utilisation

### liaisons

il existe 2 types de liaisons entre les acteurs et les cas d'utilisation :

- \<\<extends>> : un cas d'utilisation peut etre etendu par un autre cas d'utilisation
- \<\<includes>> : un cas d'utilisation peut inclure un autre cas d'utilisation (si un UC plus general permet de décrire un UC plus specifique)

![liaisons](https://uml2.laurent-thiry.fr/file/uc3.png)

### details

un cas d'utilisation peut être déraillé par un diagramme de séquence, afin de mieux comprendre le fonctionnement d'une fonctionalité

![details](https://uml2.laurent-thiry.fr/file/uc4.png)

## contraintes OCL 

//TODO