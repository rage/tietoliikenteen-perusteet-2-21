---
path: '/osa-5/5-langaton'
title: 'Langaton verkko'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata langattomien verkkoje toimintaa ja ongelmia.
- Osaat kertoa mikä on WLAN ja miten viestit kulkevat sen ja langallisen verkon välillä.
- Tiedät mikä on tukiasema ja osaat kuvata sen perustoiminnan.

</text-box>

## Langaton verkko

Kaikille langattomille verkoille on yhteistä se, että käyttäjien laitteet (voidaan kutsua myös solmuiksi tai isäntäkoneiksi) ovat langattomasti yhteydessä verkon palvelut tarjoavaan tukiasemaan. Tällainen langaton linkki käyttäjän laitteen ja tukiaseman välillä toimii yleensä radioaalloilla. Niiden ongelma on se, että linkin kuuluvuusalue on rajattu, joten laitteen ja tukiaseman etäisyys on rajallinen. Langaton linkki on tyypillisesti toteutettu radioaalloilla, jolloin kaikki tukiaseman läheisyydessä olevat laitteet voivat kuulla kaiken liikenteen. Toisaalta radioallot vaimenevat etäisyyden kasvaessa. Tietoliikenteessä tästä puhutaan signaalin vaimenemisena. Signaalia (eli radioaaltoja) häiritsevät myös muiden laitteiden aiheuttamat häiriöt ja erilaisista pinnoista tapahtuvat heijastumiset. NÄiden seikkojen vuoksi kuuluvuus tukiaseman ja käyttäjän laitteen välillä voi vaihdella, vaikka molemmat laitteet olisivat paikallaan.

Langattomalle verkolle erityistä haastetta tuo kuitenkin käyttäjien laitteiden liikkuminen. Yhä useammin käytämme laitteita, joita kannetaan mukana ja jotka ovat yhdistettynä verkkoon myös liikkuessaan. Vaikka laite voi vaihtaa paikkaa myös langallisessa verkossa, niin se on siirtymisen aikana poissa verkosta. Langattomassa verkossa laite voi olla yhteydessä tukiasemaan myös silloin kun se liikkeessä.

Tällä hetkellä käytössä on kahden täysin erilaisen tekniikan avulla toteutettujan langattomia verkkoja. Ethernet-verkkoja mukailevia [WLAN](https://fi.wikipedia.org/wiki/WLAN)-verkkoja, jotka noudattavat jotain IEEE:n standardoimaa tiedonsiirtotapaa. [IEEE:n standardin 802.11](https://fi.wikipedia.org/wiki/IEEE_802.11) eri versiot määrittelevät erilaisia langattomia verkkotekniikoita langattoman lähiverkon toteuttamiseen. Osa laitteista ja tukiasemista tulee näistä vain yhtä ja osa tukee usampaa erilaista versiota. Nämä standardi eri versiot on nimetty kirjaimilla a-n. 

Toinen yleinen langaton verkko on [matkapuhelinverkko](https://fi.wikipedia.org/wiki/Matkapuhelinverkko) ja eritysien sen välityksellä käytettävä mobiilidata. Matkapuhelinverkkojen tekniikkakin on standardoitua. Koska nämä ovat puhelinverkkoja, niin niitä on alunperin standardoitu alueittain kuten langallisiakin puhelinverkkoja. Kaikenlaisia puhelinverkkoja standardoi [kansainvälinen televiestintäliitto ITU](https://fi.wikipedia.org/wiki/Kansainv%C3%A4linen_televiestint%C3%A4liitto). ITU keskittyy lähinnä eri operaattoreiden välisten asioiden säätelyyn. Operaattoreiden toiminta-alueilla on myös muita standardointiorganisaatioita, jotka vaikuttavat käytettäviin tekniikoihin. Nykyisessä globaalissa tilanteessa alueelliset standardointiorganisaatiot tekevät yhteistyötä [3GPP](https://fi.wikipedia.org/wiki/3GPP):ssä, jotta tulevat standardit olisivat mahdollisimman yhteensopivia eri puolilla maailmaa. Euroopassa näiden verkkojen standardoinnista vastaa [ETSI](https://fi.wikipedia.org/wiki/ETSI). 

Matkapuhelinverkkojen, joita kutsutaan myös mobiiliverkoiksi, kehitystä on jaettu sukupolviin. Toisen sukupolven (2G) verkot käyttivät GSM-tekniikkaa. Sen jälkeen siirryttiin [3G](https://fi.wikipedia.org/wiki/3G)-verkkoihin. Nyt on jo käytössä [4G](https://fi.wikipedia.org/wiki/4G)-verkkoja, mutta ne eivät vielä ole käytettävissä kaikkialla. Tällä hetkellä standardointi kohdistuu tulevan 5G-verkon tekniikoihin. Tavoitteena on sekä nopeuttaa signaalin kulkua verkossa (pienentää etenemisviivettä) että samanaikaisesti lisätä siirrettävän datan määrää aikayksikköä kohti (eli kasvattaa verkon nopeutta).

Muita tunnettuja langattomia standardoituja verkkoja ovat Bluetooth ja ZigBee. 

Tarkastelemme tällä kurssilla kuitenkin lähinnä WLAN-verkkojen toimintaa. Yleiset langattomaan liikennöintiin liittyvät seikat kuitenkin soveltuvat kaikille langattomille verkoille.


## Ad hoc -verkko

Langaton verkko voidaan rakentaa myös ilman tukiasemia. Tällöin puhutaan niin sanotuista ad hoc -verkoista, joiden toiminnallisuuden verkon rakentaja määrittelee täysin itsenäisesti. Tällaisen verkon ei tarvitse noudattaa mitään standardeja, mutta verkon toteuttajan on kuitenkin hyvä tietää kyseisen alueen radiotaajuuksien käyttösäännöt, jotta ei vahingossakaan syyllisty rikokseen.

Yksinkertaisimmillaan ad hoc -verkko on vain kahden laitteen välinen, jolloin laitteiden välinen liikennöinti tehdään langattomasti suoraan laitteelta toiselle.  Laajimmillaan tällaiset ad hoc -verkot voivat olla useiden satojen sensorien omia verkkoja. Näistä langattomista sensoriverkoista on hyvä kuvaus englanninkielisessä wikipediassa sivulla [wireless sensor networks](https://en.wikipedia.org/wiki/Wireless_sensor_network).

Ad hoc -verkon koneet voivat siis suoraan kommunikoida vain omalla kuuluvuusalueellaan olevien muiden koneiden kanssa. Koska verkossa ei ole mitään palveluja suoraan tarjolla. Jos tällaisen verkon laitteen pitää kommunikoida kuuluvuusalueensa ulkopuolella olevien laitteiden kanssa, niin verkon pitää tarjota reititys näiden laitteiden välillä. Verkkon voidaan toki toteuttaa myös vaikka oma nimipalvelu ja verkon laitteiden tunnisteiden jakelu. Jonkun on siis tuotettava nämä palvelun tällaisen satunnaisverkon käyttäjille. 


Ad hoc -verkkojen käyttö tiettyihin specifeihin tarkoituksiin on vuosien varrella selvitelty paljonkin. WLANin toteutuksessa käytetyllä tekniikalla toteutettujan ad hoc -verkkoja kutsutaan usein  [mobiileiksi ad hoc -verkoiksi](https://fi.wikipedia.org/wiki/Mobile_ad-hoc_network) (MANET). Autoja ajatellaan on myös pohdittu erityisten [vehicular ad hoc -verkkojen](https://en.wikipedia.org/wiki/Vehicular_ad-hoc_network) toiminnallisuutta. Näiden verkkojen erityispiirre on vekon solmujen suuri liikenopeus.

## Langattoman verkon ongelmia

Signaalin heijastuminen ja siitä aiheutuva viive voi pahimmillaan sekoittaa alkuperäisen suoraan menevän ja heijastunutta reittiä hiukan kauemmin kulkevan signaalin siten, että vastaanottaja ei pysty enää selvittämään viestin sisältöä tästä yhteissignaalista. Usein heijastunut signaali on kuitenkin vaimentunut sen verran, että alkuperäinen signaali erottuu vastaanottajan kannalta riittävästi.

Koska signaali kulkee ilmateitse, niin maaston muodot voivat jopa kokonaan estää signaalin kulkemisen vastaanottajalle. Langattoman verkon toimnnan kannalta signaalin esteetön kulku on välttämätöntä ainakin lähettäjän ja vastaanottajan välillä. 

Langattomista verkoista on tunnistettu kaksi yleistä ongelmatilannetta, jota kutsutaan kätketyn aseman ja näkyvän aseman ongelmiksi. 

Kätketyn aseman (engl. hidden terminal) ongelmassa kaksi laitetta yrittää samanaikasesti viestiä kolmannelle. Nämä kaksi eivät kuitenkaan voi kuulla toistensa viestejä, koska ne eivät ole toistensa kuuluvuusalueella. Tämä voi johtua esimerkiksi maastoesteestä niiden välillä tai siitä, että ne ovat eri puolilla laitetta, jonka kanssa ne yrittävät kommunikoida.


KUVA pari. Joista toisesa kätketyn aseman ongelma ja toisessa näkyvän aseman ongelma

Näkyvän aseman (engl. exposed terminal) ongelmassa puolestaan laite kuulee toisen laitteen lähetyssignaalin ja jättää lähettämättä oman signaalinsa, vaikka signaalit eivät vastaanottajien kannalta mene sekaisin. Tällöin asemat ovat toistensa kuuluvuusalueella, mutta viestien vastaanottajat eivät kuulisi toisen aseman viestejä, joten niiden kannalta signaalien sekoittumista ei tapahtuisi.

Molemmat ongelmat heikentävät verkon toimintaa. Kätketyn asemant apauksessa molemmat lähetetyt viestit vaurioituvat ja se pitää lähettää myöhemmin uudelleen. Näkyvän aseman tapauksessa taas kaista jää käyttämättä, vaikka viesti olisi mennyt virheettömästi perille.

Koska näitä ongelmia ei voi langattomista verkoista poistaa, niin useimmissa verkoissa edellytetään, että kaikki virheettömästi vastaanotetut viestit kuitataan jo linkkikerroksen kuittauksella. Muistathan, että kuljetuskerroksen TCP-protokollakin käytti kuittauksia viestien perillemenon varmistamiseen. Nyt kuittauksia käytetään linkkikerroksella varmistamaan, että viesti meni perille. Kuittaukset lisäävät verkon liikennettä, mutta koska lähettäjällä ei langattomassa verkossa ole mahdollisuutta itse varmistua viestin perillemenosta, niin se joutuu turvautumaan vastaanottajan lähettämään kuittaukseen asian varmistamiseksi.


## WLAN / IEEE 802.11

IEEE 802.11 -tekniikalla toteutettu WLAN verkko on kotiverkoille tyypillinen langaton verkko. Myös yritysten omat sisäiset ja niiden asiakkailleen tarjoamat avoimet WLAN-verkot on toteutettu jollain IEEE 802.11 standardin versiolla.

Näistä verkoista ja niiden laitteista käytetään usein myös Wi-Fi nimitystä. Wi-Fi on rekisteröity tavaramerkki, jota hallinnoi Wi-Fi alliance (verkkosivu https://www.wi-fi.org/). Se myöntää yrityksille (maksua vastaan) oikeuden käyttää Wi-Fi sertifioitu merkkiä yrityksen valmistamissa verkkolaitteissa.


IEEE 802.11 -verkkoen tukiasemat palvelevat kukin omaa erillistä joukkoa laitteita. 





<b>
-	Langaton linkki, WLAN, WiFi
o	osoitteiden käyttö: langattomalta internetiin, internestistä langattomalle
o	CDMA
</b>



