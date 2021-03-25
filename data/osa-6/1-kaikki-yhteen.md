---
path: '/osa-6/1-kaikki-yhteen'
title: 'Kaikki yhteen'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata aiempien osien materiaalin yhteistoiminnan.

</text-box>

Tämä osa toimii koko kurssin sisällön osalta yhteenvetona. Käymme tehtävien avulla läpi kurssin keskeisen sisällön ja näin saamme samalla koottua yhteen kurssin yksityiskohdat yhteen isompaan kokonaisuuteen.



Tietokoneen ensimmäiset tietoliikenneoperaatiot ovat nykyisin yleensä osa verkkoonliittymisprosessia.

Jos tietokone liittyy langattomaan verkkoon, niin ihan ensimmäiseksi sen pitää valita mihin mahdollisista langattomista verkoista yhteys muodostetaan. Tämän se voi tehdä joko kuuntelemalla tukiasemien lähettämiä tiedostusviestejä tai itse lähettämällä kyselyviesteissä aiemmin käytettyjen langattomien verkkojen tunnisteita.

Kun laite on saatu linkkikerroksen tasolla yhdistettyä verkkoon, niin sillä ei vielä ole verkkokerroksen tarvitsemaa osoitetta. Tämän tiedon se voi joko hakea omista konfigurointitiedostoistaan tai nykyisin erillisellä dynaamisella konfigurointiprotokollalla.

<quiz id='e83d971b-2a8d-5a32-b202-f0380377a717'></quiz>


Kun laite on saanut tarvittavat tiedot, niin se alkaa liikennöidä internet-verkossa saamallaan IP-tunnuksella.

Kurssilla on tarkasteltu paljon nimenomaan HTTP-protokollan käyttöä verkkosivujen lataamisessa www-selainen ja www-palvelimen välillä. Käytetään siis sitä tässäkin läpikäynnissä sovellluskerroksen protokollana.

Jos nyt sitten oletetaan, että käyttäjä avaa selaimen ja kirjoittaa selaimen osoitekenttään URL-tunnukseksi: https://www.traficom.fi/fi/viestinta/kyberturvallisuus.

<quiz id='8abb38d4-bcee-4cfe-bd71-b99bcfb34367'></quiz>

Selain on siis asiakaskoneella pyörivä prosessi. Se ja asiakaskoneen käyttöjärjestelmä yhdessä huolehtivat viestien välityksestä.

Jotta selainprosessi  voi lähettää varsinaisen sivunnoutopyynnön palvelimelle, sen täytyy tietää ensin selvittää palvelimen IP-osoite.

<quiz id='7ccdd7dd-8d0d-45ab-b920-c5e607ce600b'></quiz>

Harjoitellaan vielä kerran verkkonimeä vastaavan IP-tunnuksen selvittäminen.

<quiz id='0885f003-bcfb-52d4-b16e-60ee73afa746'></quiz>

Palauta mieleesi mitä kuljetuskerroksen protokolla nimipalveluviestien lähettämiseen käytetään ja miten asiakas tietää mille palvelimelle sen pitää pyyntö lähettää.

Tämä jälkeen pyyntö siirretään asiakaskoneen verkkokerrokselle ja sieltä edelleen linkkikerrokselle. Tarkastellaan vielä hetki näiden kerrosten toimintaa. Pyyntö on osoitettu paikalliselle nimipalvelijalle, joka hyvin usein kotiverkon käyttäjällä ei ole samassa aliverkossa vaan sijaitsee jossain internet palveluntarjoajan verkossa. 

Kuljetuskerrokselta saapuvassa viestissä on siis verkkokerroksen vastaanottajan osoitteena nimipalvelijan IP-osoite, joka on hetkeä aiemmin saatu konfigurointitietojen mukana. 

Viesti on seuraavaksi lähdössä verkkokerrokselta linkkikerrokselle.
<quiz id='4386612f-cf77-5d64-9027-18d706f063bd'></quiz>

Ennen kuin verkkokerros voi lähettää viestin linkkikerroksen sen pitää tietää  mille laitteelle linkkikerroksella viesti pitää toimittaan. Koska vastaanottaja ei ole samassa aliverkossa, niin verkkokerros ei voi pyytää linkkikerrosta toimittamaan viestiä tälle vastaanottajalle.

Mieti hetki, miten asiakaskone voi tietää, että viesti ei ole menossa saman aliverkon laitteelle. Kertaa asioita luvusta 4, jos tuntuu, että et saa tätä pohdintaa muuten valmiiksi. Vinkkinä aliverkon määritelmä ja reititys.

Koska vastaanottaja (paikallinen nimipalvelija) ei ole samalla aliverkossa, niin verkkokerroksella tarkistetaan reititystaulusta, mille laitteelle viesti pitää tässä aliverkossa ohjata. Todennäköisin vastaanottaja on yhdyskäytäväreititin, mutta aliverkoissa, joissa on useampia reitittimiä eri kohteille menevät viestit voidaan joutua osoittamaan eri reitittimille. Kotiverkoissa ei usein ole kuin yksi yhteys ulospäin, joten viesti ohjataan linkkikerroksella juuri tälle yhdyskäytäväreitittimelle.

<quiz id='d56bfa81-983d-409d-be80-ea23fb254bb7'></quiz>

Nyt meillä on vihdoin myös linkkikerroksen vastaanottajan MAC-osoite ja viesti voidaan lähettää asiakaskoneelta tälle vastaanottajalle. Viestissä on siis verkkokerroksella lähettäjänä tämän asiakaslaitteen IP ja vastaanottajana paikallisen nimipalvelijan IP. Linkkikerroksella lähettämän on tämän asiakaslaitteen MAC ja vastaanottajana yhdyskäytäväreitittimen MAC.

Nyt viesti on lähtenyt asiakkaalta ja asiakas voi enää vain odottaa vastausta. Kun vastaus aikanaan saapuu asiakkaalle, niin se voi jatkaa toimintaansa viestin tietojen perusteella. Jos asiakas ei saa viestiä tietyn aikarajan puitteissa, niin se voi vain lähettää viestin uudelleen.

Se, miten verkko välittää viestin lähettäjältä vastaanottajalle, ei näy lähettäjälle millään tavalla. Tämä reitittimien tekemä reititys on kuitenkin viestien perillemenon kannalta erittäin kriittinen toiminnallisuus. Kertaa reititys luvusta 4.


Kaikkien näiden valmistelevien toimien jälkeen asiakasprosessi, selain, on vihdoin valmis lähettämään varsinaisen HTTP-pyynnön palvelimelle. Nimipaveluvastauksen perusteella se tietää nyt, mikä on vastaanottajan IP-osoite ja voi lähettää viestin sille. Näin se voi muodostaa lähetettävän HTTP-viestin ja antaa viestin kuljetuskerrokselle välitettäväksi palvelimelle.

Koska HTTP käyttää kuljetuskerroksen protokollaa TCP, niin kuljetuskerros ei voi vielä suoraan lähettää pyyntöä verkkoon, vaan sen pitää ensin avata yhteys vastaanottajalle. Kertaa TCP:n yhteyden muodostus ja segmentointi.

Yhteyden avaamisen jälkeen kuljetuskerros voi välittää varsinaisen HTTP pyynnön palvelimelle. Yhteyden avausviestin ja HTTP viestin kanssa verkkokerros ja linkkikerros toimivat samoin kuin nimipalveluviesti kanssa. Verkkokerros siis tarkistaa onko vastaanottaja samalla aliverkossa ja jos ei ole, niin linkkikerroksen vastaanottajaksi tulee yhdyskäytäväreitittimen MAC-osoite. Huomaa, että koska MAC osoite selvitettin jo nimipalvelupyynnön yhteydessä, niin nyt asiakaskone löytää tiedon omasta ARP-taulustaan eikä sen tarvitse kysyä asiaa protokollaviesteillä.

Oletaan, että tuo yksi HTTP-vastaus riitti eikä sivun sisällöstä generoitunut lisää pyyntöjä. Näin asiakas voi sulkea TCP-yhteyden lähettämällä tätä koskevan viestin, vaikka yhteys olisikin ollut pysyvä.




<quiz id='c0b65ff3-97b3-4d7d-ba3a-be4e257647fe'></quiz>


