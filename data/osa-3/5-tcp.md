---
path: '/osa-3/5-tcp'
title: 'TCP'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata TCP:n toiminnan.
- Osaat kuvata vuonvalvonnan ja ruuhkanhallinnan periaatteet.
- Osaat perustella, miksi TCP:n toiminnassa on erilaisia vaiheita ja kertoa miten vaiheesta toiseen siirtymien tapahtuu ja miksi.

</text-box>


## TCP:n toimintaperiaatteet

TCP [https://fi.wikipedia.org/wiki/TCP] tarjoaa sovelluskerrokselle luotettavan päästä-päähän kuljetuspalvelun. Se siis siirtää sovelluskerrokselta saamansa datan sellaisenaan vastaanottajalle, kunhan lähettäjän ja vastaanottajan välillä on toimiva verkkoyhteys. Jos yhteyttä ei ole, niin viestit eivät kulje, eikä kuljetuspalvelu voi toimia.

KUVA: TCP


TCP käsittelee sovelluskerrokselta tulevaa dataa (tai viestejä) itseasiassa yhtenäisenä tavuvirtana. TCP ei siis välitä sovelluskerroksen viestirakenteesta millään tavalla. Se vain siirtää tavuvirtapistokkeen kauttaa saamansa tavut vastaanottajalle, jossa ne päätyvät tavuvirtapistokkeen kautta sovelluskerrokselle.

TCP pätkii tämän tavuvirran segmenteiksi, jotka se sitten siirtää verkkokerroksen välityksellä lähettäjältä vastaanottajalle,

TCP muodostaa yhteyden segmenttien siirtoa varten lähettäjän ja vastaanottajan välille. Yhteys mudoostetaan, kun viestien vaihto alkaa ja puretaan, kun sitä ei enää tarvita. Yhteys on kaksisuuntainen (engl. full dublex), joten samaa muodostettua yhteyttä pitkin voi kuljettaa segmenttejä molempiin suuntiin. Tämä on käytännöllistä, koska yleensä verkkosovelluksella on tarvetta siirtää tietoa molempiin suuntiin.

Luotettava kuljetuspalvelu tarvitsee aina kuittauksia, jotta lähettäjä voi varmistua viestien perillemenosta. Perusmuodossaan TCP käyttää kumulatiivista kuittausta eli saapuva kuittaus kuittaa aina kyseisen segmentin lisäksi kaikki sitä edeltävät segmentit. 

TCP:hen on vuosien varrella lisätty erilaisia piirteitä, jotka lisäävät protokollan yksityiskohtien monimuotoisuutta. Tällä kurssilla käymme läpi vain hyvin yksinkertaisen perustoiminnallisuuden. Lisäpiirteitä voi sitten opiskella myöhemmin maisterivaiheen kurssilla Internet Protocols.

Tiivistetysti TCP siis tarjoaa sovelluskerrokselle luotettavan, järjestyksen säilyttävän tavuvirran, jossa ei ole sanomarajoja. TCP käyttää tavunumerointi ja kumulatiivisia kuittauksia.

TCP pyrkii tukemaan tietoliikenneverkon ja vastaanottajan toimintaa käyttämällä sekä vuonvalvontaa että ruuhkanhallintaa. Niiden avulla varmistetaan, että lähettäjä ei pääse tukahduttamaan vastaanottaa tai matkan varrella olevia reitittimiä.  Vuonvalvonnalla (engl. flow control) suojataan vastaanottajaa. Se kontrolloi, että lähettäjä voi lähettää korkeintaan sen verran kuin vastaanottajaja pystyy vastaanottamaan. Ruuhkanhallinnalla (engl. congestion control) suojataan verkon reitittimiä, jotta paketteja ei katoaisi matkalla ylivuodon vuoksi. Ruuhkanhallinnalla pyritään lähettäjän lähetysnopeutta säätämään siten, että kaikki verkko pystyy välittämään kaikki lähetetyt paketit vastaanottajalle asti. Koska TCP käyttää liukuvan ikkunan protokollaa, niin näillä säädetään ikkunan kokoa.

## TCP-segmentti

Wikipedian [TCP-sivulla](https://fi.wikipedia.org/wiki/TCP) on kuva TCP-kehyksestä, jota tällä kurssilla kutsutaan segmentiksi sen englanninkielisen nimen segment mukaisesti. En halua käyttää siitä termiä kehys, koska kehys-termiä käytetään kurssilla myöhemmin linkkikerroksen viesteistä. Yritän eri kerrosten eri nimityksillä auttaa kokonaisuuden hallinnassa.


## Yhteyden muodostus ja purku

TCP:n yhteyden muodostuksessa välitetään kolme viestiä.

## Vuonvalvonta


## Ruuhkanhallinta


## Liukuvan ikkunan toiminta


## Virhetilanteista toipuminen



