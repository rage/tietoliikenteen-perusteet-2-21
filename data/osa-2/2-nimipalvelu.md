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

KUVA: Hierarkiasta

Juurinimipalvelijoita on itseasiassa useita, koska yksi juurinimipalvelija ei millään ehtisi palvella kaikkia kyselijöitä. Juurinimipalvelijat on nimetty kirjaimilla a-m. Niillä on siis 13 eri kirjainta. Jokaista eri kirjaimella nimettyä juurinimipalvelijaa hallinnoi eri organisaatio.  Näistä jokaisesta on vielä useita täydellisiä kopioita ympäri maailmaa. Verkkosivulla https://root-servers.org/ on kuvattuna kaikki tämän hetkiset nimipalvelijoiden ja niiden kopioiden sijainnit. Sen mukaan lokakuussa 2o19 Suomessa oli 8 nimipalvelijaa.

Quizz:  Millä paikkakunnilla, mitä kirjaimia


## DNS tietue ja viesti

Nimipalvelijoilla tiedot tallennetaan DNS tietuina (engl. DNS record). Tietueessa on aina neljä kenttää (nimi, arvo, tyyppi ja elinaika).

Yleisimmät tyypit ovat:
Tyyppi = A  (host address)
       nimi = koneen nimi,  arvo = IP-osoite  (Ipv4)
       esim: (relay1.bar.foo.com, 145.37.3.126, A, TTL)
Tyyppi = NS (name server)
       nimi = aluenimi (domain), arvo = autorisoidun palvelimen nimi
       esim: (foo.com, ds.foo.com, NS, TTL)
Tyyppi = CNAME (canonical name)
       nimi = koneen aliasnimi, arvo=  kanoninen, oikea konenimi
       esim: (foo.com, relay1.bar.foo.com, CNAME, TTL)
Tyyppi = MX (mail exchange)
       nimi = koneen aliasnimi, arvo = postipalvelimen kanoninen nimi
       esim: (foo.com, mail.bar.com, MX,TTL)
Tyyppi = AAAA (host address)
       nimi = koneen nimi,  arvo = IP-osoite  (Ipv6)
       esim: (relay1.bar.foo.com,    , A, TTL)
       
       
Esimerkki  A-tietueesta ja MX-tietueesta. Muut voi jättää wikipedian ja muiden materiaalien varaan.

Nimipalvelukyselyn ja vastauksen käyttämät viestit ovat rakenteeltaan samanlaisia, joten nimipalvelulssa siirretään vain yhdenlaisia viestejä. Viestissä on erikseen kenttä, jolla lähettäjä kertoo onko kysymyksessä kysely vai vastaus.



## DNS Kysely


## DNS

Protokollan sisäinen toiminta ja nimipalveluorganisaatio huolellisesti.  Korosta tuotan asiakaan omaan nimipalvelijaa (engl. DNS resolver), joka ei ole osa virallisten nimipalvelijoiden hierarkiaa.

Kuva: https://fi.wikipedia.org/wiki/DNS#/media/Tiedosto:DNS.png

HTTP,  SMTP  ja DNS



Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", "Laske lukujen keskiarvo",  "Lue käyttäjältä syötettä kunnes", "Montako lukua käyttäjä on syöttänyt.", jne.

Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja.


## DNSSEC

https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/nimipalvelun-tietoturvalaajennus-dnssec
