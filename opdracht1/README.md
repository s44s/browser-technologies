# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Progressive Enhancement
### Opdracht 1.2 - Fork je WAFS
Hoe zit het eigenlijk met Progressive Enhancement van mijn WAFS opdracht? Daar kan wel het één en ander aan verbeterd worden. Ik heb in deze opdracht uitgezocht wat en hoe.

Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

Website live on: http://suuscharlotte.nl/MAPPEN/wafs/#home

#### Afbeeldingen
Mijn WAFS app heeft album foto's en artiesten foto's. Deze zijn puur om de website wat aantrekkelijker te maken. De afbeeldingen bevatten geen content die gemist wordt zodra je afbeeldingen uitzet. De images nemen de meeste ruimte in op mijn site (1.3MB)

![alt text](https://github.com/s44s/browser-technologies/blob/master/opdracht1/static/img/screen4.png "Screen")

Omdat de afbeeldingen binnen komen via de API request heb ik geen invloed op het soort formaat van de image. Ik kan hem bijvoorbeeld niet omzetten naar .webp. Ook een tool als ImageOptim komt hier niet van pas.

* Alt tag juist stylen zodat de site er niet hacky uitziet als afbeeldingen uit staan.

#### Custom fonts
Op dit moment gebruikt de site één custom font. Hier is ook een fallback voor geschreven. Icon fonts zijn niet in deze site gebruikt. Best practices voor custom fonts:
* Icon fonts vervangen voor SVG
* Font subsetting https://www.fontsquirrel.com/tools/webfont-generator
* Fallback juist vormgeven (https://github.com/bramstein/fontfaceobserver or font-display)
* Only .woff and .woff2 as format

#### Javascript
* Minify Javascript
* Javascript alleen gebruiken om data in te laden, geen CSS style:none bijvoorbeeld
* URLSearchParams wordt niet ondersteund door Safari
* Modules wordt niet ondersteund door Safari & Firefox

#### Kleur
* Zorg voor een goed contrast
* Gebruik geen kleuren hierarchie, of gebruik hier een label bij

#### Breedband internet
* Testen op slechtere internetverbindingen > hoe laadt alles in? Hoe kan dit beter?
* Performance budget niet van toepassingen

#### Cookies
Daar maakt deze app op het moment geen gebruik van en dus ook niet van toepassing om dat momenteel te gaan testen.

#### Local Storage
* Detail pagina van een bepaalde song in localstorage opslaan

#### Muis/Trackpad disabled
* semantische HTML (transparency)
* :focus states toevoegen op elke tab

***

#### Testen in het device lab
* Website moet nog responsive gemaakt worden..

***

#### Screenreader
Allereerst heb ik de screenreader (voor het eerst) gebruikt, wat ik nog niet zo gemakkelijk vond gaan. Ik vond het erg moeilijk hoe ik bepaalde elementen kon gaan selecteren op een site, waarvan ik geen idee had hoe hij er uit zag. Verbeterpunten naar aanleiding van het testen met een screenreader:

* Meer inhoudelijke content (tekst) toevoegen om het ook voor mensen met een screenreader duidelijk te maken wat er op deze site gedaan kan worden.
* Afbeeldingen een omschrijving meegeven inplaats van de URL te benoemen (kan dit?)
* Detail pagina content kunnen lezen. Wanneer je nu doorgaat naar een detailpagina loopt hij vast. Hij kan geen details voorlezen over dat specifieke nummer.
