---
path: '/osa-2/4-verkko-ohjelmointi-rajapinta'
title: 'Verkko-ohjelmointi ja sovelluksen rajapinta'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet loogiset operaatiot ja, tai, sekä ei, ja osaat käyttää niitä osana ehtolauseen lauseketta.
- Tunnet ehtolauseen suoritusjärjestyksen ja tiedät, että ehtolauseiden läpikäynti lopetetaan ensimmäiseen ehtoon, jonka lauseke evaluoituu todeksi.
- Osaat käyttää toistolauseen ehtona totuusarvon palauttavaa lauseketta, jolla päätetään jatketaanko toistoa vaiko ei.

</text-box>

Pistoke, KJ palvelut,  HTT:n päälle selaimen sisään, REST, AJAX  (Pistoke esimerkki,  entä REST esimerkki?)





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


