---
path: '/osa-2/2-nimipalvelu'
title: 'Nimipalvelu'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata, mihin nimipalvelua käytetään ja mitä tietoja sen tietueissa on
- osaat kertoa, mihin DNS protokollaa käytetään
- osaat sanallisesti kertoa, miten nimeä vastaava IP-osoite löydetään

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>


## Nimipalvelu DNS

Nimipalvelu (engl. Domain Name Service, DNS) tarjoaa internetin muille sovelluksille mahdollisuuden selvittää tiettyä verkkonimiä vastaavan IP-numero tai päinvastoin. Stiä kutsutaankin usein internetin puhelinluetteloksi. Aiemmalla kurssillä käytimme jo nimipalvelua tässä tehtävässä. Nyt tarkastellaan miten palvelu toimii.

Meillä on käytössä useita erilaisia nimipalvelijoita. Paikallinen nimipalvelija (engl. local name server) vastaanottajaa käyttäjän koneelta nimipalvelupyynnön ja ratkaisee sen. Tämän ratkaisija-roolin vuoksi näitä kutsutaan myös englanninkielestä johdetulla nimellä resolveri. Viralliseen nimipalvelijahierarkiaan kuuluvat juurinimipalvelijat, ylätason nimipalvelijat ja alimmalla tasolla autoritääriset nimipalvelijat (engl. authoritative DNS server). Nämä viralliset nimipalvelijat lähinnä säilyttävät tietoa. Paikalliset nimipalvelijat kysyvät virallisilta nimipalvelijoilta tietoja silloin, kun ne ratkovat käyttäjältä tullutta nimipalvelukyselyä.

Tyypillisesti käyttäjän oma ISP palveluntarjoaja tarjoaa myös paikallisen nimipalvelijan asiakkaidensa käyttöön. Näitä kyselyjä ratkovia nimipalvelijoita tarjoavat myös muut. Jokaisella on myös mahdollisuus ottaa käyttöön oma paikallinen nimipalvelija ja ryhtyä tarjoamaan nimipalvelua joko vain omille koneille tai jopa avoimesti muillekin.

Asiakaskone saa nimipalvelijan osoitteen tyypillisesti DHCP-palvelijalta samalla, kun kone saa oman IP-osoitteen liikennöintiä varten. Toki nimipalvelijan osoitteen voisi asettaa koneen konfiguraatiotiedostoihin myös käsin, mutta näin ei yleensä enää kukaan toimi ellei halua varta vasten käyttää jotain muuta kuin palveluntarjoajan paikallista nimipalvelijaa.

Nimipalveluhierarkia on kolmitasoinen puurakenne, jossa juurinimipalvelin on puun juuri ja sen

KUVA:


Kuva: https://fi.wikipedia.org/wiki/DNS#/media/Tiedosto:DNS.png

## DNS

Protokollan sisäinen toiminta ja nimipalveluorganisaatio huolellisesti.  Korosta tuotan asiakaan omaan nimipalvelijaa (engl. DNS resolver), joka ei ole osa virallisten nimipalvelijoiden hierarkiaa.

HTTP,  SMTP  ja DNS



Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", "Laske lukujen keskiarvo",  "Lue käyttäjältä syötettä kunnes", "Montako lukua käyttäjä on syöttänyt.", jne.

Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja.


## DNSSEC

https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/nimipalvelun-tietoturvalaajennus-dnssec
