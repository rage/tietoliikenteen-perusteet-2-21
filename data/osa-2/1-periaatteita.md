---
path: '/osa-2/1-http'
title: 'Verkkosovelluksen toimintaperiaatteita'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat selittää miksi tietoliikenneverkko pitää olettaa epäluotettavaksi.
- Ymmärrät miksi verkon kuuntelu on helppoa ja miksi kuuntelulta suojautuminen tapahtuu lähinnä salauksen avulla.
- Osaat kuvata kuljetuskerroksen palvelut sovelluskerroksen protokollille.
- Osaat perustella miksi sovelluskerroksella täytyy ottaa kantaa sen tarvitsemiin alemman kerroksen palveluihin.

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>


## Aiemmalla kurssilla



## Sovelluskerroksen odotuksia kuljetuskerrokselle



## HTTP

HTTP (Hypertext Transfer Protocol) on käsitelty jo ensimmäisellä kurssiosalla. Se on yksinkertainen pyyntö-vastaus -protokolla. Asiakas lähettää pyynnön, johon palvelin vastaa.  Protokollan yleisen käyttötapa on www-sivujen siirto palvelimelta selaimelle. Tällöin prokollalla siirretään HTML-kielen mukaisen sivun kuvaus.

HTTP protokollaa käytetään nykyään myös sovellusten omien protokollien kuljettamiseen sovelluksen komponenttien välillä. Se on siis näiden sovelluksen omien protokollien näkökulmasta vain kuljetusprotokolla, vaikka onkin Internetin protokollapinossa sovelluskerroksen protokolla. Tällä kurssillä jätetään nämä HTTP:n päälle rakennetut sovellukset ja niiden ratkaisut kokonaan käsittelemättä, mutta lukijan on hyvä muistaa, että niitä on jo nyt ja niiden määrä luultavsti vain lisääntyy tulevaisuudessa.

## Liikenteen analysointi

Tietoliikennettä ja sen protokollien toimintaa voi seurata useilla erilaisissa analysointiohjelmilla. Niiden avulla voi kuunnella tietoliikenneverkossa kulkevia paketteja. Tällainen verkkoliikenteen seuranta ei kaikissa tilanteissa ole laillista, joten sitä ei pidä noin vain kokeilla missä vaan. Rikosoikeudellinen vastuu ja korvausvastuu on aina liikennettä seuraavalla henkilöllä, joten verkon käyttösäännöt pitää tuntea ennenkuin edes lähtee kokeilemaan liikenteen kuuntelua. Kuunnellun liikenteen voi myös tallettaa myöhempää analysointia varten. Tällaisesta pakettien tallettamista kutsutaan englanniksi capture ja suomeksi usein käytetään liikenteen kaappamista tai sieppaamista. Tällaista toimintaa tekevät sekä hyvikset että pahikset. Kumpaan joukkoo liikenteen analysoija milläkin hetkellä kuuluu voi riippua näkökulmasta. Verkon ylläpitäjällä on oikeus seurata verkon liikennettä, jos näin on käyttösäännöissä sovittu. Toisaalta verkon käyttäjä ei varmaankaan toivo oman arkaluontoisen viestittelynsä näkyvän edes ylläpitäjälle.

Viestien salaus on ainoa tällä hetkellä tunnettu keino estää muista seuraamasta omien viestien sisältöjä ja silloinkin liikenteen seuraajalla on käytettävissään erilaisia keinoja liikenteen analysointiin.

Tietoliikenteen seuraamiseen on saatavilla valmiita ohjelmia. Wireshark on avoimen lähdekoodin ohjelma, joka on laajasti käytetty. Ohjelman voi ladata wiresharkin omilta sivuilta [https://www.wireshark.org/]{https://www.wireshark.org/}. Sille on myös saatavilla paljon valmiita analysoitavia tiedostoa, jolloin voimme välttää todellisen tietoliikenteen kuuntelun tällä kurssilla kokonaan. 

Wireshark on erittäin monipuolinen ja tarjoaa paljon vaihtoehtoja tietoliikenteen analysointiin. Tällä kursilla käytämme hyvin pientä osaa sen piireteistä ja tarkastelemme vain muutamaa valmista aineistoa.



ZZZZZZZZ KESKEN!!!!!  ZZZZZZZZZ 

Suosittelen ohjelman käyttöä ja noiden valmiiden aineistojen tarkastelua. Osa harjoitustehtävistäkin perustuu niihin. Esimerkiksi HTTP protokollaan liittyy tiedosto xxx.pcap. Kun avaamme tämän tiedoston wiresharkilla, niin ….





## Lukemista


<quiz id="333846bf-2099-4aca-89e7-1a313babf7a5"></quiz>




**up**
**never**
**gonna**
**let**
