---
path: '/osa-2/4-verkko-ohjelmointi-rajapinta'
title: 'Verkko-ohjelmointi ja sovelluksen rajapinta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät millaisia rapapintoja verkkosovellukse käyttävät.
- Osaat kertoa mikä on pistoke ja kuvata yleisellä tasolla miten sitä käytetään.

</text-box>

Pistoke, KJ palvelut, 

## Verkkosovelluksen rajapinta

Perinteisesti internetin protokollapinon sovelluskerroksella on ollut erilaisia verkkosovelluksia, jotka ovat käyttäneet suoraan kuljetuskerroksen tarjoamia palveluja. Nämä palvelut ovat muodostaneet sovelluksen tietoliikennerajapinnan ja sovelluskerroksen prosessi on saanut ne käyttöjärjestelmältä erityisten pistokkeiden (engl. socket) kautta.

Nykyään yhä useammat verkkosovellukset on toteutettu sovelluskerroksella siten, että ne käyttävät kuljetuskerroksen TCP-protokollan sijaan sovelluskerroksen HTTP-protokollaa omien viestiensä kuljetuspalveluaa. Osa tällaisista verkkopalveluista verkkoselaimessa. Tällöin käyttäjän koneessa ei sovelluksella ole enää omaa erillistä prosessia, vaan sitä suoritetaan selainprosessilla ja verkkosivujen kuvausten kautta. Tällaisilla websovelluksilla on omat erilliset toteutusrajapintansa, kuten Javascript, AJAX, jSON, REST, jne.  Internetin protokollapinossa ne 'piiloutuvat' sovelluskerrokselle. Tällaisen www-palvelun päällä toimivat websovelluksen tietoliikenne tapahtuu HTTP-protokollalla, kuten selaimen ja www-palvelimen välinen liikenne normaalistikin tapahtuu. Selain siis noutaa tällaisen selaimessa suoritettavan 'verkkosivun' www-palvelimelta ja tarvittavat viestien vaihdot selaimessa toimivan asiakasosan ja palvelimella toimivan palvelinsovelluksen välillä tapahtuu HTTP-viesteinä. Jos tämä teema kiinnostaa, niin silloin kannatta seuraavaksi suunnata kurssille [web-palvelinohjelmointi](https://courses.helsinki.fi/fi/tkt21007) , jossa opit nimenomaan tekemään sovelluksia web-ympäristössä.

Tällä kurssilla tutustutaan nimenomaan kuljetuskerroksen tarjoamien palvelujen käyttöön pistokkeilla. Varsinaista verkko-ohjelmointia emme tällä kurssilla opettele. Helsingin yliopiston tutkinto-opiskelijat voivat osallistua valinnaiselle kurssille [Network Programming] (https://courses.helsinki.fi/fi/tkt21026), jossa opiskellaan verkkosovellusten tekoa pistokkeita käyttäen.

Huomaa, että valitaanpa verkkosovelluksen tietoliikennerajapinnaksi sovelluskerroksen HTTP tai kuljetuskerroksen TCP tai UDP, verkkosovellukset osia suoritetaan vain verkkon reunoilla olevissa päätelaitteissa, kuten käyttäjän tietokone ja palvelinkeskusten palvelimet. Verkkosovelluksen ohjelmoijan pitääkin kirjoittaa ohjelmakoodi vain näille laitteille. Verkon syövereissä olevissa laitteissa ei ole sovelluskerrosta, joten ne eivät voi verkkosovelluksen osia suorittaa, eikä niiden toiminta muutu sovelluksen vaihtuessa.

KUVA: Jotain kuten kirjan peruskuva, joka kaikissa kalvoissa.

## Pistokkeet

Verkkosovellusta koneella edustava prosessi käyttää kuljetuskerroksen palveluja pistokkeiden kautta. Pistoketta voi ajatella ovena tai postilaatikkona, jonka kautta sovellusprosessi lähettää ja vastaanottaa viestejä. Sovelluksen ei tarvitse tietää, miten viesti kulkee verkkosovelluksen prosessien välillä ovelta toiselle tai postilaatikosta toiseen. Lähettäjän täytyy vain luottaa, että 'oven' takana oleva kuljetuspalvelu toimittaa viestin perille.

Ohjelmoijan ja sovellusohjelman näkokulmasta pistokkeen käyttö muistuttaa tiedoston käyttöä, sinne kirjoitetaan ja sieltä luetaan. Pistokkeiden kanssa tosin käytetään termejä lähettää (engl. send) ja vastaanottaa (eng. receive).

Pistokkeita voidaan käyttää prosessien välisessä kommunikoinnnissa myös samassa tietokoneessa. Pistokkeiden toteutuksessa mikään ei vaadi, että viestit on aina välitettävä koneesta toiseen. Ne voidaan hyvin välittää prosessilta toiselle samassa koneessa.

KUVA:  Vanha pistokekuva kalvoista 2017, lulento 3, kalvo 12.

Tarkastellaan nyt pistoketta käyttöjärjestelmän näkökulmasta eli mitä tapahtuu, kun prosessi haluaa lähettää dataa.
1) Prosessi pyytää kuljetuspalvelua KJ:n palvelupyynnöllä send (kirjastofunktio)
2) Kuljetuskerros hoitaa omat tehtävänsä ja kutsuu verkkokerroksen rutiinia
3) Verkkokerros tekee hommansa ja kutsuu laiteajurin rutiinia
4) Laiteajuri vie datan ja komennot verkkokortin ohjaimen rekistereihin
5) Verkkokortti siirtää bitit linkille (linkkikerros ja fyysinen siirto)

Lähettäminen on ajallisesti yksinkertaisempaa, koska sovellus päättää, koska lähetetään ja kutsuu kirjastorutiinia, joka sitten käyttöjärjestelmän toimintoina huolehtii tuosta lähettämisestä. Viestiä ei välttämättä pystytä heti laittamaan eteenpäin, vaan se laitetaan ensin lähetyspuskuriin (engl. snd buffer), josta viesti sitten lähetetään, kun verkossa on tilaa.

Vastaanottaminen on haastellisempaa, koska sovellus tekee vastaanottopyynnön (receive) silloin, kun se sovelluksen oman toiminnan kannalta on tarpeellista. Tämä ei ajallisesti ole mitenkään sidottu varsinaiseen viestin saapumiseen. Vastaanottava kone (tai prosessi) ei voi vaikuttaa viestin saapumisen ajankohtaan tai saapuvan viestin kokoon. Sen pitää ottaa viesti vastaan silloin, kun se on verkkoyhteydeltä tulossa.  Viesti siis vastaanotetaan ensin vastaanottopuskuriin (engl. receive buffer), josta se voidaan antaa sovellukselle silloin, kun sovellus sitä pyytää.

Viestin vastaanotto vaiheittain:
1) Verkkokortti ottaa vastaa linkiltä tulevat bitit (fyysinen siirto ja linkkikerros)  
2) ...ja  aiheuttaa keskeytyksen.
3) KJ:n laiteajuri siirtää bitit verkkokortilta keskusmuistiin
4) Ajuri kutsuu verkkokerroksen rutiinia, joka suorittaa omat toimintonsa
5) Verkkokerros kutsuu kuljetuskerroksen rutiinia, joka tekee omat toimensa
6) Sanoma prosessille vasta, kun se sitä pyytää palvelupyynnöllä receive

Sovellus voi pistokkeen avaamisen yhteydessä määritellä, haluaako se receive-pyynnön yhteydessä jäädä odottamaan viestiä vai ei (engl. blocking vs. non-blocking). 



wiki https://fi.wikipedia.org/wiki/Pistoke_(tietotekniikka)  - ei juurikaan tietoa.

