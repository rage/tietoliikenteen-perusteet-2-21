---
path: '/osa-5/6-langaton'
title: 'Langaton verkko'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata langattomien verkkojen toimintaa ja ongelmia.
- Osaat kertoa, mikä on WLAN tai Wi-Fi ja miten viestit kulkevat sen ja langallisen verkon välillä.
- Tiedät mikä on tukiasema ja osaat kuvata sen perustoiminnan.

</text-box>

## Langaton verkko

Kaikille langattomille verkoille on yhteistä se, että käyttäjien laitteet (voidaan kutsua myös solmuiksi tai isäntäkoneiksi) ovat langattomasti yhteydessä verkon palvelut tarjoavaan tukiasemaan. Tällainen langaton linkki käyttäjän laitteen ja tukiaseman välillä toimii yleensä radioaalloilla. Niiden ongelma on se, että linkin kuuluvuusalue on rajattu, joten laitteen ja tukiaseman etäisyys on rajallinen. Langaton linkki on tyypillisesti toteutettu radioaalloilla, jolloin kaikki tukiaseman läheisyydessä olevat laitteet voivat kuulla kaiken liikenteen. Toisaalta radioallot vaimenevat etäisyyden kasvaessa. Tietoliikenteessä tästä puhutaan signaalin vaimenemisena. Signaalia (eli radioaaltoja) häiritsevät myös muiden laitteiden aiheuttamat häiriöt ja erilaisista pinnoista tapahtuvat heijastumiset. Näiden seikkojen vuoksi kuuluvuus tukiaseman ja käyttäjän laitteen välillä voi vaihdella, vaikka molemmat laitteet olisivat paikallaan.

Langattomalle verkolle erityistä haastetta tuo kuitenkin käyttäjien laitteiden liikkuminen. Yhä useammin käytämme laitteita, joita kannetaan mukana ja jotka ovat yhdistettynä verkkoon myös liikkuessaan. Vaikka laite voi vaihtaa paikkaa myös langallisessa verkossa, niin se on siirtymisen aikana poissa verkosta. Langattomassa verkossa laite voi olla yhteydessä tukiasemaan myös silloin kun se liikkeessä.

Tällä hetkellä käytössä on kahden täysin erilaisen tekniikan avulla toteutettujan langattomia verkkoja. Ethernet-verkkoja mukailevia [WLAN](https://fi.wikipedia.org/wiki/WLAN)-verkkoja, jotka noudattavat jotain IEEE:n standardoimaa tiedonsiirtotapaa. [IEEE:n standardin 802.11](https://fi.wikipedia.org/wiki/IEEE_802.11) eri versiot määrittelevät erilaisia langattomia verkkotekniikoita langattoman lähiverkon toteuttamiseen. Osa laitteista ja tukiasemista tukee näistä vain yhtä ja osa tukee usampaa erilaista versiota. Nämä standardin eri versiot on nimetty kirjaimilla a-n.

Toinen yleinen langaton verkko on [matkapuhelinverkko](https://fi.wikipedia.org/wiki/Matkapuhelinverkko) ja erityisesti sen välityksellä käytettävä mobiilidata. Matkapuhelinverkkojen tekniikkakin on standardoitua. Koska nämä ovat puhelinverkkoja, niin niitä on alunperin standardoitu alueittain kuten langallisiakin puhelinverkkoja. Kaikenlaisia puhelinverkkoja standardoi [kansainvälinen televiestintäliitto ITU](https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_televiestint%C3%A4liitto). ITU keskittyy lähinnä eri operaattoreiden välisten asioiden säätelyyn. Operaattoreiden toiminta-alueilla on myös muita standardointiorganisaatioita, jotka vaikuttavat käytettäviin tekniikoihin. Nykyisessä globaalissa tilanteessa alueelliset standardointiorganisaatiot tekevät yhteistyötä [3GPP](https://fi.wikipedia.org/wiki/3GPP):ssä, jotta tulevat standardit olisivat mahdollisimman yhteensopivia eri puolilla maailmaa. Euroopassa näiden verkkojen standardoinnista vastaa [ETSI](https://fi.wikipedia.org/wiki/ETSI).

Matkapuhelinverkkojen, joita kutsutaan myös mobiiliverkoiksi, kehitystä on jaettu sukupolviin. Toisen sukupolven (2G) verkot käyttivät GSM-tekniikkaa. Sen jälkeen siirryttiin [3G](https://fi.wikipedia.org/wiki/3G)-verkkoihin. Nyt on jo käytössä [4G](https://fi.wikipedia.org/wiki/4G)-verkkoja, mutta ne eivät vielä ole käytettävissä kaikkialla. Tällä hetkellä standardointi kohdistuu tulevan 5G-verkon tekniikoihin. Tavoitteena on sekä nopeuttaa signaalin kulkua verkossa (pienentää etenemisviivettä) että samanaikaisesti lisätä siirrettävän datan määrää aikayksikköä kohti (eli kasvattaa verkon nopeutta).

Muita tunnettuja langattomia standardoituja verkkoja ovat [Bluetooth](https://fi.wikipedia.org/wiki/Bluetooth) ja [ZigBee](https://fi.wikipedia.org/wiki/ZigBee). 

Tarkastelemme tällä kurssilla kuitenkin lähinnä WLAN-verkkojen toimintaa. Yleiset langattomaan liikennöintiin liittyvät seikat kuitenkin soveltuvat kaikille langattomille verkoille.


## Ad hoc -verkko

Langaton verkko voidaan rakentaa myös ilman tukiasemia. Tällöin puhutaan niin sanotuista ad hoc -verkoista, joiden toiminnallisuuden verkon rakentaja määrittelee täysin itsenäisesti. Tällaisen verkon ei tarvitse noudattaa mitään standardeja, mutta verkon toteuttajan on kuitenkin hyvä tietää kyseisen alueen radiotaajuuksien käyttösäännöt, jotta ei vahingossakaan syyllisty rikokseen.

Yksinkertaisimmillaan ad hoc -verkko on vain kahden laitteen välinen, jolloin laitteiden välinen liikennöinti tehdään langattomasti suoraan laitteelta toiselle.  Laajimmillaan tällaiset ad hoc -verkot voivat olla useiden satojen sensorien omia verkkoja. Näistä langattomista sensoriverkoista on hyvä kuvaus englanninkielisessä wikipediassa sivulla [wireless sensor networks](https://en.wikipedia.org/wiki/Wireless_sensor_network).

Ad hoc -verkon koneet voivat siis suoraan kommunikoida vain omalla kuuluvuusalueellaan olevien muiden koneiden kanssa. Koska verkossa ei ole mitään palveluja suoraan tarjolla. Jos tällaisen verkon laitteen pitää kommunikoida kuuluvuusalueensa ulkopuolella olevien laitteiden kanssa, niin verkon pitää tarjota reititys näiden laitteiden välillä. Verkkoon voidaan toki toteuttaa myös vaikka oma nimipalvelu ja verkon laitteiden tunnisteiden jakelu. Palvelut ovat käytettävissä vain tämän verkon sisällä. Lisäksi jonkun on tuotettava nämä palvelut verkon käyttäjille.


Ad hoc -verkkojen käyttöä tiettyihin erityistarkoituksiin on vuosien varrella selvitelty paljonkin. WLANin toteutuksessa käytetyllä tekniikalla toteutettuja ad hoc -verkkoja kutsutaan usein  [mobiileiksi ad hoc -verkoiksi](https://fi.wikipedia.org/wiki/Mobile_ad-hoc_network) (MANET). Autoja ajatellessa on myös pohdittu erityisten [vehicular ad hoc -verkkojen](https://en.wikipedia.org/wiki/Vehicular_ad-hoc_network) toiminnallisuutta. Näiden verkkojen erityispiirre on verkon solmujen suuri liikenopeus ja siitä seuraava lyhyt aikaikkuna viestinnälle tietyn solmun kanssa.

## Langattoman verkon ongelmia

Signaalin heijastuminen ja siitä aiheutuva viive voi pahimmillaan sekoittaa alkuperäisen suoraan menevän ja heijastunutta reittiä hiukan kauemmin kulkevan signaalin siten, että vastaanottaja ei pysty enää selvittämään viestin sisältöä tästä yhteissignaalista. Usein heijastunut signaali on kuitenkin vaimentunut sen verran, että alkuperäinen signaali erottuu vastaanottajan kannalta riittävästi.

Koska signaali kulkee ilmateitse, niin maaston muodot voivat jopa kokonaan estää signaalin kulkemisen vastaanottajalle. Langattoman verkon toiminnan kannalta signaalin esteetön kulku on välttämätöntä ainakin lähettäjän ja vastaanottajan välillä. 

Langattomista verkoista on tunnistettu kaksi yleistä ongelmatilannetta, joissa viestintätilanteen tarkkailussa on haasteita. Näitä kutsutaan kätketyn aseman ja näkyvän aseman ongelmiksi. 

Kätketyn aseman (engl. hidden terminal) ongelmassa kaksi laitetta yrittää samanaikaisesti viestiä kolmannelle. Nämä kaksi eivät kuitenkaan voi kuulla toistensa viestejä, koska ne eivät ole toistensa kuuluvuusalueella. Tämä voi johtua esimerkiksi maastoesteestä niiden välillä tai siitä, että ne ovat eri puolilla laitetta, jonka kanssa ne yrittävät kommunikoida.

<img src="../img/5-6-katketty-ja-nakyva-asema.svg" alt="Kuvassa on 5 asemaa (C, BS1, A,B ja B2). Kuuluvuusalueet on piirretty ympyröidä, joiden keskipisteessä on aina asianomainen asema. C:n kuuluvuusalueella on sen itsensä lisäksi BS1. BS1:n kuuluvuusalueella on C ja A. A:n kuuluvuusalueella on BS1 ja B. B:n kuuluvuusalueella on A ja BS2. BS2:n kuuluvuusalueella on B. Ensimmmäisessä kuvassa on tukiasema ja kaksi sen kanssa kommunikoivaa laitetta A ja B. Kaikille laiteille on piirretty ympyränä niiden kuuluvuusalue.">

KUVA: Kuvassa havainnollistettu sekä kätketyn aseman että näkyvän aseman ongelmaa. Tukiasemat on merkitty BS1 ja BS2. A ja C kommunikoivat tukiaseman BS1 kanssa ja B tukiaseman BS2 kanssa. Asemien kuuluvuusalueet on merkitty ympyröillä, joiden keskipisteenä on kyseinen asema. A:n kannalta C on kätketty asema, koska ne molemmat kommunikoivat saman tukiaseman BS1 kanssa, mutta eivät kuule toisiaan. Vastaavasti A:n kannalta B on näkyvä asema, koska A kuulee sen, mutta se kommunikoi eri tukiaseman kanssa, jota A ei kuule.

Näkyvän aseman (engl. exposed terminal) ongelmassa puolestaan laite kuulee toisen laitteen lähetyssignaalin ja jättää lähettämättä oman signaalinsa, vaikka signaalit eivät vastaanottajien kannalta mene sekaisin. Tällöin asemat ovat toistensa kuuluvuusalueella, mutta viestien vastaanottajat eivät kuulisi toisen aseman viestejä, joten niiden kannalta signaalien sekoittumista ei tapahtuisi.

Molemmat ongelmat heikentävät verkon toimintaa. Kätketyn aseman tapauksessa molemmat lähetetyt viestit vaurioituvat ja ne pitää lähettää myöhemmin uudelleen. Näkyvän aseman tapauksessa taas kaistaa jää käyttämättä, vaikka viesti olisi mennyt virheettömästi perille.

Koska näitä ongelmia ei voi langattomista verkoista poistaa, niin useimmissa verkoissa edellytetään, että kaikki virheettömästi vastaanotetut viestit kuitataan jo linkkikerroksen kuittauksella. Muistathan, että kuljetuskerroksen TCP-protokollakin käytti kuittauksia viestien perillemenon varmistamiseen. Nyt kuittauksia käytetään linkkikerroksella varmistamaan, että viestin siirto tämän linkin yli onnistui. Kuittaukset lisäävät verkon liikennettä, mutta koska lähettäjällä ei langattomassa verkossa ole mahdollisuutta itse varmistua viestin perillemenosta, niin se joutuu turvautumaan vastaanottajan lähettämään kuittaukseen asian varmistamiseksi.


## WLAN / IEEE 802.11

IEEE 802.11 -tekniikalla toteutettu WLAN verkko on kotiverkoille tyypillinen langaton verkko. Myös yritysten omat sisäiset ja niiden asiakkailleen tarjoamat avoimet WLAN-verkot on toteutettu jollain IEEE 802.11 standardin versiolla.

Näistä verkoista ja niiden laitteista käytetään usein myös Wi-Fi nimitystä. Wi-Fi on rekisteröity tavaramerkki, jota hallinnoi Wi-Fi alliance (verkkosivu https://www.wi-fi.org/). Se myöntää yrityksille (maksua vastaan) oikeuden käyttää "Wi-Fi sertifioitu" -merkkiä yrityksen valmistamissa verkkolaitteissa.

IEEE 802.11 -verkkojen tukiasemat palvelevat kukin omaa erillistä joukkoa laitteita. Jokainen tukiasema on erikseen yhdistetty langalliseen verkkoon.  Jokainen laite kommunikoi vain yhden tukiaseman kanssa kerrallaan. Laite voi aika ajoin vaihtaa tukiasemaa. Jokaisella tukiasemalla on tunniste (Service Set ID, SSID) ja MAC-osoite. Tukiasema myös kommunikoi siihen liittyneiden laitteiden kanssa tietyllä kanavalla.

IEEE 802.11 jakaa käytettävän taajuusalueen (yleensä joko 2,4 gigahertsiä (GHz) tai 5 GHz) kanaviin, joita 2,4 GHz:n alueella on vähintään 11 (USA). Euroopassa kanavia on 13 ja Japanissa 14. Kanaville varatut kapeat taajuuskaistat ovat limittäin (eli ne menevät osittain päällekkäin), jolloin vierekkäisillä kanavilla kommunikoivien laitteiden viestit voivat häiritä toisiaan. Kanavat 1, 6 ja 11 eivät ole keskenään päällekkäin, joten niitä voidaan käyttää vaikka laitteet kuulisivat toistensa viestejä. 

Tukiaseman käyttämä kanava on konfiguroitavissa. Jos mahdollista, niin tukiaseman kanava kannattaa valita niin, että se on mahdollisimman kaukana sen kuulemien muiden tukiasemien kanavista. Näin kommunikointi tukiaseman ja siihen yhdistyneiden laitteiden välillä on mahdollisimman häiriötöntä.  Huomaa, että naapuritukiasemilla voi olla käytössä sama kanava. Tämä on yleisin syy siihen, että kotiverkon langaton tukiasema tuntuu pätkivän tai toimivan kovin hitaasti. Erityisesti kerrostaloissa tai kahviloissa tukiasema voi kuulla useiden muiden tukiasemien signaaleja. Jos niistä yksi tai useampia on samalla (tai hyvin läheisellä) kanavalla, niin ne eivät voi lähettää samaan aikaan, jolloin lähetyksiin tulee viiveitä. Ne voivat kyllä käyttää samaa kanavaa, mutta viestien lähetykset täytyy tehdä vuorotellen, jotta viestit voidaan vastaanottaa oikein. Jos siis havaitset ongelmia langattomassa liikenteessä, niin kannattaa tarkistaa, millä kanavilla kyseiseen kohtaan kuuluvat tukiasemat liikennöivät ja valita oman tukiaseman kanava mahdollisimman kauas muista sille kuuluvien tukiasemien kanavista.

Koska WLANissa ei ole mitään koordinointia, niin useiden tukiasemien samanaikaista kuulumista kutsutaan joskus Wi-Fi viidakoksi (engl. Wi-Fi jungle). Kun tällaisessa viidakossa yrittää yhdistää omaa tietokonettaan internetiin, niin valittavana voi olla useita langattomia lähiverkkoja ja niiden tukiasemia. 

Kun laite haluaa tällaisessa usean tukiaseman viidakossa liittyä verkkoon, niin sen pitää kiinnittyä (engl. associate) yhteen tukiasemaan. Se siis rakentaa 'näkymättömän langan' itsensä ja tukiaseman välille. Kaikki laitteen liikennöinti tapahtuu vain ja ainoastaan tämän tukiaseman kanssa. 

Ennen liittymistään laite voi vain passiivisesti hetken kuunnella liikennettä kaikilla kanavilla ja etsiä sieltä erityisiä merkkikehyksiä (engl. beacon frame). Niillä tukiasemat mainostavat itseään.  Merkkikehyksessä on tukiaseman tunniste (SSID, service set ID) ja MAC-osoite. Näiden perusteella laite voi sitten valita haluamansa tukiaseman.

Vaihtoehtoisesti laite voi ennen liittymistään aktiivisesti lähettää kyselykehyksen (engl. probe), johon tukiasemat sitten vastaavat. Kyselykehyksiä käytetään tyypillisesti silloin, kun laite on aiemmin käyttänyt tiettyä WiFi-verkkoa ja yrittää nyt liittyä uudelleen samaan verkkoon.

Standardit eivät millään tavalla määrittele kriteerejä, joiden mukaisesti laitteen pitäisi tukiaema valita. Laite saa tehdä valinnan haluamallaan tavalla. Useimmiten laitevalmistajat käyttävät valintaperusteena signaalin voimakkuutta.

Kun laite on päättänyt, mihin tukiasemaan se haluaa kiinnittyä, niin se lähettää erityisen kiinnittymispyynnön (engl. association request frame), jonka tukiasema hyväksyy vastausviestillään. Nyt laite voi linkkikerroksen näkökulmasta liikennöidä muun verkon kanssa tukiaseman kautta, mutta ylempien kerrosten kannalta se ei vielä ole liittyneenä internetiin. Siltä puuttuu esimerkiksi vielä IP-osoite. Toki laitteen tarvitsemat varkkoyhteyteen liittyvät tiedot voi jo olla asetettuna laitteen konfigurointitietoihin, mutta yleensä langattomaan verkkoon liittyvä laite pyytää näitä tietoja DHCP-protokollalla.

Kuten monet avoimia Wi-Fi -verkkoja käyttäneet jo tietävätkin, niin monet palveluntarjoajat rajoittavat langattoman verkon käyttöä, jolloin tukiasemaan liittymisen yhteydessä tarkistetaan verkon käyttöoikeus. Tämä voidaan tehdä usella eri tavalla. Seuravassa on lyhyesti esitelty yleisimpiä tapoja.

Verkon käyttöoikeuden tunnistaminen voidaan tehdä käyttämällä ns. langattoman verkon salasanaa. Tällöin tukiasema hyväksyy kiinnittymispyynnön vain sellaisilta laitteilta, jotka osaavat antaa sille oikealla salausmenetelmällä salatun oikean salasanan. Useimmat kaupasta tai omalta internet-palvelun tarjoajalta (ISP) ostettavat tai lainattavat Wi-Fi -tukiasemat on nykyisin oletusarvoisesti suojattu tällä menetelmällä. Tällöin tukiaseman tunniste ja salasana on usein valmiina tukiaseman pohjassa olevassa tarrassa. 

Tukiasema voi tunnistaa laitteen myös laitteen käyttämän MAC-osoitteen avulla. Tällöin tukiasemalle on etukäteen kerrottava sallittujen laitteiden MAC-osoitteet.  MAC-osoitteen käyttämistä tunnistuksessa ei pidetä turvallisena vaihtoehtona, koska pahantahtoinen toimija voi helposti verkkoa kuuntelemalla saada selville sallitun MAC-osoitteet. Koska nykyään laitteen MAC-osoite on helposti vaihdettavissa, pahantahtoisen toimijan on helppo kiinnittyä tällaiseen pelkästään MAC-osoitteilla suojattuun verkkoon.

Laitteen sijaan langattoman verkon haltija voi edellyttää käyttäjän tunnistamista. Tällöin tukiasema käyttää erillistä tunnistuspalvelua, johon käyttäjän pitää tunnistautua esimerkiksi käyttäjätunnuksella ja salasanalla. Tunnistautumisen jälkeen käyttäjän laitteella voi liikennöidä verkossa. Jätämme erilaiset käyttäjäntunnistusmenetelmät myöhemmille kursseille, esim. tietoturvakurssit Cyber security.

<quiz id="de59073c-3506-56e4-95bc-95b0610d2ac0"> </quiz>

### Lähetysvuorojen jakelu

IEEE 802.11 standardin mukaan toimivat verkot käyttävät kehysten yhteentörmäysten välttämiseen CSMA/CA menetelmää, johon jo tutustuimme lyhyesti aiemmin. Siinähän tavoitteena oli erityisesti välttää yhteentörmäyksiä.   Katsotaan nyt tarkemmin. miten tämä WLAN-verkoissa tehdään.

CSMA/CA:ssa edellytään, että lähettäjän pitää aina odottaa pieni hetki vapaata kanavaa kuunnellen ennen kuin lähetys voi alkaa. Näitä odotusaikoja on itseasiassa määritelty kaksi eri mittaista. SIFS (Short Inter-frame Spacing) on lyhyt ajanjakso, jota käytetään odotuksessa silloin, kun lähettäjä jo ennalta tietää, että seuraavan kehyksen lähetysvuoro on oikeastaan sillä. Esimerkiksi datan vastaanottokuittauksien lähetys käyttää tätä lyhyempää odotusta. Lyhyt odotus tarvitaan lähinnä siihen, että alkuperäisen datan lähettäjä ehtii vaihtaa omat antenninsa lähetystilasta vastaanottotilaan.  Jos lähettäjä pyrkii lähettämään uuden datakehyksen, niin silloin se käyttää odotuksen kestona pidempää DIFS:iä (DCF Inter-frame Spacing), jolla siis erotellaan eri lähettäjien eri datakehykset toisistaan. Koska SIFS on lyhyempi kuin DIFS, niin erilaiset kuittausviestit yms. saavat prioriteetin, jolloin ne lähetetään ensin ja pidemmät datakehykset joutuvat odottamaan hiukan kauemmin.

WLAN-verkkojen käyttämässä CSMA/CA:ssa lähettäjä käyttää lisäksi kanavanvarausta. Koska varauskehykset ja niiden kuittaukset ovat huomattavan paljon lyhyempiä kuin varsinaiset datakehykset, niin yhteentörmäykset varauskehysten kesken ovat nopeita selvittää. Lähettäjähän ei kuuntele tuliko yhteentörmäys, joten jos yhteentörmäys tulee pitkän datakehyksen aikana, niin lähettäjä kuitenkin lähettää kehyksen kokonaan. Kätketyn aseman ongelman vuoksi tällainen yhteentörmäys on mahdollinen. 

Varausviestien kanssa lähettäjä, odotettuaan tuon DIFS aikaa, lähettääkin ensin pienen varauskehyksen (Request To Send, RTS), jossa se kertoo, kuinka ison kehyksen se haluaa lähettää ja kuinka kauan lähetys tulee kestämään. Vastaanottaja vahvistaa tämän varauksen erillisellä vahvistusviestillä (Clear To Send, CTS), jonka se lähettää heti SIFS ajan jälkeen, jolloin mikään muu asema ei vielä voi lähettää. Koska kuittaus tulee ison kehyksen vastaanottajalta, niin se tavoittaa kaikki ne laitteet, joiden mahdollinen lähetys voisi häiritä datakehyksen lähetystä. Ne osaavat nyt tämän kuittausviestin tietojen avulla odottaa koko datakehyksen lähetyksen ajan ennenkuin ne edes yrittävät omaa lähetystään. Näin alkuperäiseltä lähettäjältä kätkössä oleva asema saa tiedon lähetyksestä, jota se ei itse muuten pystyisi havaitsemaan.

<img src="../img/5-6-kehyksen-lahetys.svg" alt="Kuvassa on viestien vaihdot yhden kehyksen lähettämiseen liittyen. Kuvassa on siis kaksi asemaa/laitetta A ja B ja niiden välissä tukiasema BS. Viestien vaihto alkaa tilanteesta, jossa tukiasema BS lähettää vastaanottokuittauksen ack edellisestä datakehyksestä. Tämä kuittaus menee molemmille laitteille. Sen jälkeen DIFS ajan kuluttua asema A lähettää varauskehyksen (Request to send) tukiasemalle, joka kuittaa sen SIFS ajan kuluttua vahvistusviestillä Clear to send). Tämä vahvistusviesti menee molemmille laitteille. Ensimmäinen laite A aloittaa sitten SIFS ajan kuluttua oman dataviestinsä lähettämisen. Toinen laite kirjaa itselleen tiedoksi, että se ei voi lähettää niin kauaa kuin tuon datan siirto kestää ja siis odottaa siirron päättymistä. Kun datan siirto päättyy, niin tukiasema lähettää taas SIFS ajan kuluttua kuittausviestin molemmille asemille."> </img>

KUVA: Kuvassa on esitettynä yhden datakehyksen lähetykseen liittyvät viestit. Kuvassa on tukiasema BS ja laitteet A ja B. A haluaa lähettää datakehyksen tukiasemalle. Aika kulkee kuvassa ylhäältä alaspäin. A voi siis lähettää varausviestin kun edellisen datakehyksen kuittausviestistä on kulunut DIFS aikayksikköä. Tähän se saa vahvistuksen ja voi lähettää varsinaisen datakehyksen. Datakehyksen lähetyksen onnistuminen edellyttää vielä kuittausviestin saapumista. Huomaa, että kuittaus- ja vahvistusviestit kuuluvat kaikille vastaanottajan kuuluvuusalueella, vaikka varsinainen datansiirto ei kuuluisikaan.


### Langattoman verkon kehys


Langattoman verkon kehyksessä (katso kenttien selitykset englanninkielisestä wikipediasta [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11#Layer_2_%E2%80%93_Datagrams)) on neljä osoitetta. Muistathan, että langallisen ethernet-verkon kehyksessä oli vain kaksi osoitetta (vastaanottajan MAC ja lähettäjän MAC). Langattomassa verkossa kehykselle on määritelty neljä osoitekenttää, joista tosin yleensä ei käytetä kuin kolmea. Muista, että nämä kehykset ovat linkkikerroksella, jolloin kehysten osoitetiedot ovat MAC-osoitteita. Osoitekenttien tulkinnat vaihtelevat sen mukaan mille laitteelle (eli mihin suuntaan) kehys on menossa.

Kehyksestä ja sen kentistä on hyvä kuva sivulla [https://i.stack.imgur.com/A6N3j.gif](https://i.stack.imgur.com/A6N3j.gif).

Kehyksen alussa Frame control kentässä on joukko kehyksen tulkintaan vaikuttavia lyhyempiä 1-4 bitin mittaisia kenttiä tai lipukkeita, joista kentät ToDS ja FromDS määrittävät kehyksen osoitekenttien tulkinnat. Tuo DS nimessä on lyhenne englanninkielen sanoista Distribution system ja tässä yhteydessä se tarkoittaa langattoman yhteyden (eli lähettäjän ja vastaanottajan) ulkopuolista verkkoa eli nimenomaan sitä verkkoa, jossa tukiasema on kiinni. Muistathan, että tarkastelemme asioita linkkitasolla, ja kahden langattoman laitteen välinen viestintä ei vielä muodosta verkkokerroksen näkökulmasta yhtä ehjää linkkiväliä verkkokerroksen lähettäjältä seuraavalle verkkokerroksen vastaanottajalle, ellei tukiasema ole samalla myös reititin. Jos viesti on tulossa kauempaa, niin FromDS on 1 ja jos viesti on menossa kauemmas niin ToDS on 1. Näin saadaan 4 erilaista yhdistelmää. 00 - näiden kahden laitteen välinen viesti, tyypillisesti kontrolliviesti, 01- menossa eteenpäin, 10- tulossa kauempaa, 11 - tulossa kauempaa ja menossa eteenpäin.  Tätä luokkaa 11 käytetään lähinnä ad hod -verkoissa, joissa joudutaan tekemään kehysten edelleenlähetystä linkkikerroksella.


| ToDS  | FromDS  | Osoite 1  | Osoite 2  | Osoite 3  | Osoite 4  | 
| ----- | --------- | ---------- | ---------------------- | ----------------------- | ---------------------- |
| 0   | 0     | vastaanottajan MAC  | lähettäjän MAC    | tukiaseman id        |  ei käytössä         |
| 0   | 1     | vastaanottajan MAC  | tukiaseman MAC  | lähettäjän MAC (esim. reititin)    | ei käytössä      |
| 1   | 0    |  tukiaseman MAC | lähettäjän MAC    | vastaanottajan MAC (esim. reititin)   | ei käytössä      |
| 1   | 1     | vastaanottavan tukiaseman MAC  | lähettävän tukiaseman MAC   | vastaanottajan MAC        | lähettäjän MAC    |


Taulukosta voi havaita, että osoitteet 1 ja 2 ovat tämän langattoman yhteyden lähettäjä ja vastaanottaja. Osoitteet 3 ja 4  kertovat sitten koko aliverkon osalta alkuperäisen lähettäjän tai vastaanottajan, joka siis on antanut kehyksen linkkikerrokselle tai vastaavasti vastaanottovaiheessa saa kehyksen sisällön linkkikerrokselta verkkokerrokselle.

Kehyksen lopussa olevat tarkistusbitit (Frame Check Sequence, FCS) määritetään jokaiselle langattoman verkon kehykselle aina lähetysvaiheessa ja tarkistetaan vastaanottajalla.


<quiz id="b2b600cd-270a-5bdc-9c23-46afd8854a25"> </quiz>




