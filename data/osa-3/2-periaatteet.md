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

Protokollia voidaan mallintaa monella eri tavalla ja menetelmällä. Protokollien mallintamiseen on kehitetty useita erilaisia mallinnuskieliä. Tällä kurssilla tarkastellaan kuitenkin protokollien mallintamista yksikertaisten [äärellisten automaattien](https://fi.wikipedia.org/wiki/%C3%84%C3%A4rellinen_automaatti) avulla. Näistä voidaan käyttää myös nimitystä tila-automaatti, koska niissä on tiloja ja tilojen välisiä tilasiirtymiä.  Automaatti pysyy yhdessä tilassa, kunnes tilasiirtymään liittyvän tapahtuman perusteella se siirtyy seuraavaan tilaan. Tilat ja tapahtumat voidaan nimetä tai numeroida vapaasti.

Tietoliikenteessä meidän täytyy mallintaa sekä lähettäjä että vastaanottaja, joten kyseessä on aina kahden automaatin yhteistoiminta. Lähettäjän ja vastaanottajan automaatit ovat aina jossain tilassa odottamassa tiettyä tapahtumaa, jonka seurauksena mallinnetun automaatin tila voi vaihtua seuraavaan. Yhdestä tilasta voi olla useita siirtymiä, joihin liittyy eri tapahtumat. 

Tietoliikenteen tila-automaateissa tyypilliset tapahtumat ovat joko viestin lähetyksiä, jotka merkitään miinus-merkillä, tai viestin vastaanottoja, jotka merkitään plus-merkillä. Nämä merkinnät on helppo muistaa kun ajattelee, että sanoman lähettäminen vähentää jotain ja sanoman vastaanottaminen vastaavasti lisää. Tarvittaessa voidaan ottaa käyttöön myös muita tapahtumia, jotka ovat kyseisen protokollan toiminnan kannalta tarpeellisia, esimerkiksi ajastimen asettaminen ja/tai sen laukeaminen.

## Yksinkertainen kuljetuspalvelu (ei kuittauksia)

Lähettäjällä kuljetuspalvelu saa sovelluskerrokselta välitettävän viestin (kuvassa +send) ja lähettää sen vastaanottajalle (kuvassa -m). Vastaanottajalla kuljetuspalvelu vastaanottaa viestin (kuvassa +m) ja toimittaa sen edelleen sovelluskerrokselle (kuvassa (-receive). Kuten huomaat, niin merkitsemme aina automaatin lähettämiä viestejä miinus-merkillä ja vastaanottamia viestejä plus-merkillä. Näin toimitaan, vaikka toinen osapuoli ei olikaan tietoliikenneverkon takana. Tässähän send ja receive ovat tapahtumia, joiden avulla kuljetuspalvelu kommunikoi sovelluskerroksen prosessin kanssa.

<img src="../img/protokolla-ideaali-tilanne.svg" alt="Kuvassa on kaksi automaattia, toinen on lähettäjän ja toinen vastaanottajan. Lähettäjän automaatissa on kaksi tilaa: L1 j L2. Siirtymä tilasta L1 tilaan L2 on +send ja siirtymä tilasta L2 tilaan L1 on -m. Vastaanottajan automaatissakin on kaksi tilaa V1 ja V2. Vastaanottajalla siirtymä tilasta V1 tilaan V2 on +m ja siirtymä tilasta V2 tilaan V1 on -receive."/>
KUVA: Kuljetuspalvelun tila-automaatti, kun kanava ei tee mitään virheitä. Tämä on siis ideaalisen kuljetuspalvelun tila-automaatti.

Koska tietoliikenteessä yleensä toiminnot liittyvät nimenomaan näihin tilasiirtymiin kahden tilan välillä, on tilasiirtymä mahdollista kirjoittaa automaattiin myös kaksiosaisena, jossa yläpuolinen osa on ehto siirtymän tekemiselle ja alapuolinen osa on toiminto, jonka automaatti tekee siirtymän aikana. Tällaisia automaatteja kutsutaan Mealyn automaateiksi (engl. [Mealy Machine](https://en.wikipedia.org/wiki/Mealy_machine)). Näin tilojen määrä saadaan pienemmäksi ja ehtona olevan tapahtuman (yleensä saapuva viesti) vaikutus näkyy minusta selkeämmin. Siksi käytän tätä merkintätapaa jatkossa.

Piirretään tuo edellisen kuvan automaatti uudelleen, mutta nyt tällä ehto/toiminto -siirtymällä. Tällöin sekä lähettäjälle että vastaanottajalle jää enää yksi tila.

<img src="../img/protokolla-ideaali-tilanne-yksi-tila.svg" alt="Kuvassa on kaksi automaattia, toinen on lähettäjän ja toinen vastaanottajan. Kummallakin on nyt vain yksi tila L1 ja V1, jossa on yksi siirtymä itseensä. Lähettäjällä siirtymä on muotoa +send/-m ja vastaanottajalla muotoa +m/-receive."/>
KUVA: Lähettäjällä ja vastaanottajalla on kummallakin vain yksi tila ja siirtymä tästä tilasta itseensä. Lähettäjällä siirtymä on muotoa +send/-m ja vastaanottajalla muotoa +m/receive.


Tällainen kuljetuspalvelu toimii oikein vain, kun voimme luottaa siihen, että viesti m lähettäjältä vastaanottajalle menee aina perille ja että peräkkäiset viestit menevät perille samassa järjestyksessä kuin ne on lähetetty. Kanava ei siis tee mitään virheitä viestin välitykseen. Koska todellisuudessa kanava ei ole näin luotettava, on kuljetuspalvelun toiminnassa otettava huomioon kanavan aiheuttamat ongelmat.


## Yksinkertainen kuljetuspalvelu, jossa kuittaukset

Kun oletetaan, että viestejä kuljettava kanava voi kadottaa yksittäisen viestin, on kuljetuspalvelun varmistuttava siitä, että jokainen lähetty viesti menee perille vastaanottajalle. Tähän käytetään yleensä kuittauksia eli vastaanottaja lähettää kuittausviestin, jolla se kertoo lähettäjälle saaneensa viestin.

<img src="../img/protokolla-ideaali-tilanne-yksi-tila.svg" alt="Lähettäjällä on nyt kaksi tilaa ja siirtymät niiden välillä. Ensimmäinen siirtymä on kuten edellisessä kuvassa +send/-m ja toinen siirtymä on +ack. Vastaanottajalla on edelleen yksi tila, mutta sen siirtymä itseensä on nyt muotoa +m /(-receive, -ack).">
KUVA: Nyt lähettäjän pitää jokaisen viestin lähetyksen jälkeen vastaanottaa kuittaus (+ack) ennen kuin se voi lähettää seuraavan viestin. Vastaanottajakin lähettää kuittauksen jokaisen viestin vastaanoton jälkeen.


Tämän automaatin ongelma on se, että se kyllä havaitsee, kun viesti ei ole mennyt perille, mutta se ei osaa toipua tästä tilanteesta.
Jotta toipuminen on mahdollista, niin meidän täytyy lisätä lähettäjän aautomaattiin mahdollisuus lähettää viesti uudelleen, jos kuittaus ei tule tietyn ajan kuluessa. Tämä voidaan tehdä yksinkertaisesti yhdellä lisäsiirtymällä ajastin/-m. Mieti hetki kumpaan lähettäjän tilaan tämän siirtymä tarvitaan. Ajastin aiheuttaa kellokeskeytyksen, jonka perusteella käyttöjärjestelmä pääsee puuttumaan tilanteeseen. Ajastimista ja keskeytyksistä kerrotaan enemmän Tietokoneen toiminta -kursseilla.

Nyt yksittäinen viesti voi kadota ja keskeytyksen jälkeen lähettäjä voi lähettää sen uudelleen. Protokollamme toimii oikein, jos kanava voi taata, että viesti menee varmasti perille tietyssä ajassa. Käytännössä tällaista aikatakuuta kanava ei anna, joten on mahdollista, että yksittäinen sanoma viivästyy niin paljon, että lähettäjä ehtii lähettämäään sen uudelleen. Tällöin vastaanottaja saa saman viestin kahteen kertaan. Koska edellisen kuvan automaatissa lähettäjä lähettää kuittauksen kaikille saapuneille viesteille, se kuittaa tämän viestin uudelleen. Tällainen tuplakuittaus voi aiheuttaa ongelmia.

Kun lähettäjä saa kuittauksen tilassa 2 se olettaa kuittauksen koskevan juuri lähettämäänsä viestiä. Jos kuittaus kuitenkin koski jotain aiempaa viestiä, saattaa tämä lähetetty viesti jäädä pois välistä. Tämän korjaamiseksi meidän täytyy numeroida lähetetyt viestit, jotta lähettäjä tietää mitä viestiä kuittaus koskee.

Teoreettisessa automaattien analysoinnissa usein edellytetään, että automaatille täytyy kuvata kaikki lailliset tilanteet, jos jotain tilannetta ei ole kuvattu, niin automaatin toiminta päättyy virhetilaan. Meidän automaatissamme näin voisi käydä, jos lähettäjä saa kuittauksen tilassa L1, jossa se ei sitä odota saavansa. Tällä kurssilla voidaan olettaa, että odottamattomat tapahtumat vain sivuutetaan. Niitä ei siis jätetä odottamaan myöhempää käsittelyä, vaan automaatti vain purkaa ne pois käsittelyjonosta, kunnes tulee tapahtuma, jonka se osaa käsitellä. Tällä oletuksella saamme malleista vähennettyä siirtymiä tilasta itseensä.

QUIZZ



## Vuorottelevan bitin protokolla

Jotta peräkkäiset viestit voidaan erottaa toisistaan ne tyypillisesti numeroidaan ja kuittausviestissä kerrotaan sitten tämä viestin numero. Näin vastaanottaja voi havaita yksittäisen viesti katoamisen ja raportoida tästä lähettäjälle. Lähettäjä voi sitten lähettää tämän kadonneen viestin uudelleen. Koska haluamme pitää automaatin äärellisenä, niin emme voi käyttää ääretöntä viestien nuemrointia. Äärettömällä automaatilla olisi äärettömän monta tilaa ja sen analysointi olisi haastavaa. 

Yksinkertaisimmillaan riittää, että numeroimme peräkkäiset viestit toistaan poikkeavasti. Tähän riittää yksi bitti, jonka arvo on joko 0 tai 1. Kun näitä kahta arvoa vuorotellaan saadaan kaksi peräkkäistä viestiä numeroitua toisistaan poikkeavasti. Tästä tulee tuo perinteinen nimi vuorottelevan bitin protokolla (engl. [alternating bit protocol](https://en.wikipedia.org/wiki/Alternating_bit_protocol). Tästä käytetään yleisesti myös nimitystä stop-and-wait protokolla https://en.wikipedia.org/wiki/Stop-and-wait_ARQ

Oletaan tässä vielä, että kuljetuskerroksella on aina jotain lähetettävää ja jätetään sovelluskerrokselta tulevat viestit ja sinne toimitettavat viestit pois mallista. Tällainen asioiden lisääminen ja poistaminen on mallinnuksen vahvuus. Meidän tarvitsee ottaa mukaan vain ne toiminnat, joita halutaan tarkastella. Muu toiminnallisuus jätetään pois, jotta malli pysyy mahdollisimman yksinkertaisena.

KUVA. Kattava automaatti, joka huolehtii näistä.

Aikakatkaisua (engl. timeout) käytetään tietoliikenteessä keskeyttämään lähettäjän odotus. Jos lähettäjän lähettämä viesti tai siihen liittyvä kuittaus katoaa matkalla ei lähettäjä saa tästä mitään tietoa. Jotta lähettäjä voisi reagoida tähän katoamiseen on lähettäjän viestin odotus ensin keskeytettävä [ajastimen](https://fi.wikipedia.org/wiki/Ajastin) avulla.  Lähettäjä siis asettaa ajastimen tekemään keskeytys sopivan ajan kuluttua. Keskeytykset ja niiden toiminta on käsitelty tietokoneen toiminta -kurssilla.





VIDEO: Jossa tämä tarina kuvattuna  laajenevana automaattina.


Tehtävä:  Simulointi tilanteessa, jossa viestien järjestys voi vaihtua. Anna viesti jono ja pyydä vastauksena tila, johon lähettäjä päätyy, vastaanottaja päätyy. Mikä viesti jää pois oikealta paikaltaan, jne....


Tehtävä, jossa annetaan automaatti, johon pitää täydentää tarvittavat toiminnallisuudet  (eli osa toiminnoista on X,Y,Z, jne) ja vaihtoehdot tehtävässä
