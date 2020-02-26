---
path: '/osa-2/3-nimipalvelu'
title: 'Nimipalvelu'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata, mihin nimipalvelua käytetään ja mitä tietoja sen tietueissa on
- Osaat kertoa, mihin DNS-protokollaa käytetään
- Osaat sanallisesti kertoa, miten nimeä vastaava IP-osoite löydetään

</text-box>




## Nimipalvelu DNS

Nimipalvelu (engl. Domain Name Service, DNS) tarjoaa internetin muille sovelluksille mahdollisuuden selvittää tiettyä verkkonimiä vastaavan IP-numero tai päinvastoin. Sitä kutsutaankin usein internetin puhelinluetteloksi. Aiemmalla kurssilla käytimme jo nimipalvelua tässä tehtävässä. Nyt tarkastelemme, miten palvelu toimii.

Meillä on käytössä useita erilaisia nimipalvelijoita. Paikallinen nimipalvelija (engl. local name server) vastaanottajaa käyttäjän koneelta nimipalvelupyynnön ja ratkaisee sen. Tämän ratkaisija-roolin vuoksi näitä kutsutaan myös englanninkielestä johdetulla nimellä resolveri. Viralliseen nimipalvelijahierarkiaan, niin sanottuihin autorisoituihin nimipalvelijoihin, kuuluvat juurinimipalvelijat, ylätason nimipalvelijat ja alimmalla tasolla autoritääriset nimipalvelijat (engl. authoritative DNS server), joita kutsutaan myös aluepalvelijoiksi. Nämä viralliset nimipalvelijat lähinnä säilyttävät tietoa. Paikalliset nimipalvelijat kysyvät virallisilta nimipalvelijoilta tietoja silloin, kun ne ratkovat käyttäjältä tullutta nimipalvelukyselyä.

Tyypillisesti käyttäjän oma internet-palveluntarjoaja tarjoaa myös paikallisen nimipalvelijan asiakkaidensa käyttöön. Näitä kyselyjä ratkovia nimipalvelijoita tarjoavat myös muut. Jokaisella on myös mahdollisuus ottaa käyttöön oma paikallinen nimipalvelija ja ryhtyä tarjoamaan nimipalvelua joko vain omille koneille tai jopa avoimesti muillekin.

Asiakaskone saa nimipalvelijan osoitteen tyypillisesti DHCP-palvelijalta samalla, kun kone saa oman IP-osoitteen liikennöintiä varten. Toki nimipalvelijan osoitteen voisi asettaa koneen konfiguraatiotiedostoihin myös käsin, mutta näin ei yleensä enää kukaan toimi ellei halua varta vasten käyttää jotain muuta kuin palveluntarjoajan paikallista nimipalvelijaa.

Nimipalveluhierarkia on kolmitasoinen puurakenne, jossa juurinimipalvelin on puun juuri ja sen (TODO)

KUVA: Hierarkiasta

Juurinimipalvelijoita on itse asiassa useita, koska yksi juurinimipalvelija ei millään ehtisi palvella kaikkia kyselijöitä. Juurinimipalvelijat on nimetty kirjaimilla a-m. Niiden tarkempi osoite on esi. e.root-servers.orgNiillä on siis 13 eri kirjainta. Jokaista eri kirjaimella nimettyä juurinimipalvelijaa hallinnoi eri organisaatio.  Näistä jokaisesta on useita täydellisiä kopioita ympäri maailmaa. Verkkosivulla https://root-servers.org/ on kuvattuna kaikki tämän hetkiset nimipalvelijoiden ja niiden kopioiden sijainnit. Sen mukaan lokakuussa 2019 Suomessa oli 8 juurinimipalvelijoiden kopiota. Nyt maaliskuussa 2020 niitä on 10.

<quiz id="a1db1c19-80e3-4ffd-857c-d5f53a021dc8"></quiz>

Juurinimipalvelijat tietävät niiden alapuolella olevien ylätason palvelijoiden tiedot. Ylätason nimipalvelimet (kuten a.fi, dns2.nic.uk tai f.ns.se) tuntevat oman alueensa (kuten .fi tai .se) osoitteiden autoritääsiset aluepalvelimet (esim. helsinki.fi -alueesta vastaavat nimipalvelijat). Ylätason osoitteet olivat alunperin lähinnä maatunnuksia, mutta nykyisin myös yrityksillä ja erilaisilla organisaatiolla on omia ylätason tunnuksia. Kuten varmaan jo huomasitkin, niin jokainen organisaatio voi vapaasti ja itsenäisesti nimetä omat laitteensa ja palvelimensa täysin vapaasti. Vain juurinimipalvelijoiden nimet on sovittu. Muilla tasoilla ei ole maailmanlaajuisesti sovittuja nimikäytöntöjä.


## DNS tietue ja viesti

Nimipalvelijoilla tiedot tallennetaan DNS:n resurssitietueina (engl. resource record, RR). Tietueessa on aina neljä kenttää (nimi, arvo, tyyppi ja elinaika). Nämä resurssitietueen muodostavat kyseisen nimipalveluhierarkiaan kuuluva autoritäärisen nimipalvelijan tietokannan. Huomaa, että resurssitietueen tyyppi määrittä miten nimi ja arvo kentät pitää tulkita

Yleisimmät tyypit ovat:
* Tyyppi = A  (host address); nimi = koneen nimi,  arvo = IP-osoite  (Ipv4);  esim: (relay1.bar.foo.com, 145.37.3.126, A, TTL)
* Tyyppi = NS (name server);      nimi = aluenimi (domain), arvo = autoritäärisen palvelimen nimi;  esim: (foo.com, ds.foo.com, NS, TTL)
* Tyyppi = CNAME (canonical name);  nimi = koneen aliasnimi, arvo= kanoninen nimi eli oikea koneen nimi;  esim: (foo.com, relay1.bar.foo.com, CNAME, TTL)
* Tyyppi = MX (mail exchange);  nimi = koneen aliasnimi, arvo = postipalvelimen kanoninen nimi; esim: (foo.com, mail.bar.com, MX,TTL)
* Tyyppi = AAAA (host address);  nimi = koneen nimi,  arvo = IP-osoite  (Ipv6);  esim: (relay1.bar.foo.com,  ipv6  , A, TTL)
(TODO fix formatting)

Näistä tyypeistä tuo kanoninen nimi (CNAME) vaatii ehkä pienen lisäselityksen. Sen avulla voimme nimipalvelussa määritellä jonkun nimen, kuten www.helsinki.fi, mutta nimellä ei olekaan suoraan vastaavaa IP-osoitetta, vaan kyseiseen nimeen liittyy joku toinen nimi, kuten adc-vip3.it.helsinki.fi. Tälle nimelle löytyy sitten A tai AAAA tietue, jossa on ko. nimeen liittyvä IP-osoite. 

Nimipalvelussa on vain yksi viestirakenne, jota käytetään sekä kyselyissä että vastauksissa. Viestissä on erikseen lipuke (engl. flag), jolla lähettäjä kertoo, onko kysymyksessä kysely vai vastaus. Käy lukemassa viestin otsakkeet ja eri kenttien täsmällinen määrittely alkuperäisesti englanninkielisestä nimipalvelun toiminnan kuvaavasta RFC-dokumentista https://tools.ietf.org/html/rfc1035. Otsakkeen kentät on kuvattu kyseisen dokumentin sivulla 25.

<quiz id="b0fb5330-8cef-48ef-a33a-e9f3ec18c681"></quiz>

Oheisessa kuvassa, joka on peräisin wikibooksista, on kuvattuna koko viestin rakenne, eikä vai otsaketta. Rakennekuvauksesta käy ilmi, että otsaketietoja viestissä on kaikkiaan 12 tavua. Niitä seuraa kysymysosio, jossa voi olla useita kysymyksiä selvitettäväksi. Kysymysosan ja muiden osien tietuiden lukumäärä on kerrottava otsaketiedoissa, jotta vastaanottaja osaa tulkita saamansa tavujonon oikein. Yleensä kysymyksen viestissä vastauskentät ovat tyhjiä.

Kuva viestistä: https://en.wikibooks.org/wiki/Communication_Networks/DNS#/media/File:Dns_message.jpg

Yksittäinen solmu voi tehdä useita nimipalvelukyselyjä ilman, että se on vielä saanut vastausta edelliseen.  Kyselyviestissä on viestin tunniste, jolla kysymys ja aikanaan saapuva vastaus voidaan yhdistää. Kyselyyn vastaava nimipalvelija laittaa kyselyssä saamansa tunnisteen mukaan omaan vastausviestiinsä.

Vastauksessa on myös mukana lipukkeena tieto siitä, tuleeko vastaus suoraan nimipalveluhierarkiaan kuuluvalta autorisoidulta nimipalvelijalta vai ei.

Nimipalvelutietoja voi kysellä nslookup tai dig -komennoilla. Linuxin komentotulkissa (engl. terminal, command) voit käyttää näitä komenoja suoraan. Sen sijaan windowsin komentotulkissa (engl. command prompt) on käytettävissä näistä vain nslookup. Dig on näistä kahdesta huomattavasti monipuolisempi. Sivulla https://linux.die.net/man/1/dig on sen toiminnan tarkka kuvaus. Nykyään myös verkosta löytyy useita www-palveluja, jotka tarjoavat nämä komennot käyttäjille. Esimerkiksi ping.eu tarjoaa nslookup -komennon sivulla https://ping.eu/nslookup/. Yksinkertainen rajapinta dog-komennolle on esimerkiksi sivulla https://toolbox.googleapps.com/apps/dig/.

Quizz:  Dig tehtävä, jossa selvitetään jonkun kohteen A-tietueen ja MX-tietueen sisältö

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>



## DNS toiminta


Käyttäjän asiakaskoneen tekemiin nimipalvelukyselyihin vastaavat tyypillisesti paikalliset nimipalvelijat (ns. resolverit), jotka eivät ole autoritäärisiä.

Oheisessa kuvassa on kuvattuna tyypillisen nimipalvelukyselyn vaiheet ja siihen liittyvät koneet. Seuraavaksi käydään paikallisen nimipalvelijan toimintaa läpi kuvan esimerkin valossa. Kuvassahan haetaan www.firma.fi nimeä vastaavaa IP-osoitetta.

Kuva: https://fi.wikipedia.org/wiki/DNS#/media/Tiedosto:DNS.png

Käyttäjän tietokone, tai oikeammin sen nimipalvelua käyttävä ohjelmakirjasto aloittaa toiminnon, kun se tekee nimipalvelukyselyn paikalliselle nimipalvelijalla, joka kuvassa on nimetty asiakasnimipalvelija. Nimipalvelija ratkoo nimipalvelukyselyn käyttäjän puolesta ja palauttaa aikanaan vastauksen käyttäjän tietokoneelle. Paikallinen nimipalvelija tekee kyselyjä nimipalveluhierarkian koneille vaiheittain ja näin se saa vähitellen vastauksen kyselyyn.

Koska kaikkiin nimipalvelun resurssitietueisiin on liitetty niiden elinaika, niin paikallinen nimipalvelija voi säilyttää saamiaan tietueita sen aikaa, kun niiden tiedetään olevan käytettävissä. Tällaista tilapäistä säilyttämistä omassa 'muistissa' kutsutaan  https://fi.wikipedia.org/wiki/V%C3%A4limuisti välimuistiksi (engl. cache). Sitä käytetään monessa muussakin tilanteessa sekä laitteistossa että ohjelmistoissa, kun yritetään välttää saman hitaan asian tekemistä toistamiseen. Välimuisteja on jo käsitelty tietokoneen toiminta -kursseilla ja niitä tulee vastaan myös myöhemmillä kursseilla.

Jos kysytty tieto (eli kuvassa www.firma.fi:n IP-osoite) on välimuistissa, niin se välitetään saman tien kysyjälle vastauksena, eikä paikallinen nimipalvelija tee muuta.

Jos mitään kysyttyyn tietoon liittyviä resurssitietueita ei ole paikallisen nimipalvelijan välimuistissa, niin paikallinen nimipalvelija selvittää vastauksen kyselyyn aloittamalla selvittämisen aina jostakin juurinimipalvelijasta. Juurinimipalvelijoiden (tai ainakin osan niistä) IP-osoitteita on valmiina nimipalvelijan konfigurointitiedoissa, joten se tietää mistä aloittaa.

Ensiksi siis paikallinen nimipalvelija kysyy juurinimipalvelijalta, mikä ylätason nimipalvelija vastaa .fi -nimiavaruuden osoitteista. Tämä kysymys on siis DNS viestin mukainen kysely juurinimipalvelijalle. Juurinimipalvelijan vastauksessa on vähintään yksi NS-tyyppinen resurssitietue eli ko. nimiavaruutta hallinnoivan ylätason nimipalvelijan nimi.  Mukana on yleensä myös A tai AAAA-tyyppinen resurssitietue, jossa on ko. nimipalvelijan nimeen liittyvä IP-osoite.

Seuraavaksi paikallinen nimipalvelija kysyy äskeisessä vastauksessa saadun tiedon mukaiselta ylätason nimipalvelijalta, mikä alimman tason auktoritaarinen nimipalvelija vastaa www.firma.fi verkkonimen nimipalvelusta.

Vastauksen saatuaan paikallinen nimipalvelija voi vihdoin kysyä tältä auktoritaariselta nimipalvelijalta verkkonimeen www.firma.fi liittyvää IP-osoitetta. Kun vastaus saapuu, niin paikallinen nimipalvelija voi vastata omalle asiakkaalleen ja kertoa mikä tuo kysytty IP-osoite on.

Tässä viestien vaihdossa paikalliselle nimipalvelijalle kertyy useita resurssitietueita. Se tyypillisesti varastoi ne kaikki omaan välimuistiinsa ja käyttää näin vähitellen kertyvää tietoa apuna myöhemmissä kyselyissä. Esimerkiksi, jos välimuistista olisi jo löytynyt suoraan joko ylätason palvelijan tai auktoritaarisen palvelijan yhteystiedot, niin kyselyketjussa olisi voitu ohittaa tarpeettomat kyselyt ja näin säätää aikaa ja vähentää verkkoliikennettä.

QUIZZ:  Nimipalvelin toimintaan liittyen parikin kysymystä

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>


## Nimipalvelun turvallisuus

Nimipalvelu on niin keskeinen osa internetin toimintaa, että se houkuttelee erilaisia pahantahtoisia tahoja tekemään hyökkäyksiä joko itse nimipalvelua vastaan tai käyttämään nimipalvelua hyökkäyksissä jotain muuta tahoa vastaan. Aikoinaan valittujen suunnitteluperiaatteiden (kuten hajautettu toiminta, luottamukseen perustuva tietojen vaihto) tekevät siitä varsin haavoittuvan tämän kaltaisiin hyökkäyksiin liittyen.

En käy tällä kurssilla läpi kaikkia erilaisia hyökkäyksiä ja niiden mahdollisia haittavaikutuksia tai suojautumista niitä vastaan. Tietoturva-asiaa käsitellään kokonaisuutena Cyber security -kurssisarjassa.

TIVIn verkkosivuilla on vuonna 2015 TIVI-lehdessä ilmestynyt [artikkeli, jossa on kuvattu erilaisia nimipalvelun haavoittuvuuksia ja suojautumista](https://www.tivi.fi/uutiset/tietoturva-unohtui-kun-dns-syntyi-netin-nimipalvelu-vaatii-uutta-ajattelua/b58e3999-7a0b-329f-b256-f83ac6d599a7).


## DNSSEC

Nimipalvelun ongelmat havaittiin varsin pian, kun internet-verkon käyttö laajeni voimakkaasti, eivätkä verkkoon liittyneet organisaatiot enää tienneet keitä muita verkossa liikkui. Samoihin aikoihin myös erilaiset hyökkäykset ja haittaohjelmat yleistyivät. Alkuperäinen nimipalvelun turvallisuuslaajennus (Domain Name System Security Extension, DNSSEC) julkaistiin [RFC:ssä numero 2535](https://tools.ietf.org/html/rfc2535)  jo vuonna 1999. Vaikka julkaisusta on jo yli kaksikymmentä vuotta, niin edelleenkään kaikkia nimipalvelutietoja ei ole suojattu sillä.

DNSSEC käyttää julkisen avaimen salausmenetelmään perustuvaa digitaalista allekirjoitusta, jonka avulla DNS viestin vastaanottaja voi varmentaa, että sen saama resurssitietue ja siihen liittyvä digitaalinen allekirjoitus tulevat oikealta autoritääriseltä nimipalvelijalta, eikä joltain huijauspalvelimelta. Viestintävirasto on julkaissut [suomenkielisen oppaan DNSSECistä](https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/nimipalvelun-tietoturvalaajennus-dnssec)

## Lisätietoja .fi-verkkotunnuksista

(Tämä ei ole varsinaisesti kurssimateriaalia, mutta asiasta kiinnostuneiden kannattaa paneutua myös viestintäviraston ohjeistoon. Erityisesti ohje kannattaa lukea, josa olet kiinnostunut joko hankkimaan oman nimi.fi -verkkotunnuksen tai ainakin tietämään mieten yksityishenkilöt ja yritykset niitä voivat hankkia.)

Koska [Liikenne- ja viestintävirasto Traficom](https://www.traficom.fi/fi/)  hallinnoi .fi-verkkotunnuksia, on se määritellyt säännöt siihen, miten näitä .fi-verkkotunnuksia tunnuksia voidaan jakaa ja julkaissut myös ohjeen verkkotunnustenvälittäjille. Tarkempaa tietoa sivustolla https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset
