---
path: '/osa-3/4-vaihtoehtoja'
title: 'Suunnitteluperiaatteita'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- tunnistat mitä suunnitteluperiaatteita protokolla noudattaa.
- Osaat arvoida miten protokollan toiminnassa on otettu huomioon tiettyjä suunnitteluperiaatteita.

</text-box>


## Protokollan suunnittelussa huomioitavaa

Aina kun suunnittelemme protokollaa tai selvitämme jonkun protokollan toimintaa, on hyvä muistaa, että kaikkien protokollien toiminnassa on paljon yhteisiä piirteitä ja toki myös paljon eroja. Keskitytään tässä protokollien yleisiin piirteisiin.

Nyt kun olemme tutustuneet protokollien mallinnukseen ja kuljetuskerroksen protokollien tavoitteisiin, on aika käydä systemaattisemmin läpi protokollien yleiset piirteet eli niiden suhtautuminen viestien oikeellisuuteen, katoamiseen ja siihen liittyviin kuittauksiin ja ajastimiin sekä viestien järjestyksen hallintaan eli järjestysnumeroihin.

## Oikeellisuustarkistus

Koska viestin kuljetuksessa lähettäjältä vastaanottajalle on aina riski esimerkiksi bittivirheille, on protokollan tehtävä huolehtia mahdollisesta viestin oikeellisuuden tarkistuksesta. Kuljetuskerroksen protokolla voi toki jättää viestin oikeellisuuden tarkistamisen kerroksen protokollan tehtäväksi, mutta yleensä jokainen kerros vastaa vähintään oman otsakkeensa oikeellisuuden tarkistuksesta.

Viestin muuttumattomuus voidaan tarkistaa joko pelkästään virheen havaitsemalla menetelmällä tai menetelmällä, joka voi tarvittaessa myös korjata virheen. Lähettäjä laskee tarvittavan lisätiedon osaksi viestiä ja vastaanottaja tarkistaa, että viesti ei ole muuttunut laskemalla tämän tiedon uudelleen ja vertaamalla sitä viestin mukana tuleeseen tietoon.

Viestin tarkistaminen edellyttää aina tämän lisätiedon eli [tarkistussumman](https://fi.wikipedia.org/wiki/Tarkistussumma) lisäämistä viestiin. Tarkistussummalle varataan kiinteänkokoinen osa protokollan viestistä. Tarkistussumman laskentaan ja tarkistamiseen on tarjolla useita erilaisia menetelmiä. 

Jos tyydytään virheen havaitsemiseen, niin silloin ainoa vaihtoehto on hävittää vioittunut paketti. Mikä tahansa laite joka vastaanottaa paketin, jonka tarkistussumma ei vastaanottajalla enää vasta viestin sisältöä, hävittää tällaisen paketin. Virheen havaitsemiseen voidaan käyttää ainakin jotain seuraavista:
* [pariteetti](https://fi.wikipedia.org/wiki/Pariteetti_(tietotekniikka)) on näistä menetelmistä yksinkertaisin ja se voidaan laskea joko bitti tai tavutasolla.
* yhteenlaskuun perustuva tarkistussumma, kuten UDP:n tarkistussumma.
* [tiiviste](https://fi.wikipedia.org/wiki/Tiiviste_(tietotekniikka)) voidaan laskea monella erilaisella tiivistefunktiolla tai tiivistealgoritmilla.

Jos halutaan havaitsemisen lisäksi myös tarvittaessa korjata vikaantunut viesti, niin viestin mukana täytyy kuljettaa enemmän tarkistusinformaatiota, jotta korjaaminen onnnistuu. Virheenkorjaukseenkin https://fi.wikipedia.org/wiki/Virheenkorjauskoodi on tarjolla paljon erilaisia menetelmiä, kuten Hamming-koodi. Näitä ei useinkaan käytetä tietoliikenteen ylemmillä kerroksilla, koska viestit ovat varsin suuria ja virheenkorjauksen vaatima lisätila olisi tarpettoman suuri hyötyyn nähden. 

Yksittäisten protokollien käyttämiin menetelmiin tutustutaan näiden protokollien yhteydessä.

## Kuittaukset

Positiiviset ACK, tuplakuittaukset
Negatiiviset NAK

## Ajastin

##  Järjestysnumero
Uudelleenlähetys vai uusi paketti

Ikkunat, liukuhihnoitus
