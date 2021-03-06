# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 2 - 1, 2, 3 Feature Detectie

### Responsive hamburger menu
Een responsive menu dat werkt op (alle) browsers en devices. Op een kleiner device wordt het getoond als een hamburger menu.

https://s44s.github.io/browser-technologies/opdracht2/menu.html

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/schets1.jpg "Schets")

Allereerst ben ik begonnen met mijn HTML. Om zo gelaagd mogelijk te werken, ga ik eerst bekijken hoe ik een zo goed mogelijke semantische HTML kan neerzetten. Vervolgens ben ik die HTML gaan stylen in een CSS file. Bij het stijlen heb ik telkens nagedacht 'zal dit ondersteund worden door ook oudere browsers'. Wanneer ik hier over twijfelde schreef ik een fallback. Dit heb ik bijvoorbeeld gedaan voor display flex. De fallback werkt als volgt: standaard worden de list items van het menu naast elkaar geplaatst (10vw) door ze te displayen als een `display: inline-block`. Wanneer de browser `display: flex` support worden de list items naast elkaar gezet door middel van flexbox.

```css
nav ul li {
	display: inline-block;
	width: 10vw;
}

@supports (display: flex) {
	nav ul {
		display: flex;
		float: none;
	}

	nav ul li {
		flex-basis: 10vw;
	}
}
```
Vanaf [commit 27](https://github.com/s44s/browser-technologies/commit/05b89881e26b15e2c818b4d396f37961de862f33) werkte alles voor elke browser. Vanaf hier moest ik een keuze gaan maken. Of ik zou alles met CSS gaan maken, waarbij transforms, transitions en :checked nodig waren. Dit wordt niet door alle browsers ondersteund, dus ideaal is deze oplossing niet. De andere oplossing was met javascript. Door een klik op de knop met `onclick="window.localName()` kon dit ook opgelost worden. Maar wat als javascript disabled staat? Dan kan het menu niet meer worden getoond door `display: none`. Vanwege deze reden ben ik voor de CSS oplossing gegaan. CSS is een layer lager dan Javascript en dus ook stabieler. Aandachtspuntje: in de voorbeelden die ik heb gevonden wordt een `<input type="checkbox"></input>` gebruikt. Dit lijkt mij niet het juiste element voor in een navigatie. Een andere oplossing die ik had gevonden was met een a element die je kon aanroepen met het target element. Ook dit vond ik semantisch niet correct, het is geen link waar op geklikt wordt.

Om de oplossing te vinden ben ik terug gegaan naar de basis (HTML) en gekeken wat is de hamburger menu nou eigenlijk. Ik kwam tot de conclusie dat het basically een `<button>` is waar op geklikt kan worden om het menu uit te klappen. Vanuit hier ben ik gaan zoeken in CSS of er psuedoclasses toegepast konden worden op de button en daar kwam ik de `:focus` tegen die bleek te werken. Probleem: dichtklappen ging niet door nogmaals op de knop te klikken. Daarnaast kon je niet door de menu items heen tabben aangezien het menu alleen werd getoond wanneer de focus op de button stond. Dit moest dus wéér anders.. Javascript moet hier dus nu echt van de pas komen!

Het was veel meer werk dan ik had bedacht. 'Hoe moeilijk is het maken van een responsive menu nou?'. Nou toch lastiger als ik dacht wanneer je het semantisch correct wilt doen. Zonder javascript krijg je de menu items te zien. Wanneer javascript is enabled kun je de menu items ook togglen.

TODO:
* animatie toevoegen
* transitions voor meerdere browsers schrijven
* vw fallback voor schrijven
* IE op mac krijgen om te testen

### Testen
#### Verschillende browsers
Ik heb op alle mogelijke browsers getest. Safari, Chrome, Firefox en Opera Neon. Op allen werkte het menu.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/opera.png "Schets")

* Device lab:

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7968.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7969.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7970.JPG "Schets")

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7971.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7972.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7973.JPG "Schets")

***

### Carrousel
Een aantal verschillende aankondigen met image en artikel met daarin een titel en een tekstveld die links bevatten. Wanneer mogelijk kan door de verschillende items heen geslided worden.

https://s44s.github.io/browser-technologies/opdracht2/carrousel.html

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/schets2.jpg "Schets")


Met de HTML als basis ben ik begonnen. Elk item bestaat uit een section met een image en een article met daarin een titel en een p element. Daarnaast zijn er twee buttons nodig met daarin een SVG element voor de terug en verder knoppen. Als laatste heb ik een nav onderaan de body toegevoegd. Hier ga ik later buttons in generen in Javascript.

Door middel van HTML en CSS worden de items onder elkaar geplaatst zonder buttons. Wanneer javascript het doet, komen er naast het item twee buttons te staan om terug of verder te gaan. Onderaan het item staan een aantal buttons (gelijk aan aantal sections). Deze geven aan welk item er nu getoond wordt en hoeveel andere er nog zijn. Omdat je er mee kan navigeren heb ik er een nav tag omheen geplaatst en buttons in geplaatst door middel van javascript.

Onderaan de carrousel heb ik nog een dot navigation geplaatst, bestaande uit het aantal buttons gelijk aan de sections. Wanneer je een section toevoegt komt er ook automatisch een nieuw bolletje.

### Testen
#### Verschillende browsers
Ik heb op alle mogelijke browsers getest. Safari, Chrome, Firefox en Opera Neon. Op allen werkte de carrousel.

* Device lab:

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7974.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7975.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7976.JPG "Schets")

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7977.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7977.JPG "Schets")
![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht2/images/IMG_7979.JPG "Schets")


***

### Bronnen
[Writing forward-compatible websites](https://developer.mozilla.org/en-US/docs/Web/Guide/Writing_forward-compatible_websites)

[Responsive mobile dropdown navigation using css only](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793)

[Responsive, Pure CSS Off-Canvas Hamburger Menu](https://medium.com/creative-technology-concepts-code/responsive-mobile-dropdown-navigation-using-css-only-7218e4498a99)

[html5test.com](html5test.com)

[css3test.com](css3test.com)

[kangax.github.io/compat-table/es6/](kangax.github.io/compat-table/es6/)

***

### Feedback 23 maart
Voor week twee kregen we de opdracht om feature detection toe te passen op twee componenten. Ik had in eerste instatie begrepen dat dit ging om gelaagd werken, semantische HTML om mee te starten, CSS met feature detection en als laatste laag Javascript om het plezieriger te maken met daarbij rekening houdend met feature detection.

In lagen werken had ik goed gedaan. De feature detection voor Javascript had ik als volgt gedaan:

```javascript
if('querySelector' in document && 'querySelectorAll' in document && 'addEventListener' in window)
```

Ik checkte of deze functies in Javascript ondersteund werden, zo niet, dan werd er geen Javascript uitgevoerd (dacht ik). Wat echter nu nog steeds fout zou kunnen gaan is dat hij halverwege het Javascript bestaand er mee kapt.

Om dit netter op te lossen heb ik meerdere feature detections toegevoegd, waardoor hij bij functies die niet overal toegepast worden, telkens checkt of de browser dit ondersteund.
