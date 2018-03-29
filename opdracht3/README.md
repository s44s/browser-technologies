# Browser Technologies - eindopdracht

> Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien

Website live on: https://browsertech.suustenvoorde.me/

## Core functionaliteit
Voor de eindopdracht heb ik gekozen om een applicatie te maken om boodschappen te selecteren die vervolgens in je winkelmandje verschijnen. Mijn interpretatie van dit concept is dat een gebruiker op een site zit met oneindig veel boodschappen en daarvan alleen de boodschappen wilt selecteren die hij of zij wilt gaan gebruiken om tosti's te maken. Dit met het idee dat vervolgens de boodschappen besteld kunnen worden en thuis bezorgd. Dit concept hebt ik uitgewerkt tot een werkende demo.

De core functionaliteit is een lijst met boodschappen die je kunt selecteren en vervolgens komen die items in je boodschappenlijstje te staan. De demo is server-side opgebouwd, zodat het formulier ook blijft werken zonder javascript.

## Gelaagd werken

//pattern prime
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker-offline-page.png "Schets")

## Enhanced feature(s)
* functionaliteit
* toegankelijkheid
* (browser) ondersteuning.

Feature(s):
- [x] server-side form (Node.js)
- [x] drag and drop
- [x] realtime toevoegen/verwijderen van boodschappen

To Do:
- [] AH api koppelen om alle mogelijke proucten in te laden

## Ondersteuning
Voor mijn demo heb ik zoveel mogelijk bestaand technieken gebruikt in zowel CSS als Javascript. Zo gebruikte ik voorheen altijd flexbox, nu probeer ik dit in eerste instantie op te lossen met float en vervolgens flexbox toe te voegen met een support check. Tijdens het testen ben ik tegen meerdere dingen aangelopen, hieronder een lijst met de punten die ik ben tegen gekomen en ik hoe ze heb opgelost:

### Viewport width
IE10 ondersteunt nog geen vw als unit. Ik heb daarom in CSS met een support dit opgelost:

```
main {
	display: inline-block;
	width: 50%;
	margin-left: 5%;
	margin-top: 5%;
	margin-bottom: 5%;
	float: left;
}

aside {
	display: inline-block;
	width: 30%;
	margin-top: 5%;
	margin-right: 10%;
	float: right;
}

@supports (width: 50vw) {
	main {
		width: 50vw;
		margin-left: 5vw;
		margin-top: 5vw;
		margin-bottom: 5vw;
	}

	aside {
		width: 30vw;
		margin-top: 5vw;
		margin-right: 10vw;
	}
}
```

### forEach
De `forEach()` function wordt niet ondersteunt op IE10. Ik heb deze daarom omgeschreven naar een for loop. Zo werkt hij op meer browsers.


### Drag and drop
Drag and drop wordt nog niet overal goed ondersteund.

Safari en Chrome deden het beide goed.

Ik heb op IE getest en toch bleek dat hij het niet deed. Dit kwam niet door drag and drop, maar door `.childNodes()`. Firefox had hetzelfde probleem, hoewel canisue dit niet aangaf. Na wat onderzoek te hebben gedaan, kwam ik de volgende optie tegen `firstElementChild`. Ik heb dit vervangen voor childNodes en dit bleek te werken.


*	welke browser de feature(s) wel/niet ondersteunen
* device lab

## Accessibility
