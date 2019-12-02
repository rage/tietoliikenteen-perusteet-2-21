---
path: '/osa-4/3-reititin'
title: 'Reititin'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteet luokka, olio, konstruktori, olion metodit ja olion muuttujat (eli oliomuuttujat).
- Ymmärrät että luokka määrää olion muuttujat ja metodit, ja tiedät että oliomuuttujien arvot ovat oliokohtaisia.
- Osaat luoda luokkia ja olioita ja osaat käyttää olioita osana ohjelmia.

</text-box>


Tutustuimme hetki sitten ensimmäistä kertaa termeihin olio ja luokka. Aloitamme nyt matkan olio-ohjelmoinnin pariin. Aluksi keskiössä on käsitteiden ja tiedon kuvaaminen luokkien ja olioiden avulla, jonka jälkeen tutustumme toiminnallisuuden eli metodien lisäämiseen.

Olio-ohjelmoinnissa on kyse ratkaistavassa ongelmassa esiintyvien käsitteiden eristämisestä omiksi kokonaisuuksikseen sekä näiden kokonaisuuksien käyttämistä ongelman ratkaisemisessa. Kun ongelmaan liittyvät käsitteet on tunnistettu, niistä voidaan myös keskustella. Toisin ajatellen, ratkaistavasta ongelmasta muodostetaan abstraktioita, joiden avulla ongelmaa on helpompi käsitellä.

Kun ongelmasta tunnistetaan käsitteitä, voidaan niitä vastaavia rakenteita luoda myös ohjelmaan. Näitä rakenteita ja niistä luotavia yksittäisiä ilmentymiä eli olioita käytetään ongelman ratkaisemisessa. Nyt ehkä käsittämättömältä tuntuva lausahdus **ohjelma rakennetaan pienistä selkeistä yhteistoiminnassa olevista olioista** alkaa hiljalleen kurssin edetessä tuntua järkeenkäyvältä ja jopa itsestäänselvältä.


##  Luokka ja Olio

Olemme käyttäneet jo joitakin Javan tarjoamia luokkia ja olioita. **Luokka** määrittelee olioiden ominaisuudet eli niihin liittyvät tiedot eli oliomuuttujat ja niiden tarjoamat komennot eli metodit. Oliomuuttujien arvot määrittelevät yksittäisen olion sisäisen tilan ja metodit taas olion tarjoamat toiminnallisuudet. **Olio** luodaan luokkaan kirjoitetun määrittelyn perusteella. Samasta luokasta voidaan luoda useampia olioita, joilla jokaisella on eri tila eli jokaisella on omat oliomuuttujien arvot. Jokaisella oliolla on myös metodit, jotka olion luomiseen käytetyssä luokassa on määritelty.

**Metodi** on luokkaan kirjoitettu lähdekoodista koostuva kokonaisuus, jolle on annettu nimi, ja jota voidaan kutsua. Metodi liittyy aina tiettyyn luokkaan, ja sitä käytetään usein luokasta tehdyn olion sisäisen tilan muokkaamiseen.

Esimerkiksi `Scanner` on Javan tarjoama luokka, josta luotuja olioita olemme hyödyntäneet ohjelmissamme. Alla ohjelmassa luodaan Scanner-olio nimeltä `lukija`, jota käytetään kokonaislukumuuttujien lukemiseen.


```java
// luodaan Scanner-luokasta olio, jonka nimeksi tulee lukija
Scanner lukija = new Scanner(System.in);

while (true) {
    int luku = Integer.valueOf(lukija.nextLine());

    if (luku == 0) {
        break;
    }

    System.out.println("Luettu " + luku);
}
```


Luokasta luodaan olio aina kutsumalla olion luovaa metodia eli **konstruktoria** komennon `new` avulla. Esimerkiksi `Scanner`-luokasta luodaan uusi ilmentymä eli olio kun kutsutaan `new Scanner(..)`. Konstruktorit saavat parametreja kuten muutkin metodit.


<text-box variant='hint' name='Luokan ja olion suhde'>

Luokka kuvaa siitä luotavien olioiden "rakennuspiirustukset". Otetaan analogia tietokoneiden ulkopuoleisesta maailmasta. Rintamamiestalot lienevät monille tuttuja. Voidaan ajatella, että jossain on olemassa piirustukset jotka määrittelevät minkälainen rintamamiestalo on. Piirrustukset ovat luokka, eli ne määrittelevät minkälaisia olioita luokasta voidaan luoda:

<img src="../img/rintamamiestalo-rakennuspiirrustus.jpg"/>

Yksittäiset oliot eli rintamamiestalot on tehty samojen piirustusten perusteella, eli ne ovat saman luokan ilmentymiä. Yksittäisten olioiden tila eli ominaisuudet (esim. seinien väri, katon rakennusmateriaali ja väri, kivijalan väri, ovien rakennusmateriaali ja väri, ...) vaihtelevat. Seuraavassa yksi "rintamamiestalo-luokan olio":

<img src="../img/rintamamiestalo.jpg" />

</text-box>


<programming-exercise name='Ensimmäinen tilisi' tmcname='osa04-Osa04_11.EnsimmainenTilisi'>

Tehtäväpohjan mukana tulee valmis luokka `Tili`. Luokan `Tili` olio esittää pankkitiliä, jolla on saldo (eli jossa on jokin määrä rahaa). Tilejä käytetään näin:

```java
Tili artonTili = new Tili("Arton tili", 100.00);
Tili artonSveitsilainenTili = new Tili("Arton tili Sveitsissä", 1000000.00);

System.out.println("Alkutilanne");
System.out.println(artonTili);
System.out.println(artonSveitsilainenTili);

artonTili.otto(20);
System.out.println("Arton tilin saldo on nyt: " + artonTili.saldo());
artonSveitsilainenTili.pano(200);
System.out.println("Arton toisen tilin saldo on nyt: " + artonSveitsilainenTili.saldo());

System.out.println("Lopputilanne");
System.out.println(artonTili);
System.out.println(artonSveitsilainenTili);
```

Tee ohjelma, joka luo tilin jonka saldo on 100.0, panee tilille 20.0 ja tulostaa tilin. **Huom!** tee kaikki nämä operaatiot täsmälleen tässä järjestyksessä.

</programming-exercise>


<programming-exercise name='Ensimmäinen tilisiirtosi' tmcname='osa04-Osa04_12.EnsimmainenTilisiirtosi'>

Tässäkin tehtävässä on käytössä edellisessä tehtävässä mukana ollut luokka `Tili`.

Tee ohjelma joka:

1. Luo tilin nimeltä `"Matin tili"` saldolla 1000
2. Luo tilin nimeltä `"Oma tili"` saldolla 0
3. Nostaa matin tililtä 100.0
4. Panee omalle tilille 100.0
5. Tulostaa molemmat tilit

</programming-exercise>


## Luokan luominen

**Luokka määrittelee** minkälaisia luokasta luotavat oliot ovat:

- **olion muuttujat** määrittelevät minkälainen olion sisäinen tila on
- **olion metodit** määrittelevät mitä toiminnallisuuksia olio tarjoaa



