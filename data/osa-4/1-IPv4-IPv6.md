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

IP-osoite jaetaan aina kahteen osaan. Osoitteen alkuosa kertoo kyseistä osoiteavaruutta hallinnoivan operaattorin. Operaattori voi sitten jakaa hallitsemansa osoiteavaruuden osoitteet verkkolaitteille haluamallaan tavalla. Tämä rajapinta tunnistetaan verkon peitteen avulla. Verkonpeite on 32-bittinen sana, jonka alkupään bitit ovat ykkösiä ja loppupään bitit nollia. Ykkösbittien osa kertoo operaattorin tunnisteen ja nollabittien osa on sitten se alue osoitteista, joilla operaattorin hallinnoiman verkon laitteet tunnistetaan. Saman verkon laitteilla on aina sama alkuosa, jonka pituuden näkee suoraan tästä verkon peitteestä. VSaman verkon laitteilla on kuitenkin oltava eri IP-osoitteet, jotta ne voidaan erottaa toisistaan. Verkon peite merkitään usein kauttaviivalla IP-osoitteen perään. Peite voi olla samassa muodossa kuin IP-osoite tai sitten se voidaan ilmaista kokonaisluvulla 0-32, jolloin kokonaisluku kertoo peitteen alkuosan ykkösbittien lukumäärän.

Alunperin näitä jakokohtia oli vain tavujen välissä ja silloin puhuttiin luokista A (ensimmäisen tavun jälkeen), B (toisen tavun jälkeen) ja C (kolmannen tavun jälkeen). Näiden perusluokkien lisäksi koko osoiteavaruuden lopusta on varattu osoitteita monilähetykseen (luokka D) ja tulevaan käyttöön (luokka E). Näihin käyttöihin varattuja osoitteita ovat IP-osoite 224.0.0.0 ja sitä suuremmat arvot. Käy katsomassa luokkakohtaiset IP-osoitteet wikipedian sivulta [IP-osoite](https://fi.wikipedia.org/wiki/IP-osoite).

Luokkajaon lisäksi sovittiin, että kaikki 127-alkuiset osoitteet ovat käytettävissä paikallisena osoitteena yhden verkkolaitteen sisällä. Tämä voidaan merkitä joko 127.0.0.0/255.0.0.0  tai 127.0.0.0./8.  Näistä erityisesti paikallinen koneen oman sisäinen osoite (engl. localhost) 127.0.0.1 tulee vastaan laitteen konfigurointitiedoissa. 

IPv4:n osoitteista on myös varattu tietyt alueet yksityisissä verkoissa käytettäviksi. Näillä yksityisverkojen osoitteilla ei saa liikennöidä julkisessa internetissä. Toisaalta ne voi ottaa käyttöön omassa suljetussa verkossa sen tarkemmin kysymättä keneltäkään. 
Näistä ehkä eniten käytettyjä ovat  10.0.0.0/8 ja 192.168.0.0/16, koska ne noudattavat vanhoja luokkarajoja. 
172.16.0.0/255.240.0.0 (eli 172.16.0.1 – 172.31.255.255)
192.168.0.0/255.255.0.0


<quiz id="3ec7c1cc-27f5-4518-890a-201a9fe6121d"></quiz>

Luokkajaon perusongelma on siinä, että luokkia oli lukumäärällisesti liian vähän internetin yleistymisen jälkeen. Lisäksi erityisesti A luokissa oli aivan liian paljon osoitteita yhden operaattorin tarpeisiin. 

Luokallisesta osoitteiden hallinnoinnosta siirryttiinkin luokattomiin osoiterajoihin. Tällöin operaattorin tunnisteen ja verkkolaitteen tunnisteen raja voidaan sijoittaa mihin kohtaan tahansa 32-bittisessä osoitteessa eikä vain tavurajoille. 

Tätä kutsutaan termillä [luokaton reititys](https://fi.wikipedia.org/wiki/Luokaton_reititys) (engl. Classless Inter-Domain Routing, CIDR).



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





