---
path: '/osa-4/5-muita-verkkokerroksen-protokollia.md'
title: 'Muita verkkokerroksen protokollia'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mikä ICMP on ja mitä sillä tehdään

</text-box>



## Muita verkkokerroksen protokollia

Edellä on käyty läpi verkkokerroksen tärkeimmän protokollan IP:n toiminnallisuutta. Verkkokerroksella on kuitenkin paljon muitakin protokollia. Englanninkielinen wikipedian sivu [Network_layer](https://en.wikipedia.org/wiki/Network_layer) luettelee niitä toistakymmentä. Tällä kurssilla tutustutaan niistä lyhyesti vain kahteen, jotka ovat vahvasti liitoksissa IP-protokollan kanssa.


## ICMP

Internet Control Message Protocol (ICMP) on protokolla, jonka avulla verkon laitteet voivat välittää toisilleen tietoa verkon tilasta.

Ping ja traceroute käyttävät nimenomaan ICMP-paketteja verkon tilan selvittämiseen. Ping-komennolla voi kokeilla saavuttavatko paketit vastaanottavan koneen ja traceroute-komennolla voi selvittää mitä reittiä paketit lähettäjältä vastaanottajalle kulkevat.

Reitittimet voivat käyttää ICMP-paketteja kertomaan lähettäjälle, jos reititin pudottaa IP-paketin siksi, että sen elinaika (time-to-live, TTL) päättyy eli laskuri menee 0:aan. Reititin voisi kertoa lähettäjälle myös muista pakettien pudottamisista, mutta reitittimen oman kuormituksen hallinnan vuoksi tätä ei juurikaan käytännössä tehdä.

Jos protokolla yksityiskohtaisempi toiminta kiinnostaa, niin englanninkielisellä wikipedian sivulla [Internet_Control_Message_Protocol](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) on kuvattuna tarkemmin protokollan erilaiset viestityypit ja niihin liittyvät koodit.


## IPsec

[IPsec](https://fi.wikipedia.org/wiki/IPsec) ei ole vain yksi protokolla vain oikeammin protokollaperh3, kuten sen englanninkielinen nimi IP Security Architecture jo tavallaan kertoo.

IPsec o kehitetty huomattavasti itse internetiä myöhemmin ja sen tavoitteena on suojata IP-paketissa siirrettävä data salaamalla se. Vastaavaa palvelua tarjoaa kuljetuskerroksella TCP-yhteyksille [TLS](https://fi.wikipedia.org/wiki/TLS).

Virtuaaliset yksityisverkot (VPN) toteutetaan tyypillisesti juuri IPsec:llä. Silloin IPsec:iä käytetään tunnelointitilassa (engl. tunnel mode) ja alkuperäinen IP-paketti otsakkeineen on IPsecillä salattava ja kuljetettava data. IPsec:llä salattu paketti sijoitetaan sitten tavalliseen IP-pakettiin, jonka otsakkeita ei tietenkään voida salata, kun IP-paketteja ei internetissä salata. Näin saadaan kuitenkin tunnelissa salattua tuo alkuperäinen paketti otsakkeineen, koska se on vain data tässä salatussa IP-paketissa.

IPsec:iä voi käyttää myös kuljetustilassa (engl. transport mode), jolloin sen kuljettama data on kuljetuskerrokselta tullut segmentti.


KUVA: Protokollapinot kuten Forouzan s. 1126

Koska IPsec käyttää salausta on sekä lähettäjällä että vastaanottajalla oltava jokin jaettu salaisuus, tyypillisesti salausavain (engl. encryption key) tai avainpari, jolla data voidaan lähettäjällä salata (engl. encrypt) ja vastaanottajalla taas purkaa (engl. decrypt) ennen salausta olleeseen "selväkieliseen" muotoon.  

Koska lähettäjällä ja vastaanottajalla on oltava sama symmetrisen salauksen avain, niin IPsec oikeastaan muodostaa yhteyden lähettäjän ja vastaanottajan välille, vaikka perinteisesti ja edelleen IP sinänsä on yhteydetön. IPsec tarjoaa useita erilaisia salausmenetelmiä, joten yhteyden aluksi lähettäjän ja vastaanottajan pitää sopia käytettävästä menetelmästä ja avaimista. Tätä varten ne muodostavat yksisuuntaisen loogisen yhteyden, jota kutsutaan englanniksi security association. Yhteys on yksisuuntainen, koska kun toimitaan verkkokerroksella, niin viestejä vain lähetetään tai vastaanotetaan. Jos viestejä pitää kuljettaa myös toiseensuuntaan, niin sitä varten pitää muodostaa oma looginen yhteys. 

Salamalla siirrettävän datan (engl. encryption of payload) osalta IPsec takaa sen muuttumattomuuden (engl. data integrity) ja varmentaa lähettäjän (engl. host authentication).  Nämä saavutetaan IPsecin protokollalla Authentication Header (AH). Jos lisäksi tarvitaan luottamuksellisuutta (engl. confidentiality), eli että muut eivät voi lukea datan sisältöä, niin silloin pitää käyttää Encapsulation Security Payload (ESP) protokollaa.

Turvallinen avaintenhallinta on aina keskeinen ongelman tiedonsuojaukseen liittyvissä salausjärjestelmissä. IPsec:ssä on erillinen avaintenhallintaprotokolla Internet Key Exchange (IKE), jonka avulla avaimista voidaan sopia turvallisesti ilman, että muut verkossa olevat laitteet pystyvät tunnistamaan kommunikoinnin osapuolia.  IKEn sijaan avaimet voitaisiin toki asettaa kommunikoiville laitteille käsin, mutta isommissa järjestelmissä laitteita on aivan liikaa tähän tarkoitukseen. 


TEHTÄVÄ:  Joku tehtävä IPseciin liittyen - ekä käsitteitä




