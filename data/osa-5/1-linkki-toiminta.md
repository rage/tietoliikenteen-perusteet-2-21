---
path: '/osa-5/1-linkki-toiminta'
title: 'Yleistä linkkikerroksen toiminnasta'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat selittää linkkikerroksen toiminnallisuus (MAC- 
   osoitteet, bittivirheiden havaitseminen) ja ARP-protokollan 
   käyttö. 
- Osaat selittää yhteiskäyttöisen siirtokanavan varaus ja käyttö
- Osaat selittää, kuinka koneita voi yhdistellä lähiverkoiksi
- Osaat selittää reitittimen, kytkimen ja keskittimen erot 

</text-box>


## Linkkikerros

Linkkikerros huolehtii viestin välityksestä vain samassa aliverkossa olevien laitteiden välillä. Nämä laitteet voivat kommunikoida keskenään pelkän linkkikerroksen välityksellä. Verkkojen väliseen liikennöintiin tarvitaan reititystä ja reitittimiä. Muistathan, että reitittimet yhdistävät aliverkkoja toisiinsa, joten reitittimen kummallakin puolella on eri aliverkko ja siksi reitittimen täytyy lähetysvaiheessa muodostaa uusi linkkikerroksen kehys seuraavaa aliverkkoa varten.

Yhdessä aliverkossa olevat laitteet voivat havaita muiden saman aliverkon laitteiden lähettämän liikenteen, joten ne voivat suoraan vastaanottaa toisen laitteen lähettämän signaalin. Yhdessä aliverkossa on käytännössä vähintään kaksi laitetta, mutta laitteita voi olla useampiakin. Samaan aliverkkoon liitettävien laitteiden maksimimäärä riippuu käytettävästä verkkotekniikasta ja [verkon topologiasta](https://fi.wikipedia.org/wiki/Verkkotopologia). Esimerkiksi tähtiverkossa kytkimen porttien lukumäärä rajoittaa siihen liitettävien laitteiden lukumäärää. Väyläverkossa taas laitteiden fyysinen etäisyys tai oikeammin signaalin kulkuaika päästä päähän rajoittaa aliverkon kokoa. Renkaassa puolestaan rajoitteeksi tulee yhteen kierrokseen kuluva aika.

KUVA: https://fi.wikipedia.org/wiki/Tiedosto:Verkkotopologiat.png

Nykyisin tähtiverkko on tyypillinen verkontopologia. Siinä verkon keskipisteessä on yleensä linkkikerroksen kytkin, joka yhdistää verkon sakaroita toisiinsa. Yhdessä sakarassa on sitten reititin, jonka kautta tämä aliverkko on yhteydessä muualle. Kotiverkoissa usein kytkin ja reititin eivät ole erillisiä laitteita, vaan monitoimireititin toimii verkon keskipisteessä kotiverkon kytkimenä ja samalla reitittimenä ulkoverkon suuntaan. Tähtiverkkoja voidaan laajentaa useamman tähden kokoiseksi, kun yhteen sakaraan kiinnitetään toinen kytkin tai fyysisellä kerroksella toimiva keskitin tai toistin (engl. repeater).

## Linkkikerroksen tehtävät

Linkkikerroksen tehtävänä on siis huolehtia viestin kulkeminen yhden fyysisen kerroksen yhteyden eli linkin yli. Tähän liittyen viesti pitää saada muuttumattomana perille ja oikealle vastaanottajalle. Linkkikerroksellakin tarvitaan siis vastaanottajan tunniste eli osoite. Käytämme tällä kurssilla esimerkkinä vain ethernet-verkkoa, joten myös vastaanottajan tunnisteena on tällä kurssilla ethernet verkossa oleva [MAC-osoite](https://fi.wikipedia.org/wiki/MAC-osoite).

Koska viesti ei saa muuttua matkalla on linkkikerroksen havaittava mahdolliset virheet ja tarvittaessa joko korjattava bittivirhe tai pudotettava paketti. Virheiden havaitsemisesta ja korjaamisesta on lisää seuraavassa aliluvussa.

Viestin lähettäminen linkkiin ei myöskään saa häiritä mahdollisia muiden lähettämiä viestejä samassa linkissä. Tämä koskee erityisesti väylätopologiaa, jossa samassa kanavassa voi kulkea useiden eri lähettäjien viestejä. Koska viestit usein lähetetään sähköisinä signaaleina, jotka sekoittuvat toisiinsa helposti, on tärkeää, että kanavassa kulkee vain yhden lähettäjän viesti kerrallaan. Tällöin sanotaan, että lähettäjä on varannut kanavan omaan käyttöönsä. Tällaisia yhteiskäyttöisen kanavan varaamiseen liittyviä menetelmiä tarkastellaan hetken kuluttua aliluvussa lähetysvuorojen jakelu.

Kalvo3 linkkikerroksen tehtäviä
Vuonvalvonta, puskurointi
  Kytkimessä on useita erinopeuksisia linkkejä
Yksisuuntainen /kaksisuuntainen liikenne
Yksisuuntainen: lähetysvuorojen hallinta

  

## Ethernet

Kehystys (framing)
  Kehyksen rakenne ja koko riippuu siitä, millainen linkki on kyseessä
  Otsake, data, lopuke
Kohteen ja lähteen osoittaminen
  Yhteiseen linkkiin voi olla liitettynä useita laitteita
  Käytössä laitetason MAC-osoite (Medium access control)
  

## Linkkikerroksen toteutuksesta

kalvo2 Linkkikerroksen tehtävät / linkkikerros
Laitetoimintoa
Siirtää paketin fyysistä linkkiä pitkin koneelta (solmulta (node)) toiselle
langallinen / langaton
bitit sisään, bitit ulos 
Kapseloi paketin sopivaan siirtomuotoon
Siirtokehys (frame)
  




Luotettava siirto
  Langattomilla linkeillä suuri virhetodennäköisyys
  Linkkitaso huolehtii oikeellisuudesta
  Miksi tästä täytyy huolehtia vielä kuljetuskerroksella?
  Jotkut linkkityypit eivät huolehdi lainkaan!
  Jos kehys hävitettävä .. 

Kalvo 4: Miten linkkikerros on toteutettu
Jokaisessa koneessa!
Linkkikerroksen toteutus usein “sovittimessa” (esim. verkkokortti)
Linkki ja fyysinen kerros
joka liitetään koneen väylään
Yhdistelmä laitteistoa, ohjelmistoa ja laitteisto-ohjelmisto (firmware)






