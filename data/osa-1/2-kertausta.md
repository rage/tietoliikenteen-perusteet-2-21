---
path: '/osa-1/2-kertausta'
title: 'Kertausta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Palautetaan mieleen edellisen kurssin käsitteitä, joita käytetään myös tällä kurssilla

</text-box>

## Osoitteet ja viestinvälitys

Internetin viestinvälitys on pakettikytkentäinen, mikä tarkoittaa, että lähettäjä aina lähettää yhden paketin (analogiana toimii kirje), jossa on sisällä siirrettävä data ja sen ympärillä tai edellä otsakkeena (kirjekuorena) vastaanottajan tunnistamiseen tarvittava tieto.

Internetin protokollat on sijoitettu protokollapinon eri kerroksille. Yhdellä kerroksella olevan protokollan ei tarvitse tietää mitä sen ala- ja yläpuolella on. Sille riittää tarkastella oman protokollansa mukaista lähettäjän ja vastaanottajan välistä viestien vaihtoa. Ylemmän tason protokollan viesti on sille kokonaisuudessaan vain dataa (eli kirjekuoren sisälle laitettava viesti) ja alemman tason protokollan viestiä se ei voi havaita lainkaan (koska alemman tason protokolla poistaa oman kirjekorensa ennenkuin antaa sisällön ylemmälle tasolle). Tästä automaattisesti seuraa, että kun jokainen kerros laittaa oman viestinsä omaan kirjekuoreen, niin näitä kirjekuoria on useita sisäkkäin. Jokaisessa kuoressa on päällä sen kirjekuoren vastaanottajan tiedot.

<quiz id="d8699894-f94e-50b4-ae68-e768d0808018"></quiz>

Eri kerroksilla käytetään eri osoitteita. Kuljetuskerros käyttää porttinumeroa oikean sovelluksen / prosessin tunnistamiseen tämän tietokoneen sisällä. Verkkokerros käyttää IP-osoitetta Internet-verkkoon liitetyn laitteen tunnistamiseen. Linkkikerros käyttää laitteiden MAC-osoitteita laitteen (tai oikeastaan sen verkkoliitännän) tunnistamiseen kyseisen linkin muodostamassa aliverkossa.

<quiz id="3278b786-eb14-52d2-820f-b04ddc618350"></quiz>

Pakettikytkentäisen verkon yksi keskeinen piirre on, että paketit liikkuvat aina yhden välin eli etapin kerrallaan. Siksi niitä kutsutaan myös etappivälitteisiksi verkoiksi. Jokaisella välipysäkillä täytyy aina päättää, mihin suuntaan paketti seuraavaksi liikahtaa. Tätä kokonaisuutta kutsutaan reititykseksi ja näitä päätöksiä tekeviä laitteita reitittimiksi silloin kun päätöksiä tehdään verkkokerroksella. Reititystä tarkastellaan vielä tällä kurssilla myöhemmin.

## Protokollat

Tietoliikenteen protokollat määrittävät viestien vaihdon toiminnallisuuden. Protokollan kuvauksessa kerrotaan siis kuka lähettää, kenelle, mitä ja millä ehdoilla.  Internetin protokollien kuvaukset ovat IETF:n RFC dokumentaatiossa. Esimerkiksi HTTP versio 2 on [RFC7540](https://tools.ietf.org/html/rfc7540). Siinä on kuvattu kaikki HTTP/2:n käyttöön tarvittavat tiedot kuten kehykset, yhteydet ja viestien vaihto.

Kaikilla muillakin protokollilla on omat dokumentaationsa. Viralliset internetissä käytettävät protokollat on aina kuvattu RFC-dokumentaatiossa. Toki kuka tahansa voi rakentaa oman verkko-ohjelman ja käyttää omien ohjelman osien välillä ihan sellaista protokollaa kuin haluaa. Kuitenkin jos tarvitaan laajoja verkkosovelluksia, joilla on toisistaan riippumattomia toteuttajia, niin järjestelmän osien välinen kommunikointi täytyy kuvata ja dokumentoida siten, että se on kaikkien saatavilla.

Edellisellä kurssilla meillä oli jo esillä HTTP-protokollan ja IP-protokollan viestien kuvaukset. Ne ovat keskenään hyvin erilaisia, koska protokollien määrittelyt ovat hyvin erilaisia ja kyseessä on myös eri kerrosten protokollat. IP-protokollan otsake on hyvin määrämuotoinen ja jokaisen bitin merkitys on määritelty tarkasti.  HTTP-protokollan otsake puolestaan on sanallisempi ja sille onkin määritelty lähinnä syntaksi, jolla näitä erilaisia määreitä kuvataan.

Asiakkaan lähettämässä HTTP-viestissä ensimmäisellä rivillä on itse pyyntö ja rivi alkaa metodin nimellä. Palvelijan vastauksessa vastaavasti ensimmäinen rivi sisältää viestin statustiedon. Seuraavat rivit sisältävät muita pyyntöön tai vastaukseen liittyviä määrittelyjä. Kaikki nämä rivit yhdessä muodostavat viestin otsakkeen. Huomaa, että rivien lukumäärää ei ole rajoitettu. Siksi emme voikaan käyttää otsakkeen kokoa tai rivien määrää kertomaan viestin vastaanottajalle milloin viestin sisältö vaihtuu otsaketiedosta vaarsinaiseen sisältöön. Tämä vuoksi HTTP:ssä on määritelty, että varsinainen viestin sisältö alkaa yhden tyhjän rivin jälkeen.

Protokollien määrittelyä säätää aina se, että vastaanottajan ohjelman pitää pystyä päättelemään saamastaan bittijonosta eri kenttien sijainnit ja sisällöt. Sillähän ei ole mitään muuta tietoa lähettäjältä kuin tämä saamansa bittijono. Päätteleminen on helppoa, jos jokainen kenttä on tietyn mittainen ja kentät ovat aina samassa järjestyksessä. Toinen vaihtoehto on käyttää kenttien välillä jotain erotinta (merkki tai merkkiyhdistelmä, tietty bittijono), jolla vastaanottaja voi jäsentää eri kentät saamastaan bittijonosta. Vaikka emme tällä kurssilla opettelemaan protokollien ohjelmointia, niin tämän ominaisuuden ymmärtäminen voi helpottaa eri protokollien suunnittelijoin valitsemia erilaisia ratkaisuja.




<quiz id="668753b7-34b4-5d81-9abe-816a409cb16f"></quiz>


