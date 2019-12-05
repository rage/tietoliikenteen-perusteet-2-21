---
path: '/osa-4/1-IPv4-IPv6'
title: 'IPv4 ja IPv6'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata IPv4 ja IPv6 osoitteet.
- Osaat selittää miksi on siirrytty ja edelleen siirrytään IPv4 osoitteiden käytöstä kohti IPv6 osoitteiden käyttöä.

</text-box>

<quiz id="3ec7c1cc-27f5-4518-890a-201a9fe6121d"></quiz>


## Verkkokerroksen tehtävät

Verkkokerros huolehtii viestin välittämistä lähettäjältä vastaanottajalle. Verkkokerroksella toimivien laitteiden täytyy siis tietää jotain verkon rakenteesta ja siitä mistä päin verkkoa vastaanottaja löytyy. 

Internetin etappivälitteisyys näkyy erityisesti verkkokerroksella. Jokainen verkkokerroksella toimiva laite voi vastaanottaa sille linkkikerroksella osoitettuja viestejä, joiden lopullinen vastaanottaja se ei ole. Kun laitteelle tulee viesti, jonka vastaanottaja se ei ole, on laitteella velvollisuus lähettää viesti edelleen kohti vastaanottajaa. 

Verkkokerroksella laitteet tunnistetaan niiden IP-numeroista, joita usein myös IP-osoitteiksi kutsutaan.

## IP-osoite

IP-protokollasta on tällä hetkellä käytössä kaksi versiota perinteinen [IPv4](https://fi.wikipedia.org/wiki/IP) ja uudempi [IPv6](https://fi.wikipedia.org/wiki/IPv6). IPv4 on ollut Internetin verkkokerroksen välitysprotokolla koko Internetin olemassaolon. Vieläkin kun puhutaan pelkästään IP:stä yleensä aina tarkoitetaan IP versiota 4.

Nämä versionumerot 4 ja 6 vaikuttavat oudoilta, mutta internetin dokumentaatiosta löytyy määrittelyt myös protokollan versioille 1,2,3 ja 5. Ne eivät ole käytössä.

## IPv4

IPv4:ssä [IP-osoitteen](https://fi.wikipedia.org/wiki/IP-osoite) pituus on 32-bittiä eli 4 tavua. Osoite ilmoitetaankin yleenä näiden tavujen numeroarvoina eli muodossa 10.12.34.216. Jokaisella internetiin suoraan liitetyllä laitteella täytyy olla uniikki osoite. Kuten jo tiedämme näitä osoitteita maailmanlaajuisesti hallinnoi IANA.

IP-osoite jaetaan aina kahteen osaan. Osoitteen alkuosa kertoo kyseistä osoiteavaruutta hallinnoivan operaattorin. Operaattori voi sitten jakaa hallitsemansa osoiteavaruuden osoitteet verkkolaitteille haluamallaan tavalla. Alunperin näitä jakokohtia oli vain tavujen välissä ja silloin puhuttiin luokista A (ensimmäisen tavun jälkeen), B (toisen tavun jälkeen) ja C (kolmannen tavun jälkeen). Lisäksi joitakin numeroalueita on varattu erityiskäyttöön.

Luokkajaon ongelma on siinä, että jaettavien osoiteavaruuksien lukumäärä ei riittänyt internetin yleistymisen jälkeen. Lisäksi erityisesti A-luokissa oli aivan liian paljon osoitteita yhden operaattorin tarpeisiin.


## Monilähetys ja yleislähetys

unicast/multicast/broadcast


## IPv4

IPv4 osoitteiden hallinta, hierarkinen osoite, aliverkkojen osoitteet,  CIDR ( Classless interDomain Routing)

## IPv6


## Tunnelointi

## IPv4 Reititystaulu

## Reititysalgoritmi

## Reitittimen toiminta ja rakenne

## ICMP??





