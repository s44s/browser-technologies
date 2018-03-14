# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Progressive Enhancement
### Opdracht 1.2 - Fork je WAFS
Hoe zit het eigenlijk met Progressive Enhancement van mijn WAFS opdracht? Daar kan wel het één en ander aan verbeterd worden. Ik heb in deze opdracht uitgezocht wat en hoe.

Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben

Website live on: http://suuscharlotte.nl/MAPPEN/wafs/#home

#### Afbeeldingen
* Kan je een ingeladen .jpg omzetten naar een .webp? Nee.
* ImageOptim doen nadat de images zijn opgehaald uit de API. Kan niet.
* Alt tag juist stylen zodat de site er niet hacky uitziet als afbeeldingen uit staan.

#### Custom fonts
* Icon fonts vervangen voor SVG
* Font subsetting https://www.fontsquirrel.com/tools/webfont-generator
* Fallback juist vormgeven
* Only .woff and .woff2 as format
* https://github.com/bramstein/fontfaceobserver or font-display

#### Javascript
* Minify Javascript
* Javascript alleen gebruiken om data in te laden, geen CSS style:none bijvoorbeeld

#### Kleur
* Zorg voor een goed contrast
* Gebruik geen kleuren hierarchie, of gebruik hier een label bij

#### Breedband internet
* Testen op slechtere internetverbindingen > hoe laadt alles in? Hoe kan dit beter?
* Performance budget niet van toepassingen

#### Cookies

#### Local Storage
* Detail pagina van een bepaalde song in localstorage opslaan

#### Muis/Trackpad disabled
* semantische HTML (transparency)
* :focus states toevoegen op elke tab

***

#### Testen in het device lab

***

#### Screenreader
* meer tekst toevoegen om het ook voor mensen met een screenreader duidelijk maken wat er gebeurd
* Afbeeldingen een omschrijving meegeven inplaats van de URL te benoemen
* Detail pagina content kunnen lezen
