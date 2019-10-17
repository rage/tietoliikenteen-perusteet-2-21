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

Perinteisesti internetin protokollapinon sovelluskerros on ollut verkkosovellusten oma asia ja niiden rajapinta tietoliikenteeseen on ollut kuljetuskerroksen tarjoamat palvelut, joita sovelluskerroksen prosessi on saanut käyttöjärjestelmältä erityisten pistokkeiden (engl. socket) kautta.

Nykyään yhä useammat verkkopalvelut on toteutettu verkkoselaimen ja www-palvelun kautta. Tällöin käyttäjän koneessa ei sovelluksella ole enää omaa erillistä prosessia, vaan sitä suoritetaan selainprosessilla ja verkkosivujen kuvausten kautta. Tällaiset websovellukset on usein toteutettu javascript-kielellä ja niillä on omat erilliset toteutusrajapintansa.  Internetin protokollapinossa ne 'piiloutuvat' sovelluskerrokselle. Tällaisen www-palvelun päällä toimivat websovelluksen tietoliikenne tapahtuu HTTP-protokollalla, kuten selaimen ja www-palvelimen välinen liikenne normaalistikin tapahtuu. Selain siis noutaa tällaisen selaimessa suoritettavan verkkosivun www-palvelimelta ja tarvittavat viestien vaihdot selaimessa toimivan asiakasosan ja palvelimella toimivan palvelinsovelluksen välillä tapahtuu HTTP-viesteinä. Jos tämä teema kiinnostaa, niin silloin kannatta seuraavaksi suunnata kurssille [web-palvelinohjelmointi](https://courses.helsinki.fi/fi/tkt21007) , jossa opit nimenomaan tekemään sovelluksia web-ympäristössä.

**HUOM: AJAX, JSON, REST - tarvitseeko käsitteet kertoa vai riittääkö, että asia tulee esiin tuolla web-palvelinohjelmointikurssilla!**

Tällä kurssilla tutustutaan hiukan tarkemmin pistokkeisiin ja niiden käyttöön. Varsinaista verkko-ohjelmointia emme tällä kurssilla kuitenkaan tee. Helsingin yliopiston tutkinto-opiskelijat voivat osallistua valinnaiselle kurssille [Network Programming] (https://courses.helsinki.fi/fi/tkt21026), jossa opiskellaan verkkosovellusten tekoa nimenomaan tämän rajapinnan kanssa.


## Pistokkeet





wiki https://fi.wikipedia.org/wiki/Pistoke_(tietotekniikka)  - ei juurikaan tietoa.

