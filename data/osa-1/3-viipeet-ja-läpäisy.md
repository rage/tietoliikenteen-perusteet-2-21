---
path: '/osa-1/3-viipeet-ja-läpäisy'
title: 'Viipeet ja läpäisy'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata mistä sanomien viivästymiset johtuvat
- osaat laskea erilaisia viivästymisiä
- osaat arvioida verkon toimintakykyä ja havaita pullonkauloja

</text-box>

## Viipeet

Paketit etenevät sähkövirtana, valona tai sähkömagneettisena säteilynä aina vakionopeudella kyseisellä yhteysvälillä. Lähettäjän ja vastaanottajan pitää toimia paketin siirrossa tällä samalla nopeudella. Eri yhteysväleillä onkin käytössä erilaisia siirtonopeuksia, jotka kuten olemme jo oppineet ilmaistaan bitteinä sekunnissa (bits per second, bps). Vaikka säteily, valo ja sähkävirta siirtyvät vakionopeuksilla, niin eri yhteysvälien siirtonopeudet voiat poiketa toisistaan. Tämä johtuu ennenkaikkea siitä, miten bitit koodataan tälleä fyysiselle siirtotielle. Yksittäisen  bittivirran läehttämiseen voidaan käyttää niin sanottua kantataajuuskaistaan (baseband) perustuvaa lähetystä. Tällöin osa kaistasta kuvaa 0:aa ja osa 1:stä. Jos tarvitaan monimutkaisempaa bittien koodausta, niin sitä kutsutaan [https://fi.wikipedia.org/wiki/Modulaatio_(elektroniikka)](modulaatioksi). Siinä siis muokataan eli moduloidaan 'kantoaaltoa', eli valoa, sähköä tai säteilyä, siten että se voi siirtää mukanaan dataa. Tällä kurssilla emmme opettele näitä modulointitekniikoihin sen tarkemmin, mutta niihin viitataan aina silloin kun se on kurssin sisällön kannalta tarpeellista.

Sanoman kulkuun verkossa vaikuttavat erityisesti erilaiset viipeet.  Edellisellä kurssilla Tietoliikenteen perusteet 1 opimme jo kokonaisviipeeseen vaikuttavien neljän viipeen nimet, jotka olivat siirtoviive, prosessointiviive, etenemisviive ja jonotusviive.  Tarkastellaan näitä nyt vähän tarkemmin.

Nämä viiveet lasketaan aina yhden pakettikytkentaisen verkon solmun näkökulmasta. Paketin koko kulkuaika lähettäjältä vastaanottajalle on kaikkien paketin kulkuun vaikuttavien solmuten kokonaisviiveiden summa.

XXXXXX   KUVA - Kuten ensimmäisen luentokerran kalvoissa tai kirjan kuva 1.16

<img src="../img/drawings/hashmap.png" alt="Hashmapissa avaimen perusteella saadaan selville arvo."/>

### Siirtoviive

Siirtoviive (engl. transmission delay) on näistä kaikkien tutuin. Sen laskukaava on  sv = L/R, missä L on paketin (tai siirrettävän datan) koko bitteinä ja R on linkin nopeus bitteinä sekunnissa (bps). Näin saadaan siirtoviive, eli siirron kesto, sekunteina.

Vastaavia laskuja tehtiin ensimäisessä osiossa arvioina koko tiedoston siirron kestosta. Kun asiaa tarkastellaan vain yhden verkon solmun näkökulmasta, niin siirtoviivekin on vain siirron kesto yhden linkin yli seuraavalle verkon solmulle.



### Prosessointiviive

Prosessointiviive (engl. processing delay) muodostuu solmun omasta viestin käsittelystä. Tämä jakautuu viestin vastaanottoon, viestin prosessointiin ja valmisteluun lähetystä varten. Tyypillisesti verkon sisällä toimivat solmut ovat reitittimiä, jolloin ne vastaanottavat paketin fyysisen kerroksen välityksellä. Sieltä paketti päätyy linkkikerrokselle käsittelyyn ja linkkikerrokselta edelleen varkkokerrokselle.
Vastaanottovaiheessa paketista poistetaan linkkikerroksen otsake. Samalla täytyy tarkistaa paketin eheys. Tällöin voiaan havaita mahdolliset syntyneet bittivirheet, kun paketista laskettua tarkistussummaa verrataan linkkikerroksen otsakkeessa olevaan tarkistussummaan. (Tarkistussumman laskennasta lisää myöhemmin kurssilla.) Jos paketti on vioittunut, niin se hylätään eikä sitä välitettä edelleen verkkokerrokselle. 
Reitittimissä viestin varsinainen prosessointi eli reitityspäätös tehdään verkkokerroksella. Tällöin paketin vastaanottajan IP-numeron perusteella reititin katsoo reititystaulustaan mihin ulosmenevään linkkiin paketti pitää lähettää, jotta se aikanaan päätyisi vastaanottajalle. Reitittimen pitää siis siirtää paketti vastaanottolinkistä lähetyslinkkiin. Tämän kuluu aikaa, joka on osa prosessointiviivettä. 
Kun paketti on valmis lähetettäväksi eteenpäin, se toimitetaan verkkokerrokselta linkkikerrokselle. Linkkikerros lisää tähän verkkokerroksen pakettiin oman otsakkeensa. Otsakkeen lisäyksen yhteydessä lasketaan mm. paketin likkikerroksen tarkistussumma ja tarvittaessa selvitetään vastaanottajan MAC-osoite silloin kun linkkinä toimii Ethernet-verkko.

Wikipedian sivulla https://fi.wikipedia.org/wiki/Prosessointiviive on kuvattu muutakin toimintaa, josta aiheutuu prosessointiviivettä.

### Etenemisviive

Etenemisviive (engl. propagation delay) on se aika, joka yhdeltä bitiltä kestää kulkea fyysisellä siirtotiellä lähettäjältä vastaanottajalle. Tähän vaikuttaa erityisesti käytettävä siirtomedia ja lähettäjän ja vastaanottajan fyysinen etäisyys. Tämä voidaan ilmaista kaavana ev = D/S, jossa D on etäisyys ja S on bitin etenemisnopeus siirtotiellä. Tällä kursilla käytämme etenemisnopeuden arviona aina valonnopeutta, vaikka joissakin tilanteissa etenemisnopeus on todellisuudessa sitä pienempi.

QUIZZ:  Mitkä seuraavista kuvaavat riittävän tarkasti valonnopeutta  3 km sekunnissa,   jne 30 cm /nanosekunti, ....
<quiz id="afbefe02-8bf3-4a73-b71d-e851c2c6b59b"></quiz>

### Jonotusviive

Jonotusviive (engl queuing delay) on näistä viipeistä hankalin, koska se vaihtelee ruuhkan mukana. Jos solmussa ei ole yhtään pakettia jonossa, niin jonotusviivettäkään ei muodostu, kun paketti voidaan välittömästi toimittaa seuraavaan linkkiin.
Toisaalta jonotusviive voi olla hyvinkin pitkä, jos kyseinen solmu on hyvin ruuhkainen ja paketteja on paljon jonossa. Jonoihin ja jonotukseen liittyy vahvasti matematiikan haara jonoteoria, joka nimenomaan tutkii näitä ilmiöitä. Koska jokainen paketin kokemus jonosta on erilainen, niin jonojen tarkastelussa käytetään nimenomaan tilastollisia suureita kuten keskiarvo, varianssi ja todennäköisyys. 
Yksinkertainen kaava, jolla jonotuksen kestoa voi arvioida on liikenteen intensiteetti (engl. traffic intensity), on La/R, missä L on paketin koko (yksinkertaisesti oletetaan paketit samankokoisiksi), a on keskimääräinen pakettien jonoon saapumisnopeus (paketteja sekunnissa) ja jakaja R on linkin siirtonopeus (bitteja sekunnissa). Tästä kaavasta on helppo havaita, että jos paketteja saapuu jonoon enemmän kuin linkki voi lähettää (La/R >1), niin jono kasvaa. Jos puskurin koko ei rajoita, niin jono voi kasvaa äärettömästi ja näin ollen myös paketin jonotusviive voi kasvaa äärettömästi. Jos taas puskurin koko rajoittaa jonon kasvua, niin paketteja joudutaan pudottamaan ja ne katoavat pääsemättä koskaan perille.
Jonoja voi silti muodostua vaikka liikenteen intensiteetti olisikin pienempi tai yhtäsuuri kuin 1 (eli La/R<1). Näin voi käydä jos hetkellisesti pakettien määrä ylittää linkin kapasiteetin esimerkiksi paketteja tulee useammasta linkistä yhtenä ryöppynä. Toisaalta vaikka intensiteetti olisikin lähellä ykköstä, niin jos paketit saapuvat tasaisin väliajoin, niin ne eivät joudu jonottamaan, kun edellinen on juuri saatu lähetettyä ennen seuraavan saapumista.
Todellisuudessa yhden reitittimen osalta emme pysty ennustamaan pakettien saapumisia (jaksollisuutta tai saapumisväliä), joten pakettien oletetaan saapuvan satunnaisesti (random). Tällöin paketteja saapuu välillä enemmän ja välillä vähemmän, mutta niiden jakaumaa ei tiedetä ennalta.

KUVA ois kiva
<img src="../img/drawings/hashmap.png" alt="Hashmapissa avaimen perusteella saadaan selville arvo."/>
<quiz id="afbefe02-8bf3-4a73-b71d-e851c2c6b59b"></quiz>


## Läpäisy tai läpimeno

Englanninkielistä termiä throughput ei valitettavasti vastaa yksi tietty suomenkielinen termi, vaan sille on jouduttu erilaisiin tilanteisiin ja tieteenaloille kehittämään useita erilaisia käännöksiä.  Läpäisy ja läpimeno ovat synonyymeja, jotka tarkoittavat suurinpiirtein samaa eli miten paljon jotakin valmistuu tietyssä ajassa tai miten kauan johonkin tiettyyn asiaan tai prosessin menee aikaa.

Viipeiden kanssa tarkastelimme asiaa yhden verkon solmun kohdalta. Läpimenoakin voisi tarkastella vain kahden solmun välillä. Silloin se määrittyy suoraan kyseisen linkin nopeudesta, koska se kertoo meille suoraan kuinka monta bittiä kyseisestä linkistä pääsee läpi sekunnissa. 

Nyt tarkastelemme paketin (tai oikeammin bittien) kulkua kokonaisuudessaan lähettäjältä vastaanottajalle. Pakettihan kulkee matkalla usean eri linkin kautta, joilla on erilaiset nopeudet. Koko reitin läpäisyä rajoittaa hitain linkki. Näin ollen päästä-päähän yhteyden läpäisy on yhtäsuuri kuin hitaimman linkin nopeus. Tässä täytyy huomioida myös linkin jakaminen. Jos tietty lähettäjän ja vastaanottajan välinen liikenne saa vain osan linkistä käyttöönsä, niin silloin tällä yhteydellä tuon linkin nopeus on vain tämä osa koko nopeudesta. Näin jokin nopeampi linkki voikin tämän yhteyden osalta olla liikennöintinopeutta rajoittava.  Tämä rajoittaa linkkiä kutsutaan usein "pullonkaulaksi". Jos lähettäjän ja vastaanottajan välistä liikennettä halutaan nopeuttaa, niin nopeutus on kohdistettava nimenomaan pullonkaulaan. Muiden yhteysvälien nopeuttaminen ei auta.  #Mieti miksi näin on.#

KUVA, jossa useita linkkejä ja niillä erilaisia liikennöintinopeuksia.  Mukana myös jaettuja yhteyksiä ja useampia lähettäjiä.
QUIZZ: Kuvaan liittyen muutama kysymys siitä mikä on pullonkaulalinkki näillä yhteysväleillä.

<img src="../img/drawings/hashmap.png" alt="Hashmapissa avaimen perusteella saadaan selville arvo."/>

<quiz id="afbefe02-8bf3-4a73-b71d-e851c2c6b59b"></quiz>  - tehtäväksi laskea siirron kesto kolmen linkin yli yhtenä pakettina ja pilkottuna useampaan pieneen pakettiin!


## Muita käsitteitä näihin liittyen


packet jitter or packet delay variation (PDV) 


Voit katsoa ohjeet aloittamiseen myös seuraavalta videolta.

<youtube id="zvE8XA8D0gE"></youtube>

