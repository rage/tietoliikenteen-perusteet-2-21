---
path: '/osa-2/4-verkko-ohjelmointi-rajapinta'
title: 'Verkko-ohjelmointi ja sovelluksen rajapinta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet loogiset operaatiot ja, tai, sekä ei, ja osaat käyttää niitä osana ehtolauseen lauseketta.
- Tunnet ehtolauseen suoritusjärjestyksen ja tiedät, että ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka lauseke evaluoituu todeksi.
- Osaat käyttää toistolauseen ehtona totuusarvon palauttavaa lauseketta, jolla päätetään jatketaanko toistoa vaiko ei.

</text-box>

Pistoke, KJ palvelut,  HTT:n päälle selaimen sisään, REST, AJAX  (Pistoke esimerkki)

## Verkkosovelluksen rajapinta

Perinteisesti internetin protokollapinon sovelluskerros on ollut verkkosovellusten oma asia ja niiden rajapinta tietoliikenteeseen on ollut kuljetuskerroksen tarjoamat palvelut, joita sovelluskerroksen prosessi on saanut käyttöjärjestelmältä erityisten pistokkeiden (engl. socket) kautta.

Nykyään yhä useammat verkkopalvelut on toteutettu verkkoselaimen ja www-palvelun kautta. Tällöin käyttäjän koneessa ei sovelluksella ole enää omaa erillistä prosessia, vaan sitä suoritetaan selainprosessilla ja verkkosivujen kuvausten kautta. Tällaiset websovellukset on usein toteutettu javascript-kielellä ja niillä on omat erilliset toteutusrajapintansa.  Internetin protokollapinossa ne 'piiloutuvat' sovelluskerrokselle. Tällaisen www-palvelun päällä toimivat websovelluksen tietoliikenne tapahtuu HTTP-protokollalla, kuten selaimen ja www-palvelimen välinen liikenne normaalistikin tapahtuu. Selain siis noutaa tällaisen selaimessa suoritettavan verkkosivun www-palvelimelta ja tarvittavat viestien vaihdot selaimessa toimivan asiakasosan ja palvelimella toimivan palvelinsovelluksen välillä tapahtuu HTTP-viesteinä. Jos tämä teema kiinnostaa, niin silloin kannatta seuraavaksi suunnata kurssille [web-palvelinohjelmointi](https://courses.helsinki.fi/fi/tkt21007) , jossa opit nimenomaan tekemään sovelluksia web-ympäristössä.

Tällä kurssilla tutustutaan hiukan tarkemmin pistokkeisiin ja niiden käyttöön. Varsinaista verkko-ohjelmointia emme tällä kurssilla kuitenkaan tee. Helsingin yliopiston tutkinto-opiskelijat voivat osallistua valinnaiselle kurssille [Network Programming] (https://courses.helsinki.fi/fi/tkt21026), jossa opiskellaan verkkosovellusten tekoa nimenomaan tämän rajapinnan kanssa.


## Pistokkeet



Materiaalin esimerkeissä ja tehtävissä käytetyt ehtolauseet ovat tähän mennessä käyttäneet yksinkertaisia lausekkeita, joilla on tarkasteltu ehtolauseeseen ja toistolauseeseen liittyvän lähdekoodin suorittamista. Esim.

```java
int luku = 10;

if (luku == 0) { // lauseke
    System.out.println("Suoritetaan jos luku == 0 on totta");
}
```



Ehtolauseen lauseke voi koostua useammasta osasta, joissa käytetään loogisia operaatioita **ja** `&&`, **tai** `||`, sekä **ei** `!`.

* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään ja-operaatiolla, on totta jos ja vain jos yhdistettävistä lausekkeista molemmat evaluoituvat todeksi.
* Kahdesta lausekkeesta koostuva lauseke, joka yhdistetään tai-operaatiolla, on totta jos jompikumpi tai molemmat yhdistettävistä lausekkeista evaluoituvat todeksi.
* Loogista operaatiota ei käytetään totuusarvon muuntamiseen truesta falseksi tai falsesta trueksi.



| luku  | luku > 0  | luku < 10  | luku > 0 && luku < 10  | !(luku > 0 && luku < 10)  | luku > 0 \|\| luku < 10  |
| ----- | --------- | ---------- | ---------------------- | ------------------------- | ---------------------- |
| -1    | false     | true       | false                  | true                      | true                   |
| 0     | false     | true       | false                  | true                      | true                   |
| 1     | true      | true       | true                   | false                     | true                   |
| 9     | true      | true       | true                   | false                     | true                   |
| 10    | true      | false      | false                  | true                      | true                   |


