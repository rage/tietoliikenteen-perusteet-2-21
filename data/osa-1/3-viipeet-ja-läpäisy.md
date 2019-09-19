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

Siirtoviive (engl. transmission delay) on näistä kaikkien tutuin. Sen laskukaava on  sv = L/R, missä L on paketin (tai siirrettävän datan) koko bitteinä ja R on linkin nopeus bitteinä sekunnissa (bps). Näin saadaan siirtoviive, eli siirron kesto, sekunteina.

Vastaavia laskuja tehtiin ensimäisessä osiossa arvioina koko tiedosto siirron kestosta. Kun asiaa tarkastellaan vain yhden verkon solmun näkökulmasta, niin siirtoviivekin on vain siirron kesto yhden linkin yli seuraavalle verkon solmulle.

### Prosessointiviive

Prosessointiviive (engl. processing delay) muodostuu solmun omasta viestin käsittelystä. Tämä jakautuu viestin vastaanottoon, viestin prosessointiin ja valmisteluun lähetystä varten. Tyypillisesti verkon sisällä toimivat solmut ovat reitittimiä, jolloin ne vastaanottavat paketin fyysisen kerroksen välityksellä. Sieltä paketti päätyy linkkikerrokselle käsittelyyn ja linkkikerrokselta edelleen varkkokerrokselle.
Vastaanottovaiheessa paketista poistetaan linkkikerroksen otsake. Samalla täytyy tarkistaa paketin eheys. Tällöin voiaan havaita mahdolliset syntyneet bittivirheet, kun paketista laskettua tarkistussummaa verrataan linkkikerroksen otsakkeessa olevaan tarkistussummaan. (Tarkistussumman laskennasta lisää myöhemmin kurssilla.) Jos paketti on vioittunut, niin se hylätään eikä sitä välitettä edelleen verkkokerrokselle. 
Reitittimissä viestin varsinainen prosessointi eli reitityspäätös tehdään verkkokerroksella. Tällöin paketin vastaanottajan IP-numeron perusteella reititin katsoo reititystaulustaan mihin ulosmenevään linkkiin paketti pitää lähettää, jotta se aikanaan päätyisi vastaanottajalle. Reitittimen pitää siis siirtää paketti vastaanottolinkistä lähetyslinkkiin. Tämän kuluu aikaa, joka on osa prosessointiviivettä. 
Kun paketti on valmis lähetettäväksi eteenpäin, se toimitetaan verkkokerrokselta linkkikerrokselle. Linkkikerros lisää tähän verkkokerroksen pakettiin oman otsakkeensa. Otsakkeen lisäyksen yhteydessä lasketaan mm. paketin likkikerroksen tarkistussumma ja tarvittaessa selvitetään vastaanottajan MAC-osoite silloin kun linkkinä toimii Ethernet-verkko.

Wikipedian sivulla https://fi.wikipedia.org/wiki/Prosessointiviive on kuvattu muutakin toimintaa, josta aiheutuu prosessointiviivettä.

### Etenemisviive

Etenemisviive (engl. propagation delay) on se aika, joka yhdeltä bitiltä kestää kulkea fyysisellä siirtotiellä lähettäjältä vastaanottajalle. Tähän vaikuttaa erityisesti käytettävä siirtomedia ja lähettäjän ja vastaanottajan fyysinen etäisyys. Tämä voidaan ilmaista kaavana ev = D/S, jossa D on etäisyys ja S on bitin etenemisnopeus siirtotiellä. Tällä kursilla käytämme etenemisnopeuden arviona aina valonnopeutta, vaikka joissakin tilanteissa etenemisnopeus on todellisuudessa sitä pienempi.

QUIZZ:  Mitkä seuraavista kuvaavat riittävän tarkasti valonnopeutta  3 km sekunnissa,   jne 30 cm /nanosekunti, ....

### Jonotusviive

Edelliseltä kurssilta Matkan varrella olevat reitittimet aiheuttavat tuon edellä kuvatun siirtoajan (tai oikeammin siirtoviiveen) lisäksi vielä vähän lisää viivettä. Viestin käsittelyyn menee hiukan aikaa (prosessointiviive). Lisäksi viesti voi joutua odottamaan linkin vapautumista hetkisen ennen kuin se voidaan lähettää (jonotusviive). Viimeinen viive on etenemisviive, joka ottaa huomioon sen miten kauas viesti on menossa. 

Voit katsoa ohjeet aloittamiseen myös seuraavalta videolta.

<youtube id="zvE8XA8D0gE"></youtube>

