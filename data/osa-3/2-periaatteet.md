---
path: '/osa-3/2-periaatteet'
title: 'Luotettavan kuljetuspalvelun periaatteet'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>


- Osaat mallintaa yksinkertaisen protokollan toiminnan.
- Osaat arvioidan protokollan toiminnallisuutta käsin simuloimalla mallia.

</text-box>

Tämä on kurssin teoreettisin osio. Käytä tähän riittävästi aikaa, jotta oikeasti ymmärrät protokollien suunnitteluun liittyviä periaatteita ja protokollien oikeellisuuden haasteita. Varsinainen äärellisten automaattien ja tilasiirtymäjärjestelmien taustalla oleva teoria käsitellään myöhemmin kurssilla Laskennan mallit. Varsinaiset protokollien verifiointimenetelmät eivät kuulu kandidaatintutkinnon sisältöön.


## Yksinkertainen kuljetuspalvelu  (ei kuittauksia)

Lähettäjällä kuljetuspalvelu saa sovelluskerrokselta välitettävän viestin (kuvassa send(k)) ja lähettää sen vastaanottajalle (kuvassa -m(k)). Vastaanottajalla kuljetuspalvelu vastaanottaa viestin (kuvassa +m(k)) ja toimittaa sen edelleen sovelluskerrokselle (kuvassa (receive(k)). Kuten huomaat, niin merkitsemme verkkoon lähetettäviä viestiä miinus-merkillä ja verkosta vastaanotettavia viestejä plus-merkillä.

KUVA:  Lähettäjällä ja vastaanottajalla kaksi tilaa, joiden välillä vain nuo neljä siirtymää.

Koska tietoliikenteessä yleensä toiminnot liittyvät nimenomaan näihin tilasiirtymiin kahden tilan välillä, on tila siirtymä mahdollista kirjoittaa automaattiin myös kaksiosaisena, jossa yläpuolinen osa on ehto siirtymän tekemiselle (ms. Mealyn automaatteina, wikipedia (engl.) https://en.wikipedia.org/wiki/Mealy_machine). Näin tilojen määrä saadaan pienemmäksi ja syötteen (=saapuvan viestin vaikutus) näkyy minusta selkeämmin. Siksi käytän tätä merkintätapaa jatkossa.

Katsotaan siis esimerkkinä tuota äskeistä kuvaa, mutta tällä ehto/toiminto -siirtymällä.

KUVA: Lähettäjällä ja vastaanottajalla on kummallakin vain yksi tila ja siirtymä tästä tilasta itseensä. Lähettäjällä siirtymä on muotoa send(k)/-m(k) ja vastaanottajalla muotoa +m(k)/receive(k).

Tällainen kuljetuspalvelu toimii oikein, kun voimme luottaa siihen, että viesti m lähettäjältä vastaanottajalle menee aina perille ja että peräkkäiset viestit menevät perille samassa järjestyksessä kuin ne on lähetetty.

vastaanottajalla taas sovelluskerrokselle. Tällainen kuljetuspalvelun toiminnallisuus on helppo mallintaa lähettäjän ja vastaanottajan tilasiirtyminä.

## Yksinkertainen kuljetuspalvelu, jossa kuittaukset

Kuljetuspalveluspalvelun täytyy jollain tavalla varmistaa, että viestit menevät perille. Tähän käytetään yleensä kuittauksia eli vastaanottaja kuittaa lähettäjälle saaneensa viestin.

KUVA: Äskeiseen kuvaan mukaan kuittaukset eli kumpaankin automaattiin toinen tila, josta palataan ensimmäiseen kuittausviestin lähetyksellä tai vastanotolla.

Valitettavasti tällainen yksinkertainen viestin kuittaus ei vielä auta lähettäjää varmistumaan siitä, että kaikki viestit ovat menneet perille.

KUVA:   Sitten aikaperustainen kaavakuva, jossa yksi viesti katoaa!!!!

## Vuorottelevan bitin protokolla

Jotta peräkkäiset viestit voidaan erottaa toisistaan ne tyypillisesti numeroidaan ja kuittausviestissä kerrotaan sitten tämä viestin numero. Näin yksittäinen katoava viesti voidaan tunnistaa. Kuljetuskerros voi sitten lähettää tämän kadonneen viestin uudelleen.

Aikakatkaisua (engl. timeout) käytetään tietoliikenteessä keskeyttämään lähettäjän odotus. Jos lähettäjän lähettämä viesti tai siihen liittyvä kuittaus katoaa matkalla ei lähettäjä saa tästä mitään tietoa. Jotta lähettäjä voisi reagoida tähän katoamiseen on lähettäjän viestin odotus ensin keskeytettävä [ajastimen](https://fi.wikipedia.org/wiki/Ajastin) avulla.  Lähettäjä siis asettaa ajastimen tekemään keskeytys sopivan ajan kuluttua. Keskeytykset ja niiden toiminta on käsitelty tietokoneen toiminta -kurssilla.


KUVA. Kattava automaatti, joka huolehtii näistä.


VIDEO: Jossa tämä tarina kuvattuna  laajenevana automaattina.
