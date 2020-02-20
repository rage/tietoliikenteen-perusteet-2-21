---
path: '/osa-1/2-kertausta'
title: 'Kertausta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Palautetaan mieleen edellisen kurssin käsitteitä, joita käytetään myös tällä kurssilla

</text-box>

## Osoitteet ja viestinvälitys

Internetin viestinvälitys on pakettikytkentäinen, mikä tarkoittaa, että lähettäjä aina lähettää yhden paketin (analogiana toimii kirje), jossa on sisällä siirrettävä data ja sen ympärillä (kirjekuorena) vastaanottajan tunnistamiseen tarvittava tieto.

Internetin protokollat on sijoitettu protokollapinon eri kerroksille. Yhdellä kerroksella olevan protokollan ei tarvitse tietää mitä sen ala- ja yläpuolella on. Sille riittää tarkastella kyseisen protokollan lähettäjän ja vastaanottajan välistä viestien vaihtoa. Tästä automaattisesti seuraa, että kun jokainen kerros laittaa oman viestinsä omaan kirjekuoreen, niin näitä kirjekuoria on useita sisäkkäin.

<quiz id="afbefe02-8bf3-4a73-b71d-e851c2c6b59b"></quiz>

Eri kerroksilla käytetään eri osoitteita. Kuljetuskerros käyttää porttinumeroa oikean sovelluksen / prosessin tunnistamiseen tämän tietokoneen sisällä. Verkkokerros käyttää IP-osoitetta Internet-verkkoon liitetyn laitteen tunnistamiseen. Linkkikerros käyttää laitteiden MAC-osoitteita niiden tunnistamaan yhden linkin muodostamassa aliverkossa.  

<quiz id="ad711046-8a1d-4e03-8b6f-e545ee9bdcd0"></quiz>

Pakettikytkentäisen verkon yksi keskeinen piirre on, että paketit liikkuvat aina yhden välin eli etapin kerrallaan. Siksi niitä kutsutaan myös etappivälitteisiksi verkoiksi. Jokaisella välipysäkillä täytyy aina päättää, mihin suuntaan paketti seuraavaksi liikahtaa. Tätä kokonaisuutta kutsutaan reititykseksi ja näitä päätöksiä tekeviä laitteita reitittimiksi silloin kun päätöksiä tehdään verkkokerroksella. Reititystä tarkastellaan vielä tällä kurssilla myöhemmin.

## Protokollat

Tietoliikenteen protokollat määrittävät viestien vaihdon toiminnallisuuden. Protokollan kuvauksessa kerrotaan siis kuka lähettää, kenelle, mitä ja millä ehdoilla.  Internetin protokollien kuvaukset ovat IETF:n RFC dokumentaatiossa. Esimerkiksi HTTP versio 2 on [https://tools.ietf.org/html/rfc7540](RFC7540). Siinä on kuvattu kaikki HTTP/2:n käyttöön tarvittavat tiedot kuten kehykset, yhteydet ja viestien vaihto.

Kaikilla muillakin protokollilla on omat dokumentaationsa. Viralliset internetissä käytettävät protokollat on aina kuvattu RFC-dokumentaatiossa. Toki kuka tahansa voi rakentaa oman verkko-ohjelman ja käyttää omien ohjelman osien välillä ihan sellaista protokollaa kuin haluaa. Kuitenkin jos tarvitaan laajoja verkkosovelluksia, joilla on toisistaan riippumattomia toteuttajia, niin järjestelmän osien välinen kommunikointi täytyy kuvata ja dokumentoida siten, että se on kaikkien saatavilla.

Edellisellä kurssilla meillä oli jo esillä HTTP-protokollan ja IP-protokollan viestien kuvaukset. Ne ovat keskenään hyvin erilaisia, koska protokollien määrittelyt ovat hyvin erilaisia ja kyseessä on myös eri kerrosten protokollat. IP-protokollan otsake on hyvin määrämuotoinen ja jokaisen bitin merkitys on määritelty tarkasti.  HTTP-protokollan otsake puolestaan on sanallisempi ja sille onkin määritelty lähinnä syntaksi, jolla näitä erilaisia määreitä kuvataan.

Asiakkaan lähettämässä HTTP-viestissä ensimmäiselle rivillä on itse pyyntö ja rivi alkaa metodin nimellä. Palvelijan vastauksessa vastaavasti ensimmäinen rivi sisältää viestin statustiedon. Seuraavat rivit sisältävät muita pyyntöön tai vastaukseen liittyviä määrittelyjä. Kaikki nämä rivit yhdessä muodostavat viestin otsakkeen. Huomaa, että rivien lukumäärää ei ole rajoitettu. Siksi emme voikaa käyttää otsakkeen koko tai rivien määrää kertomaan viestin vastaanottajalle milloin viestin sisältö vaihtuu otsaketiedosta vaarsinaiseen sisältöön. HTTP:ssä on määritelty, että varsinainen viestin sisältö alkaa yhden tyhjän rivin jälkeen.


<quiz id="b10758e2-8cf9-421c-8e48-ea03d08148a8"></quiz>


