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

Paketit etenevät sähkövirtana, valona tai sähkömagneettisena säteilynä aina vakionopeudella yhdellä yhteysvälillä eli linkillä. Lähettäjän ja vastaanottajan pitää tällöin toimia paketin siirrossa tällä samalla nopeudella. Eri yhteysväleillä on käytössä erilaisia siirtonopeuksia, jotka kuten olemme jo oppineet ilmaistaan bitteinä sekunnissa (bits per second, bps). Vaikka säteily, valo ja sähkövirta siirtyvät vakionopeudella, niin eri yhteysvälien siirtonopeudet voivat poiketa toisistaan. Tämä johtuu ennen kaikkea siitä, miten bitit koodataan tälle fyysiselle siirtotielle. Yksittäisen bittivirran lähettämiseen voidaan käyttää kantataajuuskaistaan (baseband) perustuvaa lähetystä. Tällöin osa kaistasta kuvaa 0:aa ja osa 1:stä. Jos tarvitaan monimutkaisempaa bittien koodausta, niin sitä kutsutaan [modulaatioksi](https://fi.wikipedia.org/wiki/Modulaatio_(elektroniikka)). Siinä siis muokataan eli moduloidaan 'kantoaaltoa', eli valoa, sähköä tai säteilyä, siten että se voi siirtää mukanaan dataa. Tällä kurssilla emme opettele näitä modulointitekniikoihin sen tarkemmin, mutta niihin viitataan aina silloin, kun se on kurssin sisällön kannalta tarpeellista.

Sanoman kulkuun verkossa vaikuttavat erityisesti erilaiset viipeet.  Edellisellä kurssilla, Tietoliikenteen perusteet 1, opimme jo kokonaisviipeeseen vaikuttavien neljän viipeen nimet, jotka olivat siirtoviive, prosessointiviive, etenemisviive ja jonotusviive.
Nämä viiveet lasketaan aina yhden pakettikytkentäisen verkon solmun näkökulmasta. Paketin koko kulkuaika lähettäjältä vastaanottajalle on kaikkien paketin kulkuun vaikuttavien solmujen kokonaisviiveiden summa.

<img src="../img/viiveet.svg" alt="Prosessointiviive - paketin käsittely reitittimen sisällä, jonotusviive - paketin odotus reitittimessä kunnes linkki vapautuu, siirtoviive -paketin siirto reitittimestä linkkiin, etenemisviive - paketin kulku linkissä reitittimeltä seuraavalle."/>

Kuva 1: Kuvassa on neljä laitetta A, B, C ja D, jotka kommunikoivat keskenään reitittimien 1 ja 2 avulla. Verkossa on liikkeellä paljon paketteja eri yhteysväleillä. Tähän peruskuvaan on piirretty näkyville myös eri viipeet ja missä vaiheessa ne reitittimen 1 osalta tapahtuvat. Saman viiveet toki ovat myös kaikilla laitteilla ja reitittimellä 2, vaikka niitä ei ole kuvaan merkitty.

### Siirtoviive

Siirtoviive (engl. transmission delay) on näistä kaikkein tutuin. Sen laskukaava on  sv = L/R, missä L on paketin (tai siirrettävän datan) koko bitteinä ja R on linkin nopeus bitteinä sekunnissa (bps). Näin saadaan siirtoviive, eli siirron kesto, sekunteina.

Vastaavia laskuja tehtiin edellisellä kurssilla arvioina koko tiedoston siirron kestosta. Tällöin oikeastaan lasketaan vain se, kuinka kauan lähettäjältä kestää laittaa kyseinen tiedosto matkaan eli siirtää se linkkiin. Koska verkossa on useita toimijoita, jotka kaikki siirtävät tietoa seuraavalle, niin yhden solmun siirtoviiveen tarkastelulla saadaan vain karkea alaraja-arvio siirron kokonaiskestosta.

<quiz id="e129327d-78ce-5e20-84d0-29707c1b6ee1"></quiz>


### Prosessointiviive

Prosessointiviive (engl. processing delay) muodostuu solmun omasta viestin käsittelystä. Tämä jakautuu viestin vastaanottovaiheeseen, viestin prosessointivaiheeseen ja valmisteluvaiheeseen lähetystä varten. Tyypillisesti verkon sisällä toimivat solmut ovat reitittimiä, jolloin ne vastaanottavat paketin fyysisen kerroksen välityksellä. Sieltä paketti päätyy linkkikerrokselle käsittelyyn ja linkkikerrokselta edelleen verkkokerrokselle.

Vastaanottovaiheessa paketista poistetaan linkkikerroksen otsake. Samalla täytyy tarkistaa paketin eheys. Tällöin voidaan havaita mahdolliset syntyneet bittivirheet, kun paketista laskettua tarkistussummaa verrataan linkkikerroksen otsakkeessa olevaan tarkistussummaan. (Tarkistussumman laskennasta lisää myöhemmin kurssilla.) Jos paketti on vioittunut, niin se hylätään eikä sitä välitetä edelleen verkkokerrokselle.

Reitittimissä viestin prosessointivaiheessa reitityspäätös tehdään verkkokerroksella. Tällöin paketin vastaanottajan IP-numeron perusteella reititin katsoo reititystaulustaan mihin ulosmenevään linkkiin paketti pitää lähettää, jotta se aikanaan päätyisi vastaanottajalle. Reitittimen pitää siis siirtää paketti vastaanottolinkistä lähetyslinkkiin. Tähän kuluu aikaa, joka on osa prosessointiviivettä.

Kun paketti on valmis lähetettäväksi eteenpäin, se toimitetaan verkkokerrokselta linkkikerrokselle. Tässä valmisteluvaiheessa linkkikerros lisää verkkokerroksen pakettiin oman otsakkeensa. Otsakkeen lisäyksen yhteydessä lasketaan mm. paketin linkkikerroksen tarkistussumma ja tarvittaessa selvitetään vastaanottajan MAC-osoite silloin, kun linkkinä toimii Ethernet-verkko.

Wikipedian sivulla [prosessointiviive](https://fi.wikipedia.org/wiki/Prosessointiviive) on kuvattu muutakin toimintaa, josta aiheutuu prosessointiviivettä.

### Etenemisviive

Etenemisviive (engl. propagation delay) on se aika, joka yhdeltä bitiltä kestää kulkea fyysisellä siirtotiellä lähettäjältä vastaanottajalle. Tähän vaikuttaa erityisesti käytettävä siirtomedia ja lähettäjän ja vastaanottajan fyysinen etäisyys. Tämä voidaan ilmaista kaavana ev = D/S, jossa D on etäisyys ja S on bitin etenemisnopeus siirtotiellä. Tällä kurssilla emme arvioi tai opettele siirtomedioiden todellisia etenemisnopeuksia, vaan käytämme aina etenemisnopeuden arviona valonnopeutta.

Valonnopeuden tarkempi selitys löytyy [wikipediasta](https://fi.wikipedia.org/wiki/Valonnopeus). Tämän kurssin tarpeisiin [Ursan hyvin tiivis kuvaus](https://www.ursa.fi/extra/kosmos/v/valon_nopeus.html) on riittävä.

<quiz id="55e1ff14-aa35-58f2-b3cc-9ca18d17f906"></quiz>

### Jonotusviive

Jonotusviive (engl. queuing delay) on näistä viipeistä hankalin, koska se vaihtelee ruuhkan mukana. Jos solmussa ei ole yhtään pakettia jonossa, niin jonotusviivettäkään ei muodostu, kun paketti voidaan välittömästi toimittaa seuraavaan linkkiin.

Toisaalta jonotusviive voi olla hyvinkin pitkä, jos kyseinen solmu on hyvin ruuhkainen ja paketteja on paljon jonossa. Jonoihin ja jonotukseen liittyy vahvasti matematiikan haara jonoteoria, joka nimenomaan tutkii näitä ilmiöitä. Koska jokaisen paketin kokemus jonosta on erilainen, niin arvioitaessa jonotuksen vaikutusta käytetään nimenomaan tilastollisia suureita kuten keskiarvo, varianssi ja todennäköisyys.

Jonotuksen kestoa voi arvioida liikenteen intensiteettiä (engl. traffic intensity) kuvaavalla yksinkertaisella kaavalla La/R, missä L on paketin koko (yksinkertaisesti oletetaan paketit samankokoisiksi), a on keskimääräinen pakettien jonoon saapumisnopeus (paketteja sekunnissa) ja jakaja R on linkin siirtonopeus (bittejä sekunnissa). Tästä kaavasta on helppo havaita, että jos paketteja saapuu jonoon enemmän kuin linkki voi lähettää (La/R >1), niin jono kasvaa. Jos puskurin kokoa ei rajoiteta, niin jono voi kasvaa äärettömästi ja näin ollen myös paketin jonotusviive voi kasvaa äärettömästi. Jos taas puskurin koko rajoittaa jonon kasvua, niin paketteja joudutaan pudottamaan ja ne katoavat pääsemättä koskaan perille.
Jonoja voi silti muodostua vaikka liikenteen intensiteetti olisikin pienempi tai yhtä suuri kuin 1 (eli La/R<1). Näin voi käydä, jos hetkellisesti pakettien määrä ylittää linkin kapasiteetin, esimerkiksi paketteja tulee useammasta linkistä samanaikaisesti. Toisaalta vaikka intensiteetti olisikin lähellä ykköstä, niin jos paketit saapuvat tasaisin väliajoin, ne eivät joudu jonottamaan, koska edellinen paketti on juuri saatu lähetettyä ennen seuraavan saapumista.

Todellisuudessa yhden reitittimen osalta emme pysty ennustamaan pakettien saapumisia (jaksollisuutta tai saapumisväliä), joten pakettien oletetaan saapuvan satunnaisesti (random). Tällöin paketteja saapuu välillä enemmän ja välillä vähemmän, mutta niiden jakaumaa ei tiedetä ennalta.

Lisätietoa kiinnostuneille: Jonot ja jonotus on niin tavallista, että niille on ihan oma matematiikan osa-alue, jonoteoria. Wikipedian englanninkielinen sivu [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory) antaa perustiedot asiasta kiinnostuneelle. Tällä kurssilla jonotusta ja sen vaikutuksia ei käsitellä tämän enempää. Toki ruuhkan aiheuttama jonojen täyttyminen ja siitä johtuva pakettien katoaminen vaikutuksineen on kurssin keskeistä sisältöä.

<quiz id="17a8c7a2-8616-557f-b152-be77e46cc91d"></quiz>

## Läpäisy tai läpimeno

Englanninkielistä termiä throughput ei valitettavasti vastaa yksi tietty suomenkielinen termi, vaan sille on jouduttu erilaisiin tilanteisiin ja tieteenaloille kehittämään useita erilaisia käännöksiä.  Läpäisy ja läpimeno ovat synonyymeja, jotka tarkoittavat suurin piirtein samaa eli miten paljon jotakin valmistuu tietyssä ajassa tai miten kauan johonkin tiettyyn asiaan tekemiseen kuluu aikaa.

Viipeiden kanssa tarkastelimme asiaa yhden verkon solmun kohdalta. Läpimenoakin voisi tarkastella vain kahden solmun välillä. Silloin se määrittyy suoraan kyseisen linkin nopeudesta, koska se kertoo meille suoraan, kuinka monta bittiä kyseisestä linkistä pääsee läpi sekunnissa.

Nyt tarkastelemme paketin (tai oikeammin bittien) kulkua kokonaisuudessaan lähettäjältä vastaanottajalle. Pakettihan voi kulkea matkalla usean eri linkin kautta, joilla voi olla erilaiset nopeudet. Koko reitin läpäisyä rajoittaa hitain linkki. Näin ollen päästä-päähän -yhteyden läpäisy on yhtä suuri kuin hitaimman linkin nopeus. Tässä täytyy huomioida myös linkin jakaminen. Jos tietty lähettäjän ja vastaanottajan välinen liikenne saa vain osan linkistä käyttöönsä, niin silloin tällä yhteydellä tuon linkin nopeus on vain tämä osa koko nopeudesta. Näin jokin näennäisesti nopeampi linkki voikin olla liikennöintinopeutta rajoittava.  Tätä rajoittavaa linkkiä kutsutaan usein "pullonkaulaksi" (engl. bottle neck). Jos lähettäjän ja vastaanottajan välistä liikennettä halutaan nopeuttaa, niin nopeutus on kohdistettava nimenomaan pullonkaulaan. Muiden yhteysvälien nopeuttaminen ei auta.  Mieti hetki miksi näin on.

<img src="../img/pullonkaula.svg" alt="Kuvassa A ja B on yhdistetty reitittimeen R1. C ja D on yhdistetty reitittimeen R2. Reitittimet R1 ja R2 on yhdistetty toisiinsa. Liikennöintinopeudet ovat: A-R1 1Gb/s, B-R1 200 Mb/s, R1-R2 100 Mb/s, R2-C 100 Mb/s ja R2-D 1Gb/s"/>

KUVA 2: Kuvaan on merkitty eri linkkien maksiminopeudet. Näistä on helppo havaita, että reitittimien välinen linkki (100 Mb/s) on hitain. Näin voidaan olettaa, että se muodostaa tässä verkossa pullonkaulan.

<quiz id="f2e319d8-d8a6-5e42-a7f1-8c7f4d9b9c29"></quiz>


Paketin koko vaikuttaa viestin kulkuaikaan lähettäjältä vastaanottajalle. Internet on ns. etappivälitteinen (engl. store-and-forward). Perusmallissa paketti vastaanotetaan kokonaisuudessaan ennen kuin sitä käsitellään solmussa sen tarkemmin ja vasta sen jälkeen paketti lähetetään eteenpäin. Uudet reitittimet osaavat käsitellä paketteja jo silloin, kun ne vielä vastaanottavat paketin loppuosaa. Tällainen nopeampi edelleenlähetys (engl. fastforward) nopeuttaa erityisesti isojen pakettien kulkua, kun siirtoviiveen vaikutus pienenee. Vaikutus on samankaltainen kuin paketin pilkkominen pienemmiksi paketeiksi.

Oletetaan ensin, että yllä olevassa kuvassa B lähettää  1 megatavun kokoisen tiedoston C:lle yhtenä pakettina. Tällöin paketti siirretään ensin kokonaisuudessaan B:ltä Reitittimelle 1. Tähän siirtoon kuluu (1 megatavu * 8 bittiä / tavu) / (200 kb/s) = 8 000 000 / 200 000 sekuntia =  40 sekuntia. Sitten Reititin 1 siirtää tämän paketin reitittimelle R2, mihin kuluu 80 sekuntia. Lopuksi Reititin 2 siirtää paketin C:lle. Tähänkin kuluu 80 sekuntia. Kokonaisuudessaan siirtoon kuuluu siis 40 sekuntia + 80 sekuntia + 80 sekuntia = 200 sekuntia eli yli 3 minuuttia.

Oletetaan sitten, että tämä 1 megatavun kokoinen tiedosto pilkotaan 1 kilotavun paketeiksi. Nyt yhden paketin siirtoon kuluu aikaa enää (8 kb / 200 kb/s)+ (8 kb/100 kb/s) + (8kb / 100 kb/s) = 0,04 + 0,08 + 0,08= 0,2 sekuntia. Näitä paketteja on kaikkiaan 1 megatavu / 1 kilotavu = 1000 kappaletta. Paketit kulkevat kuitenkin lomittain siten, että vain yhden, hitaimman, yhteysvälin osalta pitää ottaa huomioon kaikki paketit. Jos kaikki yhteysvälit ovat yhtä nopeita, niin käytetään ensimmäistä tai viimeistä yhteysväliä. Tässä valitaan nimenomaan viimeinen, eli Reitittimen R2 ja C:n välinen yhteys, jossa tiedoston siirtoon kuluu aiemmin lasketun mukaisesti 80 sekuntia (eli 1000 * 8 kb / 100 kb/s). Jos nyt laskemme yhteen kaikkien pakettien siirron yhden linkin yli ja yhden paketin kulkuajan lähettäjältä vastaanottajalle tulemme laskeneeksi viimeisen paketin siirron R2:n ja C:n välillä mukaan  laskelmaan kahteen kertaan.  Piirrä itsellesi kuva, jonka perusteella voit vakuuttua tästä!  Kokonaissiirtoaika tässä on siis 80 + 0,12 eli 80,12 sekuntia.

<quiz id="b8316e56-37d7-54a3-9b1c-8a492d8349b4"></quiz>

## Mitattujen siirtoaikojen vaihtelusta

Vaikka edellä keskityimme vain yhteen pakettiin liittyviin viipeisiin, niin tietoliikenteessä yleisesti kiinnostaa liikennöintinopeus, läpäisy ja erilaiset viipeet yli kaikkien tietyllä ajanjaksolla kulkeneiden pakettien. Niistä voimme esimerkiksi laskea vaikkapa keskimääräisen läpäisyn. Toki voimme tarkastella näiden mitattujen pakettien havaitsemien viipeiden ja siirron kokonaiskeston vaihtelua. Tyypillisiä pakettien siirtoaikojen vaihtelua aiheuttavia seikkoja ovat erilaisten jonotusajat matkan varrella. Siirtoviive, prosessointiviive ja etenemisviive on edellä oletettu vakiollisiksi.  Tällaisesta vaihtelusta käytetään usein englanninkielistä termiä [jitter](https://fi.wikipedia.org/wiki/Jitter), joka usein käännetään myös huojunnaksi tai heilunnaksi. Tietoliikenteen yhteydessä itse suosittelisin tuota vaihtelua. Wikipediassa suositellaan usein monitulkintaisen jitter -termin sijaan käyttämään täsmällisempää nimitystä pakettiviipeiden hajonta (engl. [packet delay variation](https://en.wikipedia.org/wiki/Packet_delay_variation)) tai viipeiden hajonta. Ne kuvaavat hyvin täsmällisesti sen, mistä pakettien siirron keston vaihtelussa on kyse.





