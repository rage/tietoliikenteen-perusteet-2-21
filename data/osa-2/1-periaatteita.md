---
path: '/osa-2/1-periaatteita'
title: 'Verkkosovelluksen toimintaperiaatteita'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat selittää miksi tietoliikenneverkko pitää olettaa epäluotettavaksi.
- Ymmärrät miksi verkon kuuntelu on helppoa ja miksi kuuntelulta suojautuminen tapahtuu lähinnä salauksen avulla.
- Osaat kuvata kuljetuskerroksen palvelut sovelluskerroksen protokollille.
- Osaat perustella miksi sovelluskerroksella täytyy ottaa kantaa sen tarvitsemiin alemman kerroksen palveluihin.

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>




## Verkkosovellus

Aiemmalla kurssilla kävimme jo läpi Internetin protokollapinon ja eri kerrosten tehtävät. Tarkastellaan nyt huolellisemmin sovelluskerroksen ohjelmistoja ja niiden periaatteita. Sovelluskerros on protokollapinon ylin kerros. Sen alapuolella olevien kerrosten toteutuksesta vastaa käyttöjärjestelmä tai laitteisto. Muistithan, että sovelluskerros on vain verkon reunoilla olevilla laitteilla. Verkkosovelluskin siis toimii vain näillä laitteilla.

Jos ohjelmien todellinen suoritusympäristö on [pilvipalvelussa](https://fi.wikipedia.org/wiki/Pilvilaskenta), [virtuaalikoneella](https://fi.wikipedia.org/wiki/Virtuaalikone) tai jossain muussa uudemmassa arkkitehtuuriratkaisussa (kuten kontit), niin näillä on usein omia sisäisiä hierarkiatasoja. Virtuaalikoneella voi esimerkiksi olla oma käyttöjärjestelmä ja sen toteuttama protokollapino. Tällä kurssilla emme kuitenkaan ehdi paneutua näihin, mutta lukijan on hyvä muistaa, että todellisuus on huomattavan monimuotoisempi kuin kurssilla käsitelty perinteinen malli. Perinteisessä mallissa ajatellaan, että sovelluskerroksen ohjelmaa suoritetaan suoraan käyttöjärjestelmän päällä toimivassa prosessissa. Prosessin toimintaa on kuvattu Tietokoneen toiminta -kurssin materiaalissa. Käyttöjärjestelmän näkökulmasta kaikki nämä uudet suoritusympäristötkin ovat prosesseja, jotka ovat sisäisesti vain hyvin paljon monimuotoisempia ja käyttävät sen tarjoamaa protokollapinoa hyvin perinteisesti.

Verkkosovellus ohjelmistosta muodostuu, kun sen osia suoritetaan useammalla koneella eri prosesseissa ja prosessien täytyy kommunikoida keskenään. Ohjelmien (tai prosessien) välinen kommunikointi täytyy suunnitella huolellisesti. Ensin täytyy päättää millaista kommunikointimallia ohjelman osien välillä halutaan käyttää ja sitten suunnitella protokolla tälle kommunikoinnnille.

Yksinkertainen ja paljon käytetty kommunikointimalli on asiakas-palvelija -malli, jossa ohjelmiston eri komponentit ovat joko asiakkaita tai palvelijoita. Yhdella palvelijalla voi olla useita asiakkaita, mutta yksi asiakas tyypillisesti käyttää vain yhtä palvelijaa kerrallaan. Eri suorituskerroilla tai eri aikoina asiakas voi käyttää eri palvelijoita. Asiakkaat olettavat, että palvelin on aina niiden käytettävissä eli saatavilla 24/7 (24 tuntia vuorokaudessa, 7 päivää viikossa). Asiakkaan pitää tietää, miten palvelimeen otetaan yhteyttä (palvelimella pysyvä IP-osoite). Palvelin vain odottaa yhteydenottoja. Palvelinohjelmaa suorittavat palvelinkoneet on usein koottu erillisiin [palvelinkeskuksiin](https://fi.wikipedia.org/wiki/Datakeskus) (engl. data center), jossa niiden ylläpito ja seuranta on helpompi toteuttaa. Asiakaspuolen ohjelma puolestaan on usein käyttäjän omalla koneella. Asiakkaat ovat yhteydessä palvelimeen tyypillisesti vain silloin, kun ne tarvitsevat palvelua. Ne voivat vaihtaa sijaintiaan verkossa ja silloin niiden IP-osoitekin voi eri yhteyskertojen välillä vaihtua. Asiakkaat eivät kommunikoi keskenään vaan ainoastaan palvelimen kanssa. Hyvä esimerkki asiakasohjelmistosta on web-selain.

Toisessa yleisesti käytetyssä mallissa kaikki ohjelmiston osat ovat keskenään samanarvoisia ja kommunikoinnin voi aloittaa mikä tahansa osapuoli. Tästä mallista käytetään usein nimitystä vertaisverkko (engl. peer-to-peer network). Puhtaimmillaan tässä mallissa ohjelman komponenteilla ei ole toisistaaan poikkeavia rooleja tai toiminnallisuutta, vaan kaikki tekevät kaikkea. Kun keskitettyä palvelinta ei ole, niin komponenttien pitää pyytää palveluja toisiltaan ja myös antaa palveluja toisille. Vertaistoimijoiden ei tarvitse aina olla aktiivisia ja niiden IP-osoitekin voi muuttua. Tästä seuraa, että tällaisen verkon ylläpitäminen on monimutkaista, kun verkon jäsenet koko ajan vaihtuvat.

Todellisuudessa monet laajat verkkosovellukset ovat näiden kahden mallin sekoituksia. Esimerkiksi verkkopeleille on tyypillistä se, että pelin alussa käyttäjän ohjelma ottaa yhteyttä palvelimeen, mutta pelin kuluessa osa kommunikoinnista voi tapahtua vertaisverkon kaltaisesti suoraan kahden pelaan ohjelmistojen välillä ilman palvelinta.



## Sovelluskerroksen odotuksia kuljetuskerrokselle

Sovelluksen oman kommunikoinnin suunnittelussa täytyy ottaa kantaa siihen millaista palvelua kuljetuskerrokselta halutaan. Kuten aiemmin jo havaitsimme itse tietoliikenneverkon toiminta on epäluotettavaa, mutta useimmat sovellukset ja niiden suunnittelijat haluavat luotettavaa viestinvälitystä sovelluksen komponenttien välillä. Tällöin sovellus edellyttää, että kuljetuskerros tarjoaa tällaisen luotettavan viestin välityksen. Sovellus voi myös hoitaa kadonneisiin viesteihin liittyvän toipumisen sovelluksen oman logiikan mukaisesti, jolloin sille voi hyvin riittää epäluotettava kuljetuspalvelu.

Sovelluksilla on itseassa paljon erilaisia toiveita ja tarpeita viestien kuljetukselle. Kurose-Rossin oppikirjassa nämä on jaoteltu neljään ryhmään: tiedon eheys, ajoitukset, suoritusteho ja turvallisuus. Tiedon eheys (engl. data integrity) -ryhmään kuuluvat ne sovelluksen vaatimukset, jotka liittyvät viestinnän luotettavuuteen. Esimerkiksi edellytetään, että sanomat menevät perille juuri sellaisina kuin ne on lähetetty. Ajoitukset (engl. timing) liittyvät esimerkiksi pakettien siirtoaikojen vaihteluun yms. Suoritusteho (engl. throughput) liittyy verkon tarjoamaan kapasiteettiin ja sen riittävyyteen sovelluksen näkökulmasta. Sovellus voi tarvita esimerkiksi tietyn minimikapasiteetin voidakseen toimia hyvin. Turvallisuus (engl. security) kattaa sitten erilaiset tiedon suojaukseen ja salaukseen liittyvät seikat.

Sovelluksen odotuksia ja verkon tarjoamia palveluja voidaan kuvata numeerisesti palvelulaatu-termin (engl. quality of service, QoS) avulla. Pakettikytkentäisen verkon palvelunlaatuun liittyy useita erilaisia numeerisia arvoja, kuten suurin sallittu paketin koko (engl. maximum packet size), siirtonopeuden keskiarvo (engl. mean transfer rate), virhetaajuuden keskiarvo (engl. mean error rate), paketin siirron keston keskiarvo (engl. mean packet transfer delay),  siirtoviive (engl. transmission delay) ja pahin mahdollinen vaihtelu (engl. worst-case jitter).

Vaihtelu (engl- jitter) on varmasti useimmille terminä outo. Englanninkielen termi jitter (wikipedia https://fi.wikipedia.org/wiki/Jitter) on valitettavan monitulkintainen ja sillä on paljon erilaisia suomenkielisiä vastineita. Käytän tässä vaihtelua, koska kyse on siitä, kuinka paljon kahden eri viestin siirtoajoissa voi olla vaihtelua keskenään. Jos kaikki paketit kulkevat saman ajan, niin vaihtelua ei ole. Jos pakettien siirtoajoissa on suuria eroja, niin myös vaihtelu on suurta. Tilastotieteessä käytettävä termit hajonta ja varianssi kuvaavat hiukan samaa ilmiötä, mutta satunnaismuuttujien arvojen vaihtelulle.

Sovelluksen tarpeet yhteyden laadulle liittyvät nimenomaan sovelluksen oman kommunikoinnin ominaisuuksiin. Sovellus saattaa tarvita tietyn siirtonopeuden tason, jotta tarvittavat sovelluksen tiedot saadaan riittävän nopeasti siirrettyä lähettäjältä vastaanottajalle. Taso voidaan määritellä joko kiinteänä minimitasona tai minimikeskiarvona, jolloin sovellus sietää jonkun verran vaihtelua eri pakettien siirtoajoille. Sovellus saattaa myös asettaa ylärajoja erilaisille viiveille ja siirtoaikojen vaihtelulle. Näiden avulla sovellus pyrkii turvaamaan oman toimintansa laadun. Esimerkiksi videota siirtävä sovellus tarvitsee riittävän siirtonopeuden ja rajoitetut viiveet, jotta videokuva näkyisi vastaanottajalla nykimättä.

XXXXXX:  Tehtäviä näihin palvelutasoihin ja vaatimuksiin liittyen!!!



## Liikenteen analysointi

Tietoliikennettä ja sen protokollien toimintaa voi seurata useilla erilaisissa analysointiohjelmilla. Niiden avulla voi kuunnella tietoliikenneverkossa kulkevia paketteja. Tällainen verkkoliikenteen seuranta ei kaikissa tilanteissa ole laillista, joten sitä ei pidä noin vain kokeilla missä vaan. Rikosoikeudellinen vastuu ja korvausvastuu on aina liikennettä seuraavalla henkilöllä, joten verkon käyttösäännöt pitää tuntea ennenkuin edes lähtee kokeilemaan liikenteen kuuntelua. Kuunnellun liikenteen voi myös tallettaa myöhempää analysointia varten. Tällaisesta pakettien tallettamista kutsutaan englanniksi capture ja suomeksi usein käytetään liikenteen kaappamista tai sieppaamista. Tällaista toimintaa tekevät sekä hyvikset että pahikset. Kumpaan joukkoo liikenteen analysoija milläkin hetkellä kuuluu voi riippua näkökulmasta. Verkon ylläpitäjällä on oikeus seurata verkon liikennettä, jos näin on käyttösäännöissä sovittu. Toisaalta verkon käyttäjä ei varmaankaan toivo oman arkaluontoisen viestittelynsä näkyvän edes ylläpitäjälle.

Viestien salaus on ainoa tällä hetkellä tunnettu keino estää muista seuraamasta omien viestien sisältöjä ja silloinkin liikenteen seuraajalla on käytettävissään erilaisia keinoja liikenteen analysointiin.

Tietoliikenteen seuraamiseen on saatavilla valmiita ohjelmia. Wireshark on avoimen lähdekoodin ohjelma, joka on laajasti käytetty. Ohjelman voi ladata wiresharkin [omilta sivuilta](https://www.wireshark.org/). Sille on myös saatavilla paljon valmiita analysoitavia tiedostoja, jolloin voimme välttää todellisen tietoliikenteen kuuntelun tällä kurssilla kokonaan.

Wireshark on erittäin monipuolinen ja tarjoaa paljon vaihtoehtoja tietoliikenteen analysointiin. Tällä kursilla käytämme hyvin pientä osaa sen piirteistä ja tarkastelemme vain muutamaa valmista aineistoa.



ZZZZZZZZ KESKEN!!!!!  ZZZZZZZZZ

Suosittelen ohjelman käyttöä ja noiden valmiiden aineistojen tarkastelua. Osa harjoitustehtävistäkin perustuu niihin. Esimerkiksi HTTP protokollaan liittyy tiedosto xxx.pcap. Kun avaamme tämän tiedoston wiresharkilla, niin ….





<quiz id="333846bf-2099-4aca-89e7-1a313babf7a5"></quiz>




**up**

