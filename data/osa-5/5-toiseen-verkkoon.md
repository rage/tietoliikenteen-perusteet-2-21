---
path: '/osa-5/6-toiseen-verkkoon'
title: 'Lähettäminen toiseen verkkoon'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kertoa mitä IP-paketin eteenpäin lähetyksessä tapahtuu verkkokerroksen ja linkkikerroksen yhteistoimintana
- Osaat kuvata miten IP-paketin käsittely reitittimen linkkikerroksella tapahtuu. Verkkokerroksen käsittely oli jo aiemmin.

</text-box>


## Paketin lähettäminen toiseen verkkoon

Olemme useammassa kohdassa kurssi tutustuneet reitittimen toimintaan eri näkökulmista. Nyt kun myös linkkikerroksen toiminnallisuus on käsitelty, niin voimme vihdoin yhdistää kaikki kurssilla käydyt teemat ja tarkastella yksityiskohtaisesti, mitä tapahtuu kun reitittimelle saapuu paketti ja se lähettää sen eteenpäin toiseen aliverkkoon.

Otetaan käyttöön 



## Yksikkötestaus



<br/>



Testimetodit toteutetaan tyypillisesti siten, että testimetodissa käytetään testattavaa yksikköä -- esimerkiksi metodia tai luokkaa -- ja sitten testataan, että testattavan yksikön palauttama syöte on toivottu. Syötteen tarkastamiseen on tällä hetkellä käytössä kolme metodia, jotka ovat seuraavat:

- `assertEquals`, joka saa kaksi parametria. Ensimmäisenä parametrina on odotettu arvo, ja toisena parametrina testattavan yksikön palauttama arvo. Metodi tuottaa JUnit-kirjaston ymmärtämän virheviestin mikäli arvot eivät ole samat eli testi ei mene läpi.

- `assertTrue`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `true`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

- `assertFalse`, joka saa yhden `boolean`-tyyppisen parametrin. Mikäli parametrina saatu arvo ei ole `false`, metodi tuottaa JUnit-kirjastolle virheviestin, joka kertoo ettei testi mennyt läpi.

