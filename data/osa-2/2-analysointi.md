
---
path: '/osa-2/2-analysointi'
title: 'Liikenteen analysointi'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät millaisia lainsäädännöllisiä aspekteja liittyy tietoliikenteen seurantaan verkossa
- Ymmärrät milloin verkon liikennettä voi kuunnella / kaapata ja miten, jotta ei riko lakia
- Osaat alkeellisella tasolla käyttää wireshark -ohjelmaa valmiin tallennetun liikenteen analysointiin

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>

## Liikenteen analysointi

Tietoliikennettä ja sen protokollien toimintaa voi seurata useilla erilaisissa analysointiohjelmilla. Niiden avulla voi kuunnella tietoliikenneverkossa kulkevia paketteja. Tällainen verkkoliikenteen seuranta ei kaikissa tilanteissa ole laillista, joten sitä ei pidä noin vain kokeilla missä vaan. Rikosoikeudellinen vastuu ja korvausvastuu on aina liikennettä seuraavalla henkilöllä, joten verkon käyttösäännöt pitää tuntea ennenkuin edes lähtee kokeilemaan liikenteen kuuntelua. Kuunnellun liikenteen voi myös tallettaa myöhempää analysointia varten. Tällaisesta pakettien tallettamista kutsutaan englanniksi capture ja suomeksi usein käytetään liikenteen kaappamista tai sieppaamista. Tällaista toimintaa tekevät sekä hyvikset että pahikset. Kumpaan joukkoo liikenteen analysoija milläkin hetkellä kuuluu voi riippua näkökulmasta. Verkon ylläpitäjällä on oikeus seurata verkon liikennettä, jos näin on käyttösäännöissä sovittu. Toisaalta verkon käyttäjä ei varmaankaan toivo oman arkaluontoisen viestittelynsä näkyvän edes ylläpitäjälle.

Viestien salaus on ainoa tällä hetkellä tunnettu keino estää muista seuraamasta omien viestien sisältöjä ja silloinkin liikenteen seuraajalla on käytettävissään erilaisia keinoja liikenteen analysointiin.

Tietoliikenteen seuraamiseen on saatavilla valmiita ohjelmia. Wireshark on ilmainen, avoimen lähdekoodin ohjelma, joka on laajasti käytetty. Ohjelman voi ladata wiresharkin omilta sivuilta [https://www.wireshark.org/]{https://www.wireshark.org/}. Sille on myös saatavilla paljon valmiita analysoitavia tiedostoa, jolloin voimme välttää todellisen tietoliikenteen kuuntelun tällä kurssilla kokonaan. 

Wireshark on erittäin monipuolinen ja tarjoaa paljon vaihtoehtoja tietoliikenteen analysointiin. Tällä kursilla käytämme hyvin pientä osaa sen piireteistä ja tarkastelemme vain muutamaa valmista aineistoa.


## Lainsäädännöstä ja etiikasta

salakuuntelu
Salassapito
tietoliikenteen häirintä
tietojärjestelmän häirintä
tietomurto
suojauksen purkujärjestelmärikos
tietosuojarikos    (Tietosuojalaki!)
identiteettivarkaus

Teknisen suojauksen kiertämiskeinorikos  (eri luvussa!)
Oikeuksien sähköisten hallinnointitietojen loukkausrikos
Datavahingonteko
Viestintärauhan rikkominen
Salakuuntelu


https://www.finlex.fi/fi/laki/ajantasa/1889/18890039001#L38

viestintäsalaisuuden loukkaus!!

Tietosuojalaki: https://www.finlex.fi/fi/laki/ajantasa/2018/20181050

Laki sähköisen viestinnän palveluista https://www.finlex.fi/fi/laki/ajantasa/2014/20140917  (vanhalta nimeltään tietoyhteiskuntakaari)

Laki tietoliikennetiedustelusta siviilitiedustelussa: https://www.finlex.fi/fi/laki/alkup/2019/20190582

Tutustu sähköisen viestinnän palvelujen lain lukuun 21 ja lue siitä mitä laissa sanotaan verkkotunnuksista.

## Wireshark

ZZZZZZZZ KESKEN!!!!!  ZZZZZZZZZ 

Suosittelen ohjelman käyttöä ja noiden valmiiden aineistojen tarkastelua. Osa harjoitustehtävistäkin perustuu niihin. Esimerkiksi HTTP protokollaan liittyy tiedosto xxx.pcap. Kun avaamme tämän tiedoston wiresharkilla, niin ….
