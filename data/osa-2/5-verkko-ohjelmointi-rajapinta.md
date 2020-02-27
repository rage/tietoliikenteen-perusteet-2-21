---
path: '/osa-2/5-verkko-ohjelmointi-rajapinta'
title: 'Verkko-ohjelmointi ja sovelluksen rajapinta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät millaisia rajapintoja verkkosovellukset käyttävät.
- Osaat kertoa mikä on pistoke ja kuvata yleisellä tasolla miten sitä käytetään.

</text-box>

## Verkkosovelluksen rajapinta

Perinteisesti internetin protokollapinon sovelluskerroksella on ollut erilaisia verkkosovelluksia, jotka ovat käyttäneet kuljetuskerroksen tarjoamia palveluja erilaisten kirjastorajapintojen kautta, kuten C:n ja C++:n socket.h tai JAVAn java.net. Kirjasto tarjoaa ohjelmoilla joukon funktioita, metodeja yms, joiten avulla verkkosovellus osien välinen tietoliikenne voidaan toteuttaa. Nämä kirjastot käyttävät sitten edelleen käyttöjärjestelmän palveluja erityisten [pistokkeiden](https://fi.wikipedia.org/wiki/Pistoke_(tietotekniikka)) (engl. socket) kautta.

Pistokkeet ovat siis keino välittää dataa (eli viestejä) sovelluskerroksen ja kuljetuskerroksen välillä. Tällä kurssilla tutustutaan yleisesti kuljetuskerroksen tarjoamien palvelujen käyttöön pistokkeilla. Varsinaista verkko-ohjelmointia emme tällä kurssilla opettele. Helsingin yliopiston tutkinto-opiskelijat voivat osallistua valinnaiselle kurssille [Network Programming](https://courses.helsinki.fi/fi/tkt21026), jossa opiskellaan verkkosovellusten tekoa pistokkeita käyttäen.

Toisaalta nykyään yhä useampi verkkopalvelu toteutetaankin selaimen kautta käytettävänä www-palveluna. Nämä palvelut käyttävätkin sovelluskerroksen omaa HTTP-protokolla sovelluksen eri osien väliseen tiedonsiirtoon. Ne siis muodostavat ovat kerroksensa HTTP-protokollan päälle ja kasvattavat näin koko järjestelmän abstrakiotasoa, kun kaikki HTTP:n alapulella oleva voidaan jättää huomioimatta.

(TODO selvennä allaolevaa. Esimerkkejä apista vaikkapa https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs )
Nykyään yhä useammat verkkosovellukset on toteutettu sovelluskerroksella siten, että ne käyttävät kuljetuskerroksen TCP-protokollan sijaan sovelluskerroksen HTTP-protokollaa omien viestiensä kuljetuspalveluna. Osa tällaisista verkkopalveluista toimii verkkoselaimessa. Tällöin käyttäjän koneessa ei sovelluksella ole enää omaa erillistä prosessia, vaan sitä suoritetaan selainprosessilla ja verkkosivujen kuvausten kautta. Tällaisilla websovelluksilla on omat erilliset toteutusrajapintansa, kuten REST, jne. Internetin protokollapinossa ne 'piiloutuvat' sovelluskerrokselle. Tällaisen www-palvelun päällä toimivat websovelluksen tietoliikenne tapahtuu HTTP-protokollalla, kuten selaimen ja www-palvelimen välinen liikenne normaalistikin tapahtuu. Selain siis noutaa tällaisen selaimessa suoritettavan 'verkkosivun' www-palvelimelta ja tarvittavat viestien vaihdot selaimessa toimivan asiakasosan ja palvelimella toimivan palvelinsovelluksen välillä tapahtuu HTTP-viesteinä. Jos tämä teema kiinnostaa, niin silloin kannattaa seuraavaksi suunnata kurssille [web-palvelinohjelmointi](https://courses.helsinki.fi/fi/tkt21007) tai [full stack -websovelluskehitys](https://courses.helsinki.fi/fi/tkt21009), jossa opit nimenomaan tekemään sovelluksia web-ympäristössä.

Huomaa, että valitaanpa verkkosovelluksen tietoliikennerajapinnaksi sovelluskerroksen HTTP tai kuljetuskerroksen TCP tai UDP, verkkosovelluksen osia suoritetaan vain verkkon reunoilla olevissa päätelaitteissa, kuten käyttäjän tietokone ja palvelinkeskusten palvelimet. Verkkosovelluksen ohjelmoijan pitääkin kirjoittaa ohjelmakoodi vain näille laitteille. Verkon syövereissä olevissa laitteissa ei ole sovelluskerrosta, joten ne eivät voi verkkosovelluksen osia suorittaa, eikä niiden toiminta muutu sovelluksen vaihtuessa.

KUVA: Jotain kuten kirjan peruskuva, joka kaikissa kalvoissa.

## Pistokkeet

Verkkosovellusta koneella edustava prosessi käyttää kuljetuskerroksen palveluja pistokkeiden kautta. Pistoketta voi ajatella ovena tai postilaatikkona, jonka kautta sovellusprosessi lähettää ja vastaanottaa viestejä. Sovelluksen ei tarvitse tietää, miten viesti kulkee verkkosovelluksen prosessien välillä ovelta toiselle tai postilaatikosta toiseen. Lähettäjän täytyy vain luottaa, että 'oven' takana oleva kuljetuspalvelu toimittaa viestin perille.

Ohjelmoijan ja sovellusohjelman näkökulmasta pistokkeen käyttö muistuttaa tiedoston käyttöä, sinne kirjoitetaan ja sieltä luetaan. Pistokkeiden kanssa tosin käytetään termejä lähettää (engl. send) ja vastaanottaa (eng. receive).

Pistokkeita voidaan käyttää prosessien välisessä kommunikoinnissa myös samassa tietokoneessa. Pistokkeiden toteutuksessa mikään ei vaadi, että viestit on aina välitettävä koneesta toiseen. Ne voidaan hyvin välittää prosessilta toiselle samassa koneessa.

KUVA: Vanha pistokekuva kalvoista 2017, luento 3, kalvo 12.

Tarkastellaan nyt pistoketta käyttöjärjestelmän näkökulmasta eli mitä tapahtuu, kun prosessi haluaa lähettää dataa.
1) Prosessi pyytää kuljetuspalvelua KJ:n palvelupyynnöllä send (kirjastofunktio)
2) Kuljetuskerros hoitaa omat tehtävänsä ja kutsuu verkkokerroksen rutiinia
3) Verkkokerros tekee hommansa ja kutsuu laiteajurin rutiinia
4) Laiteajuri vie datan ja komennot verkkokortin ohjaimen rekistereihin
5) Verkkokortti siirtää bitit linkille (linkkikerros ja fyysinen siirto)

Lähettäminen on ajallisesti yksinkertaisempaa, koska sovellus päättää, koska lähetetään ja kutsuu kirjastorutiinia, joka sitten käyttöjärjestelmän toimintoina huolehtii tuosta lähettämisestä. Viestiä ei välttämättä pystytä heti laittamaan eteenpäin, vaan se laitetaan ensin lähetyspuskuriin (engl. send buffer), josta viesti sitten lähetetään, kun verkossa on tilaa.

Vastaanottaminen on haasteellisempaa, koska sovellus tekee vastaanottopyynnön (receive) silloin, kun se sovelluksen oman toiminnan kannalta on tarpeellista. Tämä ei ajallisesti ole mitenkään sidottu varsinaiseen viestin saapumiseen. Vastaanottava kone (tai prosessi) ei voi vaikuttaa viestin saapumisen ajankohtaan tai saapuvan viestin kokoon. Sen pitää ottaa viesti vastaan silloin, kun se on verkkoyhteydeltä tulossa.  Viesti siis vastaanotetaan ensin vastaanottopuskuriin (engl. receive buffer), josta se voidaan antaa sovellukselle silloin, kun sovellus sitä pyytää.

Viestin vastaanotto vaiheittain:
1) Verkkokortti ottaa vastaan linkiltä tulevat bitit (fyysinen siirto ja linkkikerros)
2) ...ja aiheuttaa keskeytyksen.
3) KJ:n laiteajuri siirtää bitit verkkokortilta keskusmuistiin
4) Ajuri kutsuu verkkokerroksen rutiinia, joka suorittaa omat toimintonsa
5) Verkkokerros kutsuu kuljetuskerroksen rutiinia, joka tekee omat toimensa
6) Sanoma prosessille vasta, kun se sitä pyytää palvelupyynnöllä receive

Sovellus voi pistokkeen avaamisen yhteydessä määritellä, haluaako se receive-pyynnön yhteydessä jäädä odottamaan viestiä vai ei (engl. blocking vs. non-blocking).

Pistoke on kaksisuuntainen eli samalla pistokkeella sekä lähetetään että vastaanotetaan. Pistoke on siis prosessin yhteyspiste toisen prosessin kanssa. Molemmilla kommunikointiin osallistuvilla prosesseilla on omat pistokkeensa, jotka ovat yhteydessä toisiinsa. Yhdellä prosessilla voi olla samanaikaisesti käytössä useita pistokkeita eri yhteyksiä varten.

Kuljetuskerros tarjoaa yhteydellisen kuljetuspalvelun TCP-protokollalla ja yhteydettömän UDP-protokollalla. Palvelun mukaan pistokkeet voivat vastaavasti olla joko tavuvirtapistokkeita (engl. stream socket) tai tietosähkepistokkeita (engl. datagram socket).

## Päästä-päähän yhteys

Prosessin verkkoyhteys on sidottu tiettyyn pistokkeeseen. Kuljetuskerros kuitenkin tunnistaa yhteyden viestit porttinumeroilla.  Lähtevässä viestissä pitää aina olla vastaanottajan IP-numero ja porttinumero. Verkkokerros käyttää IP-numeroa vastaanottavan koneen löytämiseen. Saapuvan viestin porttinumerolla kuljetuskerros tunnistaa oikean pistokkeen ja osaa välittää viestin oikealle prosessille.

Osa porttinumeroista on varattu tietyille tunnetuille palveluille. [Internet Assigned Numbers Authority (IANA)](https://www.iana.org), hallinnoi internetin IP-numeroita ja myös erilaisten palvelujen porttinumeroita. IANA ylläpitää myös muuta internetin ja sen protokollien käyttöön liittyvää tietoa.



KUVA: Kalvon 15 kuva

**Kuvaan liittyvä selitys**


## Esimerkki: Tavuvirtapistoke (TCP pistoke)

KUVA:  Luento 3, luento 59

Asiakkaan koodi:
```java
from socket import *
serverName = ’servername’
serverPort = 12000
clientSocket = socket(AF_INET, SOCK_STREAM)
clientSocket.connect((serverName,serverPort))
viesti = raw_input(‘Kirjoita lähetettävä viesti: ’)
clientSocket.send(viesti)
muokattuviesti = clientSocket.recv(1600)
print ‘Palvelimen vastaus: ’, muokattuviesti
clientSocket.close()
```
Palvelijan koodi:
```java
from socket import *
serverPort = 12000
serverSocket = socket(AF_INET,SOCK_STREAM)
serverSocket.bind((‘’,serverPort))
serverSocket.listen(1)
print ‘Palvelija on valmiina’
while 1:
     connectionSocket, addr = serverSocket.accept()

     viesti = connectionSocket.recv(1600)
     muunnettuviesti = sentence.upper()
     connectionSocket.send(muunnettuviesti)
     connectionSocket.close()
```

Jos verkko-ohjelmointi kiinnostaa enemmänkin, niin voit täysin ylimääräisenä materiaalina tutustua erilaisiin verkosta löytyviin esimerkkiohjelmiin. Oheiset linkit vievät englanninkielisille sivuille:
1) Pistokkeet pythonissa: https://realpython.com/python-sockets/
2) Pistokkeet Javassa: https://docs.oracle.com/javase/tutorial/networking/sockets/index.html
3) Ray Toalin kurssimateriaalissa olevia esimerkkejä javalle: https://cs.lmu.edu/~ray/notes/javanetexamples/ liittyvät kurssiin https://cs.lmu.edu/~ray/classes/it/


