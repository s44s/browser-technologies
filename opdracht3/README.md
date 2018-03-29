# Browser Technologies - eindopdracht

> Ik wil boodschappen-om-tostis-te-maken in mijn boodschappenlijstje kunnen gooien

Website live on: https://browsertech.suustenvoorde.me/

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/app.png "Schets")


## Core functionaliteit
Voor de eindopdracht heb ik gekozen om een applicatie te maken om boodschappen te selecteren die vervolgens in je winkelmandje verschijnen. Mijn interpretatie van dit concept is dat een gebruiker op een site zit met oneindig veel boodschappen en daarvan alleen de boodschappen wilt selecteren die hij of zij wilt gaan gebruiken om tosti's te maken. Dit met het idee dat vervolgens de boodschappen besteld kunnen worden en thuis bezorgd. Dit concept hebt ik uitgewerkt tot een werkende demo.

De core functionaliteit is een lijst met boodschappen die je kunt selecteren en vervolgens komen die items in je boodschappenlijstje te staan. De demo is server-side opgebouwd, zodat het formulier ook blijft werken zonder javascript.

## Gelaagd werken
Om elke browser op zijn minst de core functionaliteit te geven en de nieuwste browsers de vette dingen te bieden, heb ik in drie lagen gewerkt.

### Eerste laag
Deze laag bestaat alleen uit HTML en CSS. Het is opgebouwd uit een formulier met checkboxes die aangevinkt kunnen worden en door op de submit te klikken, worden deze verstuurd naar het boodschappenlijstje. Dit zou altijd moeten werken omdat het op de server draait.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/laag1.jpg "Schets")

### Tweede laag
In de tweede laag is javascript wel enabled en verdwijnt de submit knop. Vanaf nu kan de gebruiker producten selecteren en komen deze direct in het boodschappenlijstje te staan. Wanneer een product geselecteerd is, wordt het blokje transparanter. Wanneer je op een al gekozen product klikt, verdwijnt hij uit het boodschappenlijstje.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/laag2.jpg "Schets")

### Derde laag
In de laatste laag is het ook mogelijk om te door middel van drag en drop de items in het boodschappenlijstje te plaatsen.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/laag3.jpg "Schets")

## Enhanced feature(s)
Feature(s):
- [x] server-side form (Node.js)
- [x] drag and drop
- [x] realtime toevoegen/verwijderen van boodschappen
- [x] responsive

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/iphone66.jpg "Schets")

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

### Albert Heijn api
In eerste instantie wilde ik proberen de producten binnen te halen met een API van een supermarkt. Ik kwam een API tegen van [Albert Heijn](https://www.npmjs.com/package/albert-heijn). Helaas bleek deze niet goed gedocumenteerd te zijn en kon ik niet alle producten ophalen. Dit heb ik voor nu handmatig gedaan.

### Drag and drop
Drag and drop wordt nog niet overal goed ondersteund.

Safari en Chrome deden het beide goed.

Ik heb op IE getest en toch bleek dat hij het niet deed. Dit kwam niet door drag and drop, maar door `.childNodes()`. Firefox had hetzelfde probleem, hoewel canisue dit niet aangaf. Na wat onderzoek te hebben gedaan, kwam ik de volgende optie tegen `firstElementChild`. Ik heb dit vervangen voor childNodes en dit bleek nog niet te werken. In Firefox heb ik door middel van Dev Tools bekeken wat er aan de hand was. Wat bleek nou, de image was in firefox ook draggable en deze werd toegevoegd in plaats van het section element. Een image is namelijk vanuit zichzelf uit automatisch draggable. User-drag bleek in CSS alleen te werken op Chrome en Safari. Wat ik gedaan heb ik bij de HTML elementen die niet meer mochten draggen heb ik dit `draggable="false"` attribuut toegevoegd.

Na al deze veranderingen werkte het prima op:
- [x] Chrome
- [x] Safari
- [x] Firefox

Voor IE werd de volgende regel niet ondersteund:
```javascript
ev.dataTransfer.setData("value", ev.target.firstElementChild.value);
```

Caniuse gaf hier het volgende overaan:
> Partial support refers to limited supported formats for dataTransfer.setData/getData.

Ik heb hiervoor een extra feature detection geschreven. Helaas bleek deze ook niet te werken. Hij vindt nog steeds .setData maar hij werkt niet zoals hij zou moeten werken.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/ie11.png "Schets")

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/ie10.png "Schets")

### CSS @supports
Waar ik tijdens het testen achter kwam is dat niet alle browsers `:focus-within` ondersteunen. Dit wilde ik oplossen met een `@supports` in CSS. Dit kan alleen niet. Je kunt geen psuedoclasses checken in supports. Het lijkt er op dat ze alleen rules checken en geen selectors.

```
@supports (:focus-within) {
	section:focus-within {
		box-shadow: 0 10px 10px #777;
	}

	input[type=checkbox]:focus + label img {
		opacity: 1;
	}
}
```

## Accessibility
Tijdens de weekly nerd van 28 maart, Schiphol Group, werd er een presentatie gegeven door Tom. Tom was blind en hij vertelde ons over zijn beleving op het internet. Wat bleek is dat Tom het erg fijn vindt om een stukje context van de site mee te krijgen. Daarom heb ik een stukje tekst met uitleg toegevoegd wat deze website iemand kan bieden.

Verder is de site ook toegankelijk gemaakt voor mensen die alleen een keyboard (kunnen) gebruiken. Door middel van tab kunnen zij door de producten geen gaan en wanneer zij op spatie klikken, worden de item toegevoegd aan het boodschappen boodschappenlijstje

Ook heb ik het getest met een screenreader. Dit gaat heel goed. Wanneer je over een product gaat wordt alleen de label opgenoemd wat in dit geval de naam van het soort product is. De gebruiker krijgt te horen welk product het is en dat ze door middel van een checkbox het product kunnen selecteren.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht3/public/images/screenreader.png "Schets")
