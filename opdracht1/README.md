# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Progressive Enhancement
### Opdracht 1.2 - Fork je WAFS
Hoe zit het eigenlijk met Progressive Enhancement van mijn WAFS opdracht? Daar kan wel het één en ander aan verbeterd worden. Ik heb in deze opdracht uitgezocht wat en hoe.

Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

Website live on: http://suuscharlotte.nl/MAPPEN/wafs/#home

#### 1. Afbeeldingen
Mijn WAFS app heeft album foto's en artiesten foto's. Deze zijn puur om de website wat aantrekkelijker te maken. De afbeeldingen bevatten geen content die gemist wordt zodra je afbeeldingen uitzet. De images nemen de meeste ruimte in op mijn site (1.3MB)

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht1/static/img/screen4.png "Screen")

Daarnaast heb ik door middel van de chrome extension 'Block Image' afbeeldingen uitgezet. Dit komt er behoorlijk raar uit te zien. De website wordt er niet minder bruikbaar door, maar de styling klopt niet meer. De reden hiervoor heb ik nog niet kunnen ontdekken..

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht1/static/img/img.png "Screen")

Omdat de afbeeldingen binnen komen via de API request heb ik geen invloed op het soort formaat van de image. Ik kan hem bijvoorbeeld niet omzetten naar .webp. Ook een tool als ImageOptim komt hier niet van pas.

De alt tag stylen zou een optie zijn, maar dit voegt niet veel toe aan het begrijpen van de content van de pagina. De afbeelding bevatten geen belangrijke content.

#### 2. Custom fonts
Op dit moment gebruikt de site geen custom fonts. Het font wat gebruikt wordt momenteel heeft een fallback 'sans-serif'. Icon fonts zijn niet in deze site gebruikt. Ik heb getest met het disabelen van custom fonts en de pagina werkt. Er vallen geen dingen weg. Per browser is het verschillend hoe het font eruit komt te zien. Dit komt door de systemfonts die als fallback staan opgegeven in de browsers.

Best practices voor custom fonts:
* Icon fonts vervangen voor SVG.
* Font subsetting https://www.fontsquirrel.com/tools/webfont-generator.
* Fallback gebruiken en die juist vormgeven (https://github.com/bramstein/fontfaceobserver or font-display).
* Only .woff and .woff2 als format om de load pagina niet lager te maken dan nodig.

#### 3. Javascript
Javascript is van groot belang bij mijn applicatie, er wordt praktisch geen data ingeladen zonder script. Dit wordt alleen niet naar de gebruiker getoond. Het enige wat je te zien krijgt is een wit scherm. Dit komt omdat ik de sections die in de applicatie staan laat togglen. Ik zou hier misschien nog eens over na moeten denken of dit de beste oplossing is. Wel vraag ik mij af of dit een groot probleem gaat oplossen want het inladen van de data moet via javascript gebeuren. Ik zou de gebruiker duidelijk maken dat javascript aan moet staan om deze site te gebruiken. Verder zijn er nog een aantal andere dingen gebleken uit mijn javascript:
* URLSearchParams wordt niet ondersteund door Safari
* Modules ES6 wordt niet ondersteund door Safari & Firefox. Ik heb daarom voor nu de modules weg gehaal en 1 script in laten laden. Wanneer mijn script groter wordt zou ik ervoor kunnen kiezen om modulair in te laden met ES5.

#### 4. Kleur
Op mijn site gebruik ik weinig kleuren aangezien de afbeeldingen die ik gebruik behoorlijk kleurrijk (kunnen) zijn. De tekstvelden zijn wit en de hover is vaak zwart. Ik heb het getest met de Chrome extenstion (I want to see like the colour blind), dit heeft niet voor problemen gezorgd.

Best practices:
* Zorg voor een goed contrast
* Gebruik geen kleuren hierarchie, of gebruik hier een label bij
* Laat de betekenis van kleuren (bijv: rood = gevaar) niet bepalend zijn voor een bepaald element. Geef daar ook een beschrijving bij als dat gedaan wordt. Zodat ook mensen die de kleur niet/slecht kunnen zien ook begrijpen wat er bedoeld wordt.

#### 5. Breedband internet
Een performance budget is niet van toepassing op dit moment. De grootste 'boosdoener' zijn de afbeeldinen, waar ik niks aan kan doen aangezien ik ze niet zelf inlaad via HTML of CSS.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht1/static/img/screen5.png "Screen")

Daarnaast heb ik ook de site getest op een slectere internetverbinding (slow 3G). De totale load tijd kwam uit op 11.40sec. Punten die ik kan verbeteren om de performance beter te krijgen:
* logo.png neemt meer tijd in beslag dan nodig, deze afbeelding kan ik compressen. Dit geldt hetzelfde voor loader.gif
* Transparency.min.js laadt mogelijk meer in dan nodig als library. Kan dit anders opgelost worden? Dit geldt hetzelfde voor routie.js
* Het JS bestand app.js zou ik kunnen minifyen

#### 6. Cookies
Daar maakt deze app op het moment geen gebruik van en dus ook niet van toepassing om dat momenteel te gaan testen.

#### 7. Local Storage
Mijn WAFS app maakt geen gebruik van localstorage. Dit omdat de data continu kan veranderen. De top songs blijven niet altijd gelijk. Wat ik wel nog zou kunnen doen om de localstorage te benutten is om bepaalde detail pagina's o te slaan. Zo kost dit minder tijd om continu opnieuw geladen te worden. Het zorgt verder niet voor problemen omdat de informatie van dat nummer altijd gelijk zal blijven.

#### 8. Muis/Trackpad disabled
De site kan ook gebruikt worden voor mensen die alleen trackpad gebruiken. Wel is het nu nog gedaan met de standaard blauwe outline aangegeven. Dit zou mooier gestyled kunnen worden. Dit kan gedaan worden door een :focus state toe te voegen op elke tab.

***

#### Testen in het device lab
Er zijn per browser een aantal dingen die niet werken (zie punten hierboven). Wanneer dit gebeurd wordt eigenlijk de gehele javascript geblocked. Ik ga uitzoeken of dit beter opgelost kan worden.

Een styling probleem is dat de website nog niet volledig responsive is. Daarnaast kan de CSS ook nog wel netter gemaakt worden.

***

#### Screenreader
Allereerst heb ik de screenreader (voor het eerst) gebruikt, wat ik nog niet zo gemakkelijk vond gaan. Ik vond het erg moeilijk hoe ik bepaalde elementen kon gaan selecteren op een site, waarvan ik geen idee had hoe hij er uit zag. Verbeterpunten naar aanleiding van het testen met een screenreader:

* Meer inhoudelijke content (tekst) toevoegen om het ook voor mensen met een screenreader duidelijk te maken wat er op deze site gedaan kan worden.
* Afbeeldingen een omschrijving meegeven inplaats van de URL te benoemen (kan dit?)
* Detail pagina content kunnen lezen. Wanneer je nu doorgaat naar een detailpagina loopt hij vast. Hij kan geen details voorlezen over dat specifieke nummer.
* Daarnaast heb ik zowel Engelse als Nederlandse teksten door elkaar gehaald. Dit gaat fout met de screenreader.

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht1/static/img/screanreader.png "Screen")
