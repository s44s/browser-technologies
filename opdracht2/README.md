# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 2 - 1, 2, 3 Feature Detectie

### Responsive hamburger menu
Een responsive menu dat werkt op (alle) browsers en devices. Op een kleiner device wordt het getoond als een hamburger menu.

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

### Testen:
#### Validatie
* html5test.com:
* css3test.com
* kangax.github.io/compat-table/es6/

#### Progressive enhanced demo
* Zoek uit hoe je deze kunt testen. Verzamel uitleg en artikelen. Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk).

#### Verschillende browsers
* Test de feature (en fallback) op verschillende browsers
* Device lab

### Bronnen
[Writing forward-compatible websites](https://developer.mozilla.org/en-US/docs/Web/Guide/Writing_forward-compatible_websites)

[Responsive mobile dropdown navigation using css only](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793)

[Responsive, Pure CSS Off-Canvas Hamburger Menu](https://medium.com/creative-technology-concepts-code/responsive-mobile-dropdown-navigation-using-css-only-7218e4498a99)

***

### Carrousel

Onduidelijk:
* Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk).
* 6 afzonderelijke demo's/features?
Post je 6 afzonderlijke demo’s op GitHub met uitleg in een README file.
6 features zijn onderzocht en er is een demo gemaakt.
