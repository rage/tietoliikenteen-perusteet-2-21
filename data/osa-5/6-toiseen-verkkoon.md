---
path: '/osa-5/6-toiseen-verkkoon'
title: 'Lähettäminen toiseen verkkoon'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet termin yksikkötestaus.
- Tutustut yksikkötestien kirjoittamiseen JUnit-kirjaston avulla.

</text-box>

Otimme kurssimateriaalin kolmannessa osassa alkuaskeleet ohjelmien automaattiseen testaamiseen. Kirjoitimme kurssimateriaalin apuvälineen kanssa tehtävänannot sekä testejä kahteen ohjelmaan.

Jatketaan nyt saman teeman parissa. Tällä kertaa, sen sijaan että testikoodi luodaan valintojen perusteella, kirjoitamme testikoodin itse.


## Yksikkötestaus

Yksikkötestauksen idea on kirjoittaa ohjelman yksittäisille osille kuten yksittäiselle metodille automaattiset -- eli suoritettavat -- testit, ja tarkastaa testien avulla että metodi toimii halutulla tavalla. Yksikkötestausta varten on Javalle useita valmiita kirjastoja, joista tällä kurssilla käytämme <a href="https://junit.org/junit4/" target="_blank">JUnit</a>-nimisen kirjaston neljättä versiota.

<br/>

Käytämme yhä kolmannesta osasta tuttua harjoitusympäristöä. Tälläkin kertaa itse ohjelma on olemassa ja tehtävänäsi on kirjoittaa ohjelman tehtävänanto, testit sekä ohjelman toiminnallisuutta kuvaava avainsana.

Tällä kertaa työvälineessä ei ole valmiita laatikoita, joihin kirjoitat syötteet ja odotetut tulosteet, vaan pääset kirjoittamaan konkreettista testikoodia. JUnit-kirjastolla kirjoitettavat testit kirjoitetaan metodeina, joiden yläpuolella on aina `@Test`-annotaatio. Tämä `@Test`-annotaatio kertoo JUnit-kirjastolle, että kyseessä on suoritettava testi.

Testimetodit toteutetaan tyypillisesti siten, että testimetodissa käytetään testattavaa yksikköä -- esimerkiksi metodia tai luokkaa -- ja sitten testataan, että testattavan yksikön palauttama syöte on toivottu. Syötteen tarkastamiseen on tällä hetkellä käytössä kolme metodia, jotka ovat seuraavat:

- `assertEquals`, joka saa kaksi parametria. Ensimmäisenä parametrina on odotettu arvo, ja toisena parametrina testattavan yksikön palauttama arvo. Metodi tuottaa JUnit-kirjaston ymmärtämän virheviestin mikäli arvot eivät ole samat eli testi ei mene läpi.

- `assertTrue`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `true`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

- `assertFalse`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `false`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

Testattavien luokkien nimi on työvälineessä toistaiseksi `Submission`.


