---
path: '/osa-1/2-kertausta'
title: 'Kertausta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- tämä osio on vain kertausta ei uusia oppimistavoitteita

</text-box>

## Osoitteet ja viestinvälitys

Internetin viestinvälitys on pakettikytkentäinen, jolloin lähettäjä aina lähettää yhten paketin (analogiana toimii kirje), jossa on sisällä siirrettä data ja se ympärillä (kirjekuorena) vastaanottajan tunnistamiseen tarvittavaa tietoa.

Internetin protokollat on sijoitettu protokollapinon eri kerroksille. Yhdellä kerroksella olevan protokollan ei pidä tietää mitä sen ala- ja yläpuolella on. Sille riittää tarkastella kyseisen protokollan lähettäjän ja vstaanottajan välistä viestien vaihtoa. Tästä automaattisesti seuraa, että kun jokainen kerro laittaa oman viestinsä omaan kirjekuoreen, niin näitä kirjekuoria on useita sisäkkäin.

<quiz id="afbefe02-8bf3-4a73-b71d-e851c2c6b59b"></quiz>

Eri kerroksilla käytetään eri osoitteita. Ne on käyty läpi edellisellä kurssilla.

<quiz id="ad711046-8a1d-4e03-8b6f-e545ee9bdcd0"></quiz>

Pakettikytkentäisen verkon yksi keskeinen piirre on, että paketti liikkuvat aina yhden välin eli etapin kerrallaan. Siksi niitä kutsutaan myös etappivälitteisiksi verkoiksi. Jokaisella välipysäkillä täytyy aina päättää mihin suuntaan paketti seuraavaksi liikahtaa. Tätä kokonaisuutta kutsutaan reititykseksi ja näitä päätöksiä tekeviä laitteita reitittimiksi silloin kun päätöksiä tehdään verkkokerroksella. Reititystä tarkastellaan vielä tällä kurssilla myöhemmin.

## Protokollat

Tietoliikenteen protokollat määrittävät viestien vaihdon toiminnallisuuden. Protokollan kuvauksessa kerrotaan siis kuka lähettää, kenelle, mitä ja millä ehdoilla.  Internetin protokollien kuvaukset ovat IETF:n RFC dokumentaatiossa. Esimerkiksi HTTP versio 2 on [https://tools.ietf.org/html/rfc7540](RFC7540). Siinä on kuvattu kaikki HTTP/2:n käyttöön tarvittavat tiedot kuten kehykset, yhteydet ja viestien vaihto. 

Kaikilla muillakin protokollilla on omat dokumentaationsa. Viralliset internetissä käytettävät protokollat on aina kuvattu RFC dokumentaatiossa. Toki kuka tahansa voi rakentaa oman verkko-ohjelman ja käyttää omien ohjelman osien välillä ihan sellaista protokollaa kuin haluaa. Kuitenkin jos tarvitaan laajoja verkkosovelluksia, joilla on toisistaan riippumattomia toteuttajia, niin järjestelmän osien välinen kommunikointi täytyy kuvata ja dokumentoida siten, että se on kaikkien saatavilla.

Edellisellä kurssilla meillä oli jo esillä HTTP-protokollan ja IP-protokollan viestien kuvaukset. Ne ovat keskenään hyvin erilaisia, koska protokollien määrittelyt ovat hyvin erilaisia ja kyseessä on myös eri kerrosten protokollat. IP-protokollan otsake on hyvin määrämuotoinen ja jokaisen bitin merkitys on määritelty tarkasti.  HTTP-protokollan otsake puolestaan on sanallisempi ja sille onkin määritelty lähinnä syntaksi, jolla näitä erilaisia määreitä kuvataan.

Asiakkaan lähettämässä HTTP-viestissä ensimmäiselle rivillä on itse pyyntö ja rivi alkaa metodin nimellä. Palvelijan vastauksessa vastaavasti ensimmäinen rivi viestin statustieto. Seuraavat rivit sisältävät  muita pyyntöön tai vastaukseen liittyviä määrittelyjä. Ne siis muodostavat viestin otsakkeen. Näiden rivien määrää ei ole rajoitettu. Varsinainen viestin sisältö alkaa yhden tyhjän rivin jälkeen. 

QUIZZ: HTTP protokollaan liittyviä kysymyksiä, jotka olleet esillä jo edellisessä osiossa (tai jotka voi selvittää helposti




