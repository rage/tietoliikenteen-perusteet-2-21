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

### Siirtoviive

Siirtoviive on näistä kaikkien tutuin. Sen laskukaava on  sv = L/R, missä L on paketin (tai siirrettävän datan) koko bitteinä ja R on linkin nopeus bitteinä sekunnissa (bps). Näin saadaan siirtoviive, eli siirron kesto, sekunteina.

Vastaavia laskuja tehtiin ensimäisessä osiossa arvioina koko tiedosto siirron kestosta. Kun asiaa tarkastellaan vain yhden verkon solmun näkökulmasta, niin siirtoviivekin on vain siirron kesto yhden linkin yli seuraavalle verkon solmulle.

### Prosessointiviive

Prosessointiviive muodostuu solmun omasta viestin käsittelystä. Vastaanoton jälkeen solmun täytyy esimerkiksi selvittää viestin sisällön perusteella mihin linkkiin viesti ohjataan lähetystä varten. Nämä verkon sisällä toimivat solmut ovat yleensä reitittimiä ja tämä ohjauspäätös onkin keskeinen reitittimen toiminta. Se


### Etenemisviive


### Jonotusviive

Edelliseltä kurssilta Matkan varrella olevat reitittimet aiheuttavat tuon edellä kuvatun siirtoajan (tai oikeammin siirtoviiveen) lisäksi vielä vähän lisää viivettä. Viestin käsittelyyn menee hiukan aikaa (prosessointiviive). Lisäksi viesti voi joutua odottamaan linkin vapautumista hetkisen ennen kuin se voidaan lähettää (jonotusviive). Viimeinen viive on etenemisviive, joka ottaa huomioon sen miten kauas viesti on menossa. 

Voit katsoa ohjeet aloittamiseen myös seuraavalta videolta.

<youtube id="zvE8XA8D0gE"></youtube>

