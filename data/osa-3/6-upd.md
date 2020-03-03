---
path: '/osa-3/6-udp'
title: 'UDP'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata UDP:n toiminnan
- osaat perustella miksi kaikki protokollat eivät tarvitse yhteydellistä kuljetuspalvelua ja miksi joillekin se on tarpeen

</text-box>


## UDP:n toimintaperiaatteet

[UDP](https://fi.wikipedia.org/wiki/UDP) on kuljetusprotokollana TCP:n vastakohta. Se on yhteydetön ja epäluotettava ja sillä on hyvin pieni otsakkeen koko, vain 8 tavua.

Lähettäjällä UDP siis vain ottaa sovelluskerrokselta dataa kuljetettavaksi ja antaa sen verkkokerrokselle UDP-segmenttinä lähetettäväksi vastaanottajalle. Kun vastaanottajalle saapuu UDP-segmentti, niin UDP antaa datan sovelluskerrokselle. Ja mitään muuta UDP ei sitten tee. Segmenttejä ei kuitata, perillemenoa ei valvota, verkon ruuhkasta ei välitetä. Kaikki nämä lisäominaisuudet jätetään sovelluskerroksen vastuulle.

UDP:n otsake
* tavut 0 ja 1: lähettäjän porttinumero
* tavut 2 ja 3: vastaanottajan porttinumero
* tavut 4 ja 5: segmentin pituus otsake mukaan luettuna
* tavut 6 ja 7: tarkistussumma

Loput segmentistä on sitten dataa.

Data tulee sovelluskerrokselta lähetyspäässä ja toimitetaan vastaanottopäässä sovelluskerrokselle sellaisenaan.

Bittivirheitä vastaan UDP:ssä (ja TCP:ssä) on tarkistussumma, jolla vastaanottaja voi tarkistaa onko viesti ehyt.

## UDP tarkistussumma

UDP tarkistussumma perustuu yhteenlaskuun. Koko segmentti jaetaan 16-bittisiin sanoihin ja nämä lasketaan yhteen. Ylivuotobitit lisätään summaan.

Kun vastaanottaja tarkistaa segmentin virheettömyyden, se laskee kaikkien segmentin 16-bittisten sanojen summan (ja lisää summaan ylivuotobitit). Laskussa on mukana myös tarkistussumma. Jos segmentti on virheetön, niin yhteenlaskun tulos on luku, jossa on 16 ykköstä eli luku 11111111 11111111.

Segmentissä kulkeva tarkistussumma on näiden 16-bittisten sanojen summan yhden komplementti (engl. 1s complement).  Binääriluvut ja komplementit on käsitelty [Tietokoneen toiminta -kurssilla](https://courses.helsinki.fi/fi/tkt10005).

Lähettäjä siis laskee segmentin kaikkien 16-bittisten sanojen summan poisluettuna tarkistussumma. Tarkistussummaan sijoitetaan tämän summan yhden komplementti eli summan bitit vaihdettuina toisiksi (0:n sijaan sijoitetaan 1 ja 1:n sijaan 0).

Vaikka UDP käsittelee 16 bitin eli kahden tavun mittaisia tarkistussummia, niin käyn tässä esimerkin yhden tavun mittaiselle tarkistussumman laskennalle. Oletetaan, siis että siirrettävänä on 3 tavua dataa 01101101, 10101011 ja 10100110. Lasketaan nyt sitten tarkistussmma näille tavuille. Tavujen 01101101 ja 10101011 summa on 100011000. Tässä on kuitenkin 9 bittiä, joten tuo 9. ylivuotobitti pitää laskea mukaan summaan eli 00011000 +1 = 00011001. Seuraavaksi lasketaan tämän summan ja 3. tavun summa eli 00011001 + 10100110 = 10111111. Tästä yhden komplementti on 01000000, joka siis on näiden kolmen tavun tarkistussumma. Nyt kun lasketaan yhteen tavut 01101101, 10101011, 10100110 ja 01000000, niiin loppputuloksena pitäisi olla luku 11111111.


<quiz id="ad5e58f1-8a0e-4f8b-8049-e52d30ea61bb"> </quiz>


## Kuljetuskerroksen pseudo-otsake

Kuljetuskerros ei itse tarvitse vastaanottajan IP-osoitetta, mutta sen pitää välittää tieto verkkokerrokselle. Se saa tiedon sovelluskerrokselta, eli se vain toimittaa tiedon eteenpäin. Yleensä isäntäkoneessa paikallisesti käytetään tähän tiedon välitykseen niin sanottuna pseudo-otsaketta, jossa on siis lähettäjän ja vastaanottajan IP-osoitteiden lisäksi kuljetuskerroksen protokollan tunniste.

Pseudo-otsakkeista (pseudoheader) on kuvat wikipedian [UDP-sivulla](https://fi.wikipedia.org/wiki/UDP).



