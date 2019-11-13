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

## Protokollien mallinnuksesta

Protokollia voidaan mallintaa monella eri tavalla ja menetelmällä. Protokollien mallintamiseen on kehitetty useita erilaisia mallinnuskieliä. Tällä kurssilla tarkastellaan kuitenkin protokollien mallintamistan yksikertaisten [äärellisten automaattien](https://fi.wikipedia.org/wiki/%C3%84%C3%A4rellinen_automaatti)avulla. Näistä voidaan käyttää myös nimitystä tila-automaatti. Niissä on tiloja ja niiden välisiä siirtymiä.  Automaatti pysyy yhdessä tilassa, kunnes tilasiirtymään liittyvän tapahtuman perusteella se siirtyy seuraavaan tilaan. Tilat voidaan numeroida, jos se helpottaa automaatin toiminnan seurantaa. Tämän kurssin kuvissa jätän numeroinnin pois. Tapahtumat täytyy nimetä, jotta niiden esiintyminen voidaan havaita.

Tietoliikenteessä meidän täytyy mallintaa sekä lähettäjä että vastaanottaja, joten kyseessä on aina kahden automaatin yhteistoiminta. Lähettäjä tai vastaanottaja ovat aina jossain tilassa odottamassa jotain tapahtumaa, jonka seurauksena mallinnetun automaatin tila voi vaihtua seuraavaan. Tietoliikenteen automaateissa tyypilliset tapahtumat ovat joko viestin lähetyksiä, jotka merkitään miinus-merkillä, tai viestin vastaanottoja, jotka merkitään plus-merkillä. Tarvittaessa voidaan ottaa käyttöön myös muita tapahtumia, jotka ovat kyseisen protokollan toiminnan kannalta tarpeellisia, esimerkiksi ajastimen asettaminen ja/tai sen laukeaminen.

## Yksinkertainen kuljetuspalvelu (ei kuittauksia)

Lähettäjällä kuljetuspalvelu saa sovelluskerrokselta välitettävän viestin (kuvassa +send(k)) ja lähettää sen vastaanottajalle (kuvassa -m(k)). Vastaanottajalla kuljetuspalvelu vastaanottaa viestin (kuvassa +m(k)) ja toimittaa sen edelleen sovelluskerrokselle (kuvassa (-receive(k)). Kuten huomaat, niin merkitsemme aina automaatin lähettämiä viestejä miinus-merkillä ja vastaanottamia viestejä plus-merkillä. Näin toimitaan, vaikka toinen osapuoli ei olikaan tietoliikenneverkon takana. Tässähän send ja receive ovat tapahtumia, joiden avulal kuljetuspalvelu kommunikoi sovelluskerroksen prosessin kanssa.

<img src="../img/protokolla-ideaali-tilanne.svg" alt="Kuvassa on kaksi automaattia, toinen on lähettäjän ja toinen vastaanottajan. Lähettäjän automaatissa on kaksi tilaa. Siirtymä tilasta 1 tilaan kaksi on +send(k) ja siirtymä tilasta kaksi tilaan yksi on -m(k). Vastaanottajan automaatissakin on kaksi tilaa. Vastaanottajalla siirtymä tilasta 1 tilaan 2 on +m(k) ja siirtymä tilasta 2 tilaan 1 on -receive(k)."/>
KUVA: Kuljetuspalvelun tila-automaatti, kun kanava ei tee mitään virheitä. Tämä on siis ideaalisen kuljetuspalvelun tila-automaatti.

Koska tietoliikenteessä yleensä toiminnot liittyvät nimenomaan näihin tilasiirtymiin kahden tilan välillä, on tilasiirtymä mahdollista kirjoittaa automaattiin myös kaksiosaisena, jossa yläpuolinen osa on ehto siirtymän tekemiselle ja alapuolinen osa on toiminto, jonka automaatti tekee siirtymän aikana. Tällaisia automaatteja kutsutaan Mealyn automaateiksi (engl. [Mealy Machine](https://en.wikipedia.org/wiki/Mealy_machine)). Näin tilojen määrä saadaan pienemmäksi ja ehtona olevan tapahtuman (yleensä saapuva viesti) vaikutus näkyy minusta selkeämmin. Siksi käytän tätä merkintätapaa jatkossa.

Piirretään tuo edellisen kuvan automaatti uudelleen, mutta nyt tällä ehto/toiminto -siirtymällä. Tällöin sekä lähettäjälle että vastaanottajalle jää enää yksi tila.

<img src="../img/protokolla-ideaali-tilanne-yksi-tila.svg" alt="Kuvassa on kaksi automaattia, toinen on lähettäjän ja toinen vastaanottajan. Kummallakin on nyt vain yksi tila, jossa on yksi siirtymä itseensä. Lähettäjällä siirtymä on muotoa +send(k)/-m(k) ja vastaanottajalla muotoa +m(k)/-receive(k)."/>
KUVA: Lähettäjällä ja vastaanottajalla on kummallakin vain yksi tila ja siirtymä tästä tilasta itseensä. Lähettäjällä siirtymä on muotoa +send(k)/-m(k) ja vastaanottajalla muotoa +m(k)/receive(k).

Tällainen kuljetuspalvelu toimii oikein, kun voimme luottaa siihen, että viesti m lähettäjältä vastaanottajalle menee aina perille ja että peräkkäiset viestit menevät perille samassa järjestyksessä kuin ne on lähetetty. Kanava ei siis tee mitään virheitä viestin välitykseen. Koska todellisuudessa kanava ei ole näin luotettava, on kuljetuspalvelun toiminnassa otettava huomioon kanavan aiheuttamat ongelmat.


## Yksinkertainen kuljetuspalvelu, jossa kuittaukset

Kun oletetaan, että viestejä kuljettava kanava voi kadottaa yksittäisen viestin, on kuljetuspalvelun varmistuttava siitä, että jokainen lähetty viesti menee perille vastaanottajalle. Tähän käytetään yleensä kuittauksia eli vastaanottaja lähettää kuittausviestin, jolla se kertoo lähettäjälle saaneensa viestin.

<img src="../img/protokolla-ideaali-tilanne-yksi-tila.svg" alt="Lähettäjällä on nyt kaksi tilaa ja siirtymät niiden välillä. Ensimmäinen siirtymä on kuten edellisessä kuvassa +send/-m ja toinen siirtymä on +ack. Vastaanottajalla on edelleen yksi tila, mutta sen siirtymä itseensä on nyt muotoa +m /(-receive, -ack).">
KUVA: Nyt lähettäjän pitää jokaisen viestin lähetyksen jälkeen vastaanottaa kuittaus (+ack) ennen kuin se voi lähettää seuraavan viestein. Vastaanottajakin lähettää kuittauksen jokaisen viestin vastaanoton jälkeen.

Tämän automaatin ongelma on se, että se kyllä havaitsee, kun viesti ei ole mennyt perille, mutta se ei osaa toipua tästä tilanteesta.
JOtta toipuminen on mahdollista, niin meidän täytyy lisätä automaattiin lähettäjälle mahdollisuus lähettää viesti uudelleen, jos kuittaus ei tule tietyn ajan kuluessa. Tämä voidaan tehdä yksinkertaisesti yhdellä lisäsiirtymällä +timeout/-m. Mieti hetki kumpaan lähettäjän tilaan tämän siirtymä tarvitaan.

Nyt yksittäinen viesti voi kadota ja lähettäjä osaa lähettää sen uudelleen. Protokollamme toimii oikein, jos kanaa voi taata, että viesti menee varmasti perille tietyssä ajassa. Käytännössä tällaista aikatakuuta kanava ei voi antaa, joten on mahdollista, että yksittäinen sanoma viivästyy niin paljon, että lähettäjä ehtii lähettämäään sen uudelleen. Tällöin vastaanottaja saa saman viestein kahteen kertaan. Koska edellisen kuvan automaatissa lähettäjä lähettää kuittauksen kaikille saapuneille viesteille se kuittaa tämän viestin uudelleen. Tällainen tuplakuittaus voi aiheuttaa ongelmia.

Kun lähettäjä saa kuittauksen tilassa 2 se olettaa kuittauksen koskevan juuri lähettämäänsä viestiä. Jos kuittaus kuitenkin koski jotain aiempaa viestiä, saattaa tämä lähetetty viesti jäädä pois välistä. Tämän korjaamiseksi meidän täytyy numeroida lähetetyt viestit. Katsotaan numerointia seuraavaksi.

Toisaalta, jos lähettäjä on tilassa 1 (odottamassa viestiä sovelluskerrokselta), niin yllä kuvattu automaatti voi jopa lopettaa toimintansa virhetilaan, koska automaatille ei ollut kuvattu mahdollisuutta vastaanottaa kuittausviestiä tässä tilassa.


KUVA:   Sitten aikaperustainen kaavakuva, jossa yksi viesti katoaa!!!!  - Piirrä käsin



## Vuorottelevan bitin protokolla

Jotta peräkkäiset viestit voidaan erottaa toisistaan ne tyypillisesti numeroidaan ja kuittausviestissä kerrotaan sitten tämä viestin numero. Näin vastaanottaja voi havaita yksittäisen viesti katoamisen ja raportoida tästä lähettäjälle. Lähettäjä voi sitten lähettää tämän kadonneen viestin uudelleen. Koska haluamme pitää automaatin äärellisenä, niin emme voi käyttää ääretöntä viestien nuemrointia. Äärettömällä automaatilla olisi äärettömän monta tilaa ja sen analysointi olisi haastavaa. 

Yksinkertaisimmillaan riittää, että numeroimme peräkkäiset viestit toistaan poikkeavasti. Tähän riittää yksi bitti, jonka arvo on joko 0 tai 1. Kun näitä kahta arvoa vuorotellaan saadaan kaksi peräkkäistä viestiä numeroitua toisistaan poikkeavasti. Tästä tulee tuo perinteinen nimi vuorottelevan bitin protokolla (engl. [alternating bit protocol](https://en.wikipedia.org/wiki/Alternating_bit_protocol). Tästä käytetään yleisesti myös nimitystä stop-and-wait protokolla https://en.wikipedia.org/wiki/Stop-and-wait_ARQ

Oletaan tässä vielä, että kuljetuskerroksella on aina jotain lähetettävää ja jätetään sovelluskerrokselta tulevat viestit ja sinne toimitettavat viestit pois mallista. Tällainen asioiden lisääminen ja poistaminen on mallinnuksen vahvuus. Meidän tarvitsee ottaa mukaan vain ne toiminnat, joita halutaan tarkastella. Muu toiminnallisuus jätetään pois, jotta malli pysyy mahdollisimman yksinkertaisena.

KUVA. Kattava automaatti, joka huolehtii näistä.

Aikakatkaisua (engl. timeout) käytetään tietoliikenteessä keskeyttämään lähettäjän odotus. Jos lähettäjän lähettämä viesti tai siihen liittyvä kuittaus katoaa matkalla ei lähettäjä saa tästä mitään tietoa. Jotta lähettäjä voisi reagoida tähän katoamiseen on lähettäjän viestin odotus ensin keskeytettävä [ajastimen](https://fi.wikipedia.org/wiki/Ajastin) avulla.  Lähettäjä siis asettaa ajastimen tekemään keskeytys sopivan ajan kuluttua. Keskeytykset ja niiden toiminta on käsitelty tietokoneen toiminta -kurssilla.





VIDEO: Jossa tämä tarina kuvattuna  laajenevana automaattina.


Tehtävä:  Simulointi tilanteessa, jossa viestien järjestys voi vaihtua. Anna viesti jono ja pyydä vastauksena tila, johon lähettäjä päätyy, vastaanottaja päätyy. Mikä viesti jää pois oikealta paikaltaan, jne....


Tehtävä, jossa annetaan automaatti, johon pitää täydentää tarvittavat toiminnallisuudet  (eli osa toiminnoista on X,Y,Z, jne) ja vaihtoehdot tehtävässä
