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

Kun laite on saatu linkkikerroksen tasolla yhdistettyä verkkoon, niin sillä ei vielä ole verkkokerroksen tarvitsemaa osoitetta. Tämän tiedon se voi joko hakea omista konfigurointitiedostoistaan tai nykyisin erillisellä dynaamisessa konfigurointiprotokollalla.

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

Kuljetuskerrokselta saapuvassa viestissä on siis verkkokerroksen vastaanottajan osoitteena nimipalvelijan IP-osoite, joka on hetkeä aiemmin saatu konfigurointitietojen mukana. Verkkokerros ei kuitenkaan voi pyytää linkkikerrosta siirtämään viestiä suoraan tälle laitteelle, koska laite ei ole samassa aliverkossa.

Mieti hetki, miten asiakaskone voi tietää, että viesti ei ole menossa saman aliverkon laitteelle. Kertaa asioita luvusta 4, jos tuntuu, että et saa tätä pohdintaa valmiiksi.


No nyt asiakkaalla on IP-osoite, johon se voi tämän HTTP-pyynnön lähettää. 



Viesti on seuraavaksi lähdössä verkkokerrokselta linkkikerrokselle.
<quiz id='4386612f-cf77-5d64-9027-18d706f063bd'></quiz>


<quiz id='eaa8715e-528f-42dc-882d-61abcee36827'></quiz>


