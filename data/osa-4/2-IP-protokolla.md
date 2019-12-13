---
path: '/osa-4/2-IP-protokolla'
title: 'IP-protokolla'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata IP-protokollan toimintaperiaatteet ja sanomarakenteen.

</text-box>

## IP

[IP-protokollan]( https://fi.wikipedia.org/wiki/IP) keskeinen tehtävä on huolehtia viesti lähettäjältä vastaanottajalle siten, että viesti liikuu verkossa aina yhden linkkivälin kerrallaan ja verkkokerroksen tasolla pätetään mihin linkkiin viesti seuraavaksi lähetetään. Oikeastaan IP ei ole vain yksi protokolla vaan oikeammin protokollaperhe, jonka eri protokollilla on omat tehtävänsä.
IP:n toimintaan liittyy keskeisenä elementtinä osoitteet, viestin rakenne ja viestin kuljettaminen eli reititys.  Osoitteet olemme jo käsitelleet aiemmin, joten käydään seuraavaksi läpi viestin rakenne


IP-prokollan mukaista viestiä kutsutaan IP-paketiksi (engl. packet). IP-paketin kuvan voit katsoa wikipediasta IP sivulta kohdasta [Ipv4-paketti](https://fi.wikipedia.org/wiki/IP#IPv4-paketti)

IPv4:n mukaisen paketin kentät ovat seuraavat:
* **Ensimmäinen sana**  eli ensimmäiset 32 bittiä
* bitit 0-3: versionumero, joka IPv4:n tapauksessa on 4 ja bitteinä siis 0100
* bitit 4-7: otsakkeet pituus. Minimikokoinen otsake on kooltaan 5 32-bittistä sanaa, joten yleensä arvon on 5. Arvo voi olla enemmän, jos otsakkeen optiokentät ovat käytössä
* bitit 8-15: palveluluokka. Tämän tarkempi käsittely jää myöhemmille kursseille.
* bitit 16-31: paketin pituus tavuina. Tämä on siis paketin kokonaispituus sisältäen sekä otsakkeen että datan. Huomaa, että otsakkeen koko ilmoitettiin edellä sanoina, mutta tässä paketin koko on tavuina.
* **Toinen sana**  eli seuraavat 32 bittiä  eli bitit 32-63
* Tässä on paketin fragmentointiin eli pilkkomiseen ja kokoamiseen liityvät kentät, fragmentin tunniste, lipukkeita ja fragementin sijainti alkuperäisessä viestissä
* **Kolmas sana** eli bitit 64-95
* sanan ensimmäinen tavu: paketin elinaika, hyppylaskuri, eli kuinka monta edelleenlähetystä paketille saa korkeintaan tehdä. Reititin vähentää tätä aina yhdellä.
* sanan toinen tavu: Protokollan numero. Mille protokollalle data välitetään. Tyypillisiä arvoja ovat 6-TCP ja 17-UDP.
* sanan kolmas ja neljäs tavu: Tarkistussumma. Otsakkeen tarkistussumma, jotta sen oikeellisuus voidaan tarkistaa.
* **Neljäs sana** eli bitit 96-127
* Lähettäjän IPv4 osoite
* **Viides sana** eli bitit 128-159
* Vastaanottajan IPv4 osoite
* **Mahdolliset optiot** Näiden pitää olla myös kokonaisia 32-bittisiä sanoja. Yleensä näitä ei käytetä, joten data alkaa heti 5. sanan jälkeen

Otsakkeen lisäksi paketissa on sitten varsinainen data. Vastaanottajalla verkkokerros antaa tämän datan otsakkeen mukaiselle protokollalle, joka yleensä on kuljetuskerroksen protokolla. Joissakin tilanteisss kyseessä voi myös olla jokin verkkokerroksen omista protokollista. 

IPv4:ssä on määritelty, että yhden lähetetyn paketin voi matkalla pilkkoa useammaksi eri paketiksi, eli alkuperäisen paketin paloiksi, joita kutsutaan fragementiksi. Kun paketti on pilkottu fragmenteiksi, nämä fragmentit kulkevat verkossa kuten mikä tahansa IP-paketti aina vastaanottajalle asti. Vasta vastaanottaja yhdistää fragementit alkuperäiseksi paketiksi. Kun se on saanut alkuperäisen paketin kokonaisuudessaan, voi se antaa data-osion eteenpäin.

Fragmentointi edellyttää reitittimiltä lisätoiminnallisuutta ja hidastaa pakettien uudelleenlähetystä, kun niitä mitää muokata. Toisaalta fragmentointi on välttämätöntä, jos IP-paketti on suurempi kuin mitä linkkikerros pystyy kuljettamaan yhdessä kehyksessä. Mikäli pakettia ei voisi pilkkoa, sitä ei voisi lähettää eteenpäin, joten viestijöiden näkökulmasta se vain katoaa matkalla.

IPv6:ssa suunnittelun lähtökohtana on ollut pakettien uudelleenlähetyksen mahdollisimman sujuva toiminta ja siksi siitä on jätetty kokonaan pois mahdollisuus pakettien fragmentointiin. Siinä on lähettäjälle tarjolla protokolla, jolla lähettäjä voi tarkistaa mikä on maksimipaketin reitillä lähettäjälä vastaanottajalle. IPv6:ssa reititin vain pudottaa liian suuren paketin, jota se ei voi lähettää eteenpäin. Se lähettää tällaisesta tilanteesta kontrolliprotokollan (Internet Control Message Protocol v6, ICMPv6) mukaisen viestin paketin alkuperäiselle lähettäjälle. Näin lähettäjä saa tiedon paketin maksimikoosta ja voi jatkossa huolehtia siitä, että lähetettävät paketit ovat tätä pienempiä.

[IPv6](https://fi.wikipedia.org/wiki/IPv6) pakettien otsakeita on myös virtaviivaistettu. Otsake on kiinteänkokoinen (320 bittiä) eikä sisällä tarkistussummaa. Otsakkeen neljä ensimmäistä bittiä ovat versionumero kuten IPv4:ssä. Tämä on välttämätöntä, jotta pakettia käsittelevä solmu voi tunnistaa kumman protokollan mukainen viesti on kyseessä. IPv6:ssä näiden bittien arvo on siis 6 eli binäärilukuna 0110. Koska tämä kiinteä otsake ei aina riitä, IPv6 sallii, että datan alussa voi olla lisäotsakkeita, joiden tunnistamiseen on kiinteä kenttä. Tämä 'seuraava otsake' kenttä kertoo siis minkä protokollan mukainen otsake on datakentän alussa. Tässä käytetään samoja protokollanumeroita kuin IPv4:n kentässä 'protokolla numero'. Näin IPv6:n otsake saadaan pidettyä selkeänä ja yksinkertaisena reitittimien kannalta. Reitittimien ei tarvitse välittää näistä data-alueen tiedoista. 



## Monilähetys ja yleislähetys

unicast/multicast/broadcast / anycast


## Tunnelointi

## IPv4 Reititystaulu

## Reititysalgoritmi

## Reitittimen toiminta ja rakenne

## ICMP??

<pdf-slideshow>

[a](../slideshows/johdatus-olio-ohjelmointiin.pdf)

</pdf-slideshow>

<quiz id="2b9e2bdd-1bc3-4058-93e0-df0c85713f4b"></quiz>

