---
path: '/osa-4/4-reititin'
title: 'Reititin'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata reitittimen rakenteen ja sen sisäisen toiminnallisuuden

</text-box>


## Reititin

Reitittimen perustehtävähän on ohjata sille saapuvat paketit oikeaan suuntaan eteenpäin. Tssä osiossa tarkastellaan reitittimen toimintaa ja rakennetta tähän perustehtävään liittyen. Wikipedian sivu [reititin](https://fi.wikipedia.org/wiki/Reititin) luettelee nykyaikaisen kotiverkon reitittimen tai muun monitoimisen reitittimen muitakin tehtäviä, joista osa käsitellään muualla tällä kurssilla ja osa jätetään myöhemmillä kursseilla käsiteltäväksi.

Yhden paketin käsittely reitittimessä voidaan jakaa kolmeen vaiheeseen. Ensin paketti saapuu reitittimelle jonkun sisääntulon kautta. Sen jälkeen reititin tekee päätöksen mihin suuntaan paketti laitetaan. Viimeisenä vaiheena reititin lähettää paketin eteenpäin jonkun ulosmenon kautta. Reitittimen sisäisen toiminnallisuuden ja rakenteen pitää siis tukea pakettien siirtoa siihen kytkettyjen eri linkkien välillä. Useimmat verkkototeutukset perustuvat tällä hetkellä kaksisuuntaiseen yhteyteen, joten sama linkkiyhteys toimii joillekin paketeille sisäätulona ja joillekin toisille paketeille ulosmenona. 

Reitittimien täytyy toki myös ylläpitää reititystietoa. Koska reititystietojen muutokset vaikuttavat pakettien ohjaukseen, niin joskus nämä kaksi toiminnallisuutta sijoitetaan loogisesti eri tasoille. 

Pakettien ohjaus kuuluu silloin datatasolle (engl. data plane), tätä tasoa voidaan kutsua vaihtoehtoisesti myös toimintatasoksi (engl. functional plane) ja verkkojen kohdalla jopa välitystasoksi (engl. forwarding plane). Nimityksessä on horjuvuutta sen mukaan halutaanko korostaa toiminnallisuutta vai dataa. Joka tapauksessa tästä tasosta erillinen kontrollitaso (engl. control plane) ohjaa ja valvoo sen toimintaa. 

Tietoverkkojen ja reitittimien osalta näiden tasojen toiminnallisuuden ero on siinä, että reititystietoihin liittyvät muutokset tehdään kontrollitasolla ja pakettien ohjaus tapahtuu datatasolla. Tällainen toiminnallisuuksien erotteleminen eri tasoille pitäisi jo tässä vaiheessa kurssia olla jonkunverran tuttua, koska olemme käyttäneet jo protokollapinoa, jossa on erilaisia kerroksia ja niillä erilaisia toiminnallisuuksia. Tasojen käyttö poikkeaa kuitenkin protokollapinosta yhdellä merkittävällä tavalla. Protokollapinossa jokaisen paketin käsittelyä tehdään tarvittaessa jopa pinon kaikilla kerroksilla ja pinojen toiminnallisuuksilla on järjestys. Sen sijaan datatason toiminnallisuus on riippumattomampaa kontrollitason toiminnasta. Pakettien ohjaus tapahtuu kokonaisuudessaan datatasolla ja kontrollitaso puuttuu toimintaan vain, kun on tarpeen päivittää ohjauspäätöksen taustalla olevia reititystietoja.

Kotrollitason toiminnot kävimme läpi jo edellisessä osassa, kun tutustuimme reititysalgoritmeihin. Tässä keskitytäänkin vain datatasoon, jolla reitittimen pitää pystyä toimimaan hyvin tehokkaasti ja välittämään paketti nopeasti eteenpäin.

<img src="../img/4-4-reititin.svg" alt="Kuvassa on reitittimen sisäisen rakenteen kaavakuva. Kuvan yläosassa kontrollitaso, jossa vain yksi elementti reitityspäätökset, kuvan alaosassa datataso, jossa useita sisääntuloja vasemmalla, arkkitehtuuri keskellä ja useita ulosmenoja oikealla. Kontrollitaso ja datataso on erotettu toisistaan katkoviivalla, jonka päällä on reititystaulu. Reititystauluun on nuoli reitityspäätöksistä ja siitä on nuoli sisääntuloja ja ulosmenoja yhdistävään arkkitehtuuriin. Jokaisessa sisääntulossa ja ulosmenossa on kolme laatikkoa, joista arkkitehtuuria lähin laatikko on jono, keskellä linkkikerroksen toiminnot ja ulommaisena linkin päätepiste nimi sisään tai ulos. Kuvaan on merkitty datan ja pakettien kulkusuunta sisääntuloista ulosmenoihin." >

KUVA: Kuvassa on karkean tason kaavakuva reitittimen toiminnasta. Huomaa, että kuvaan on merkitty reititysalgoritmien toimiminen kontrollitasolla yksittäisen paketin kulkeminen datatasolla. Reititystaulu yhdstää nämä kaksi tasoa siten, että kontrollitaso päivittää taulun sisältöä ja datatasolla taulua käytetään yksittäisen paketin ohjaamiseen oikeaan ulosmenoon.

## Sisääntulo

Paketit siis saapuvat reitittimeen sisääntulon kautta. Sisääntulossa on ensin linkin päätepiste, johon paketin sisältö saapuu fyysisen tason signaaleina. Siitä se päätyy linkkikerroksen käsittelyyn, jossa mm. poistetaan linkkikerroksen kehystiedot paketista. Linkkikerrokseen, se toiminnallisuuteen ja linkkikerroksen kehyksen rakenteeseen tutustutaan tarkemmin seuraavassa luvussa. Linkkikerroksen jälkeen meillä on verkkokerrokselle kuuluva IP-paketti, joka päätyy sisääntulon viimeiseen vaiheeseen. 

Pakettiin kohdistuva reitityspäätös (eli ulosmenon valinta) tehdään yleensä jo sisääntunon viimeisessä vaiheessa, jotta paketti saadaan mahdollisimman nopeasti eteenpäin. Yksinkertaisessa reitittimessä, joka käsittelee paketteja yksi kerrallaan tämä reitityspäätös voitaisiin tehdä vasta osana reitittimen arkkitehtuuria. Nykyaikaiset reitittimet käsittelevät kaikkia sisääntuloja ja ulosmenoja rinnakkain, joten päätös täytyy tehdä jo ennenkuin paketti ohjataan laitteen arkkitehtuurin kautta oikeaa ulosmenoon.

Reitityspäätöksen yhteydessä myös paketin IP-otsakkeen tarvittavat kentät päivitetään. Reititin päivittää ainakin paketin elinaikaa, jonka vuoksi sen täytyy laskea IP-paketin otsakkeelle uusi tarkistussumma ja päivittää sekin. Huomaathan, että reitittimen pitää tietää, minkä version mukainen paketti on kyseessä, joten jo ennen reitityspäätöstä sen täytyy tarkistaa IP-paketin versionumero, jotta se osaa käsitellä paketin ja sen otsakkeen kentät oikein.

Kun sisääntulossa on päätetty, mihin ulosmenoon paketti pitää ohjata, paketti voidaan antaa arkkitehtuurille siirrettäväksi oikeaan ulosmenoon. Tässä vaiheessa paketti saattaa joutua hetken jonottamaan, jos esimerkiksi joku toinen paketti on juuri siirrossa samaan ulosmenoon tai arkkitehtuurissa ei muuten ole vapaata reittiä paketin siirtämiseksi.

Reitittimien suurin haaste ei ole pakettien välitys sinänsä vaan se, että pakettien välitykseen ei saisi kulua juurikaan aikaa. Jotta gigabitin reititin pystyy välittämään liikennettä tällä nopeudella se voi käyttää korkeintaan yhden nanosekunnin yhtä bittiä kohti paketin välittämiseen sisääntulon ulkoreunalta ulosmenon ulkoreunalle. Jos paketti ei joudu jonottamaan, niin sen pitää päästä reitittimen läpi tässä ajassa. Jos prosessointiviive on suurempi, niin silloin reitittimen välityskyky ei ole luvatulla tasolla. Hitaammalla nopeudella reitittimellä on enemmän aikaa paketin käsittelyyn ennenkuin seuraava paketti jo saapuu. Prosessointiviiveen päälle tulevat sitten vielä mahdolliset jonotuksen aiheuttamat jonotusviiveet.


## Ulosmeno

Ulosmeno huolehtii saapuneen paketin lähettämisestä seuraavaan linkkiin. Kun paketti on vihdoin päätynyt reitittimen sisällä ulomenoon asti, paketille tehdään vastaavia operaatioita kuin sisääntulossa, mutta päinvastaisessa järjestyksessä. Koska sisääntulossa on jo IP-paketin otsaketiedot päivitetty, niin täällä IP-paketti sijoitetaan linkkikerroksen kehyksen sisään. Tämän uuden kehyksen otsaketiedot päivitetään ja, kun linkki on vapaa, kehys lähetetään. Koska linkki ei aina on heti vapaa, kehys voi joutua jonottamaan ulosmenossa, kunnes linkki vapautuu.




## Arkkitehtuuri  (kytkentä sisäänmenojen ja ulostulojen välilllä)

Reitittimien toteutukselle on olemassa useita arkkitehtuurivaihtoehtoja.  Reititin voidaan toteuttaa ihan tavallisella tietokoneella, mutta tällöin liikennöintinopeus ei ole läheskään niin suuri kuin pelkästään reitititystehtävään suunnitellulla laitteella. Tietokoneen toiminta -kurssilla on käsitelty muutamaa tapaa siirtää tietoa tietokoneen sisällä. Näissä tieto voitiin siirtää oheislaitteiden (tässä sisääntulo ja ulosmeno) välillä joko suoraan väylää pitkin tai niin että se ensin kopioitiin (väli)muistiin ja sitten sieltä seuraavalle laitteelle. Nämä tavat, muistin (engl. memory) välityksellä tai väylän (engl. bus) kautta, ovat käytössä myös varsinaisissa reitittimissä. Koska niiden perusmallissa vain yksi paketti kerrallaan voidaan siirtää jostain sisääntulosta johonkin ulosmenoon, ei niillä saada välttämättä toteutettua riittävän nopeita reitittimiä tilanteisiin, joissa reitittimellä on paljon yhteyksiä, joita sen pitäisi välittää suurella nopeudella. Tällöin voidaan käyttää reitittimen arkkitehtuurina esimerkiksi erityistä kytkentäverkkoa (engl. interconnection network), jolloin eri sisääntuloista voidaan saman aikaisesti siirtää paketteja eri ulosmenoihin, kunhan kaikki sisääntulot ja ulosmenot ovat erillisiä.  Yhteen ulosmenoon voidaan siirtää vain yksi paketti kerrallaan.

Laajemman kuvauksen ja erilaisia kuvia reitittimen sisäisestä arkkitehuurista löydät esim. sivulta http://www2.ic.uff.br/~michael/kr1999/4-network/4_06-inside.htm



## Jonotuksen syitä ja vaikutuksia

Nyt kun olemme hiukan tutustuneet myös reitittimen sisäiseen toimintaan ja rakenteeseen on helpompi hahmottaa erilaisia syitä reitittimessä syntyvälle jonotusviiveelle ja myös sille, miksi sen arviointi etukäteen on vaikeaa tai jopa mahdotonta.

Jokaiseen linkkiin liittyy tyypillisesti kaksi jonoa, toinen saapuville ja toinen lähteville paketeille. Itseasiassa näistä jonoista käytetään yleensä termiä puskuri (engl. buffer), koska ne säilyttävät viestejä tilapäisesti, eli puskuroivat niitä, ennen niiden etenemistä seuraavaan vaiheeseen. 

Sisääntuloon saapuva paketti laitetaan jonoon, jos jonossa on tilaa. Jos jonossa ei ole tilaa, niin se (tai joku jo jonossa oleva) paketti pudotetaan pois. Tällöin paketti katoaa, koska se ei enää ole olemassa. Tästä jonoon saapuvan paketin hukkaamisesta käytetään myös englanninkielistä termiä drop-tail. Reititin voi tehdä pakettien kadottamista jo ennakoivasti ennen kuin puskuri on täynnä.  Tällaisessa aktiivisessa jonon hallinnassa (engl. active queue management) voidaan esimerkiksi paketti kadottaa ennakoivasti tietyllä todennäköisyydellä, jos jonon sen hetkinen pituus ylittää tietyn kynnysarvon, vaikkapa puolet tai kolme neljäsosaa maksimimäärästä.

Paketti voi viipyä sisääntulon jonossa, jos joko reitittimen arkkitehtuuri ei ehdi sitä siirtämään tai samaan ulosmenoon pitää siirtää myös muitakin paketteja. Tällöin siirtovuorossa oleva paketti ei pääse etenemään. Jonon ensimmäisen paketin siirron viivästymisestä käytetään joskus myös englanninkielistä termiä head-of-the-line blocking. Kun jonon ensimmäinen paketti ei pääse eteenpäin se estää myös kaikkia muita saman jonon paketteja etenemästä, koska jonoa puretaan aina järjestyksessä. 

Ulosmenossakin voi muodostua jonoa (ja puskuri jopa täyttyä) esimerkiksi siksi, että samaa linkkiä käyttää useampi lähettäjä, jolloin reititin ei pääse lähettämään paketteja riittävän nopeasti, kun linkki on varattuna muille lähettäjille. Yllättävämpi syy ulosmenon jonon kasvuun on kuitenkin se, että samaa ulosmenoon tulee paketteja useammasta sisääntulosta. Jos oletetaan, että kaikki linkit toimivat samalla nopeudella, niin silloin jos useammasta sisääntulosta tulee samalla hetkellä paketti samaan ulosmenoon, niin paketit joutuvat jonoon, koska ulosmeno voi lähettää vain yhden paketin samassa aikayksikössä kun kaikkiin sisääntuloihin tulee yksi paketti jokaiseen. Juuri tällaista tilannetta varten reitittimissä on jonoja ja puskureita, jotta kaikki saapuvat paketit saadaan lähetettyä aikanaan. 


Äskeinen kuva reitittimen toiminnasta on hyvin suppea todellisten markkinoilla olevien reitittimien toiminnasta. Vaikka ne kaikki edelleen toimivat reitittiminä ja välittävät liikennettä jollakin edellä kuvatulla tavalla, niin käytännössä ne tekevät paljon muutakin. Tyypillisesti niissä on esim. NAT toiminnallisuus, mahdollisuus DHCP palvelun käyttöön, erilaisia verkon turvallisuutta lisääviä piireitä kuten palomuuri (engl. firewall) tai sitä kehittyneempiä tunkeutumisen estojärjestelmiä (engl. intrusion prevention system) ja muutakin pakettien suodatusta. Jotkut reitittimet tarjoavat myös langattoman verkon tuen ja toiset syvemmälle verkkoon suunnitellut laitteet taas sisältävät enemmän portteja, jolloin ne pystyvät yhdistämään useampia laitteita.
Tässä vaihessa kurssia osaat jo etsiä reitittimen esitteestä erilaista informaatiota ja tietoa, vaikka esitteessä onkin paljon vielä tuntemattomia käsitteitä.

Poimin tähän sattumanvaraisesti kahden eri valmistajan esitteet. Ciscolta on mukana [Cisco RV340, RV345, RV345P, and RV340W Dual WAN Security Router Data Sheet](https://www.cisco.com/c/en/us/products/collateral/routers/small-business-rv-series-routers/datasheet-c78-742350.html) ja  Ubiquitilta [EdgeRouter Data Sheet](https://dl.ubnt.com/datasheets/edgemax/EdgeRouter_DS.pdf).

Molemmissa esitteissä esiintyy lyhenne PoE. Aukikirjoitettuna se on [Power-over-Ethernet](https://fi.wikipedia.org/wiki/Power_over_Ethernet) eli tietokoneen tai muun verkkolaitteen tarvitsema sähkövirta voidaan toimittaa suoraan laitteet yhdistävässä ethernet-kaapelissa eikä erillistä virtajohtoa tarvita.

Laitteissa puhutaan myös kerrosten 2 ja 3 kytkimistä (engl. Layer 2 and Layer 3 switch). Nämä viittaavat protokollapinoon siten, että kerros 2 on linkkikerros ja kerros 3 verkkokerros. Käytännössä tuollainen kerroksen 3 kytkin on reititin, jossa reitityspäätöksiä tehdään ohjelmiston sijasta laitteistolla. Jos asia kiinnostaa, niin lue lisää englanninkielisestä wikipedian artikkelista [Multilayer switch](https://en.wikipedia.org/wiki/Multilayer_switch).

<quiz id="e7894197-df2e-5764-b967-59a7b15fb91f"> </quiz>
 
