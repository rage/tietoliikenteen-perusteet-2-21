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

Meillä on käytössä useita erilaisia nimipalvelijoita. Paikallinen nimipalvelija (engl. local name server) vastaanottajaa käyttäjän koneelta nimipalvelupyynnön ja ratkaisee sen. Tämän ratkaisija-roolin vuoksi näitä kutsutaan myös englanninkielestä johdetulla nimellä resolveri. Viralliseen nimipalvelijahierarkiaan, niin sanottuihin autorisoituihin nimipalvelijoihin, kuuluvat juurinimipalvelijat, ylätason nimipalvelijat ja alimmalla tasolla autoritääriset nimipalvelijat (engl. authoritative DNS server). Nämä viralliset nimipalvelijat lähinnä säilyttävät tietoa. Paikalliset nimipalvelijat kysyvät virallisilta nimipalvelijoilta tietoja silloin, kun ne ratkovat käyttäjältä tullutta nimipalvelukyselyä.

Tyypillisesti käyttäjän oma ISP palveluntarjoaja tarjoaa myös paikallisen nimipalvelijan asiakkaidensa käyttöön. Näitä kyselyjä ratkovia nimipalvelijoita tarjoavat myös muut. Jokaisella on myös mahdollisuus ottaa käyttöön oma paikallinen nimipalvelija ja ryhtyä tarjoamaan nimipalvelua joko vain omille koneille tai jopa avoimesti muillekin.

Asiakaskone saa nimipalvelijan osoitteen tyypillisesti DHCP-palvelijalta samalla, kun kone saa oman IP-osoitteen liikennöintiä varten. Toki nimipalvelijan osoitteen voisi asettaa koneen konfiguraatiotiedostoihin myös käsin, mutta näin ei yleensä enää kukaan toimi ellei halua varta vasten käyttää jotain muuta kuin palveluntarjoajan paikallista nimipalvelijaa.

Nimipalveluhierarkia on kolmitasoinen puurakenne, jossa juurinimipalvelin on puun juuri ja sen

KUVA: Hierarkiasta

Juurinimipalvelijoita on itseasiassa useita, koska yksi juurinimipalvelija ei millään ehtisi palvella kaikkia kyselijöitä. Juurinimipalvelijat on nimetty kirjaimilla a-m. Niillä on siis 13 eri kirjainta. Jokaista eri kirjaimella nimettyä juurinimipalvelijaa hallinnoi eri organisaatio.  Näistä jokaisesta on vielä useita täydellisiä kopioita ympäri maailmaa. Verkkosivulla https://root-servers.org/ on kuvattuna kaikki tämän hetkiset nimipalvelijoiden ja niiden kopioiden sijainnit. Sen mukaan lokakuussa 2o19 Suomessa oli 8 nimipalvelijaa.

Quizz:  Millä paikkakunnilla, mitä kirjaimia


## DNS tietue ja viesti

Nimipalvelijoilla tiedot tallennetaan DNS:n resurssitietuina (engl. resource record, RR). Tietueessa on aina neljä kenttää (nimi, arvo, tyyppi ja elinaika).

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

Quizz:  Dig tehtävä, jossa selvitetään jonkun kohteen A-tietueen ja MX-tietueen sisältö

Nimipalvelussa on vain yksi viestirakenne, jota käytetään sekä kyselyissä että vastauksissa. Viestissä on erikseen lipuke (engl. flag), jolla lähettäjä kertoo, onko kysymyksessä kysely vai vastaus. Viestin otsakkeet eri kenttien täsmällisen määrittelyn voi käydä lukemassa alkuperäisesti nimipalvelun toiminnan kuvaavasta RFC dokumentista https://tools.ietf.org/html/rfc1035. Otsakkeen kentät on kuvattu kyseisen dokumentin sivulla 25.

Oheisessa kuvassa, joka on peräisin wikibooksista on kuvattuna viestin rakenne hiukan tarkemmin. Rakennekuvauksesta käy ilmi, että otsaketietoja viestissä on kaikkiaan 12 tavua. Niitä seuraa kysymysosio, jossa voi olla useita kysymyksiä selvitettäväksi. Kysymysten (ja muidenkin osien kenttien) lukumäärä on kerrottava otsaketiedoissa, jotta vastaanottaja osaa tulkita saamansa tavujonon oikein. Yleensä kysymykse viestissa vastauskentät ovat tyhjiä. 

Yksittäinen solmu voi tehdä useita nimipalvelukyselyjä ilman, että se on vielä saanut vastausta edelliseen.  Kyselyviestissä on viestin tunniste, jolla kysymys ja aikanaan saapuva vastaus voidaan yhdistää. Kyselyyn vastaava nimipalvelija laittaa siis saman kyselyn tunnisteen mukaan omaan vastausviestiinsä.


Kuva viestistä: https://en.wikibooks.org/wiki/Communication_Networks/DNS#/media/File:Dns_message.jpg

Vastauksessa on myös mukana lipukkeena tieto siitä, tuleeko vastaus suoraan nimipalveluhierarkiaan kuuluvalta autorisoidulta nimipalvelijalta vai ei.


Quizz: kysymyksi viestin rakenteesta


## DNS toiminta


Käyttäjän asiakaskoneen tekemiin nimipalvelukyselyihin vastaavat tyypillisesti paikalliset nimipalvelijat (ns. resolverit), jotka eivät ole autorisoituja. 

Oheisessa kuvassa on kuvattuna tyypillisen nimipalvelukyselyn vaiheet ja siihen liittyvät koneet.

Kuva: https://fi.wikipedia.org/wiki/DNS#/media/Tiedosto:DNS.png

Käyttäjän tietokone, tai oikeammin sen nimipalvelua käyttävä ohjelmakirjasto, tekee nimipalvelukyselyn paikalliselle nimipalvelijalla, joka kuvassa on nimetty asiakasnimipalvelija. Se ratkoo nimipalvelukyselyn käyttäjän puolesta ja palauttaa aikanaan vastauksen käyttäjän tietokoneelle. Paikallinen nimipalvelija tekee kyselyjä nimipalveluhierarkian koneille vaiheittain ja näin se saa vähitellen vastauksen kyselyyn.

Koska kaikiin nimipalvelun resurssitietueisiin on liitetty niiden elinaika, niin paikallinen nimipalvelija voi säiyttää saamiaan tietuita sen aikaa, kun niiden tiedetään olevan käytettävissä. Tällaista tilapäistä säilyttämistä omassa 'muistissa' kutsutaan  välimuistiksi (engl. cache). Sitä käytetään monessa muussakin tilanteessa sekä laitteistossa että ohjelmistoissa, kun yritetään välttää saman hitaan asian tekemistä toistamiseen. Välimuisteja on jo käsitelty tietokoneen toiminta -kursseilla ja niitä tulee vastaan myös myöhemmillä kursseilla.

Jos siis kysytty tieto on välimuistissa, niin se välitetään samantien kysyjälle vastauksena, eikä paikallinen nimipalvelija tee muuta.

Jos mitään kysyttyyn tietoon liittyviä resurssitietueita ei ole paikallisen nimipalvelijan välimuistissa, niin paikallinen nimpalvelija selvittää vastauksen kyselyyn aloittamalla selvittämien aina jostakin juurisolmusta.


## DNS





HTTP,  SMTP  ja DNS



Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", "Laske lukujen keskiarvo",  "Lue käyttäjältä syötettä kunnes", "Montako lukua käyttäjä on syöttänyt.", jne.

Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja.


## DNSSEC

https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/nimipalvelun-tietoturvalaajennus-dnssec
