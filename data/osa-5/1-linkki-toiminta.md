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

Linkkikerroksen tehtävät liittyvät nimen omaan viestien siirtoon yhden fyysisen kerroksen yhteyden eli linkin yli. Linkkikerroksen pitää huolehtia, että kukin viesti pääse muuttumattomana linkin yli. Fyysisen kerroksen ominaisuuksista johtuen kanavassa voi kulkea vain yhden viestin tietoja yhdellä ajanhetkellä. 

Linkkikerroksen täytyy hallinoida lähettäjien vuorottelua kanavassa eli vuonvalvontaa. Vuonvalvonnan ratkaisut ovat erilaisia erilaisille fyysisille linkeille. Liikennöinti yhdessä linkissä voi olla yksisuuntaista (engl. half dublex) tai kaksisuuntaista (engl. full dublex), linkki voi olla langallinen tai langaton. Lisäksi kytkimet saattavat joutua puskuroimaan viestejä, koska osa kytkimistä osaa yhdistää samalla kommunikointitekniikalla toteutettuja eri nopeuksisia fyysisiä yhteyksiä toisiinsa. Esimerkiksi ethernet-kytkimessä voi olla nopeudeltaan sekä 10 Mb/s, 100 Mb/s että jopa 1 Gb/s portteja.

Viestin lähettäminen linkkiin ei siis saa häiritä mahdollisia muiden lähettämiä viestejä samassa linkissä. Tämä koskee erityisesti väylätopologiaa, jossa samassa kanavassa voi kulkea useiden eri lähettäjien viestejä. Koska viestit usein lähetetään sähköisinä signaaleina, jotka sekoittuvat toisiinsa helposti, on tärkeää, että kanavassa kulkee vain yhden lähettäjän viesti kerrallaan. Tällöin sanotaan, että lähettäjä on varannut kanavan omaan käyttöönsä. Tällaisia yhteiskäyttöisen kanavan varaamiseen liittyviä menetelmiä tarkastellaan hetken kuluttua aliluvussa lähetysvuorojen jakelu.

Linkkikerroksellakin vastaanottaja pitää tunnistaa, jotta viesti pitää saada oikealle vastaanottajalle. Tunnistamiseen tarvitaan vastaanottajan osoite. Linkkikerroksella tämä osoite on yleensä ethernet-verkon [MAC-osoite](https://fi.wikipedia.org/wiki/MAC-osoite), koska se on jo laitevalmistajan kyseiselle laitteelle etukäteen antama. Se on siis kiinteä laitteistoon liitetty osoite, joka alunperin ei voinut vaihtua. MAC-osoitteen 48 bittiä on jaettu kahteen osaan. Ensimmäiset 24 bittiä on laitevalmistajan tunniste ja jälkimmäiset 24 bittiä laitteen tunniste. Jokaisella valmistetulla laitteella, tai oikeammin verkkosovittimella, on oma maailmanlaajuisesti yksiklöivä tunniste.

Koska viesti ei saa muuttua matkalla on linkkikerroksen havaittava mahdolliset virheet ja tarvittaessa joko korjattava bittivirhe tai pudotettava paketti. Virheiden havaitsemisesta ja korjaamisesta on lisää seuraavassa aliluvussa.

## Osoitteen selvittäminen - ARP
 

## Linkkikerroksen toteutuksesta

Linkkikerroksen toteutus on oltava jokaisessa laitteessa, joka on liitettynä internet-verkkoon. Yleensä linkkikerroksen toiminnallisuus  on toteutettu suoraan laitteistolla. Tietokoneessa on tyypillisesti erillinen verkkosovitin, joka muun tietokoneen kannalta on I/O-laite (Nästä tarkemmin Tietokoneen toiminta -kurssilla). Verkkosovitin liitetään tietokoneen päässä koneen sisäiseen väylään kuten muutkin I/O-laitteet. Tietoliikennekaapeli liitetään sitten verkkosovittimella olevaan liittimeen. Nykyisin verkkosovittimet on usein integroitu osaksi tietokoneen emolevyä, mutta aiemmin ne olivat erillisiä verkkokortteja, joita voi poistaa ja lisätä laitteeseen.  Verkkosovittimessa tai verkkokortissa on oma laiteohjain (engl. device controller), joka on usein toteuttu laitteisto-ohjelmistona (engl. firmware), joka huolehtii linkkikerroksen toiminnoista. Käyttöjärjestelmässä puolestaan on laiteajuri (engl. device dirver), joka huolehtii käyttöjärjestelmän ja laiteohjaimen välisestä kommunikoinnista.

Verkkosovittimen ja sen laiteohjaimen tehtävänä on siis huolehtia viestien lähettämisvaiheessa vähintään vuonvalvonnasta ja bittien koodaamisesta ja lähettämisestä fyysisen linkin edellyttämässä muodossa. Lisäksi sen tehtäviin kuuluu kuunnella kanavaa, tunnistaa itselle saapuvat viestit, vastaanottaa ne ja purkaa fyysisestä signaalista viestin bitit. Huomaa, että verkkosovitin ja sen laiteohjain kuulee kaiken liikenteen, mutta se suodataa siitä vain itselle saapuvat viestit. Myös virhetarkistus kuuluu laiteohjaimen tehtäviin. 

Linkkikerroksella käytettävän siirtokehyksen (engl. frame) muodostaminen verkkokerrokselta saapuvan datagrammin ympärille voi olla joko laiteohjaimen tai laiteajurin tehtävä. Eli se voidaan tehdä joko laitteistolla tai ohjelmistolla. Tässä on vaihtelua eri toteutusten väilllä.
  

KUVA: linkkikerros.svg



## Ethernet

Ethernet on tällä hetkellä yleisin lähiverkon toteutustekniikka.
https://fi.wikipedia.org/wiki/Ethernet

Kehystys (framing)
  Kehyksen rakenne ja koko riippuu siitä, millainen linkki on kyseessä
  Otsake, data, lopuke
Kohteen ja lähteen osoittaminen
  Yhteiseen linkkiin voi olla liitettynä useita laitteita
  Käytössä laitetason MAC-osoite (Medium access control)
  









