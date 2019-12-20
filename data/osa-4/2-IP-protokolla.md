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


## Paketin kuljetus verkossa

Internetin toiminnalle keskeistä on, että verkkokerros osaa kuljettaa IP-paketin lähettäjältä vastaanottajalle. Verkkokerroksella pitää siis olla riittävästi toiminnallisuutta, jotta paketti voi edetä etappikerrallaan kohti vastaanottajaa ja lopulta päästä perille. Tätä verkon toiminnallisuutta kutsutaan reititykseksi. Paketti siis reititetään lähettäjältä vastaanottajalle. Tarkastellaan reitittimien yksityiskohtaisempaa toimintaa seuraavassa aliluvussa.  Koska internetissä ei normaalisti varata reittejä etukäteen, on reitittimillä oltava riittävä tieto verkon rakenteesta, jotta ne osaavat lähettää paketin eteenpäin oikeaan suuntaan. Tätä tietoa säilytetään reititystauluissa. Käymme tällä kurssilla läpi vain IPv4:n mukaiset reititystaulut.

Toisaalta verkossa liikkuu sekä IPv4:n että IPv6:n mukaisia paketteja. Jos reititin osaa käsitellä niitä molempia, niin silloin sille voi lähettää paketteja välitettäväksi kummalla tahansa versiolla. Jos reititin ei osaa käsitellä kuin IPv4:n mukaisia paketteja, niin sille ei kannata lähettää IPv6:n mukaisia paketteja, koska se vain pudottaa ne pois verkosta. Mikäli paketti pitää välittää verkossa tällaisten reitittimien kautta joudutaan tunneloimaan (engl. tunnelin) eli rakentamaan tunneli, jossa toisen protokollan viesti kulkee toisen protokollan sisällä. Tällainen tunneli muodostetaan siis kahden sellaisen reitittimen välille, jotka hallitsevat kummankin protokollaversion. Tämä tehdään "piilottamalla" tuntematon protokollaversio tunnetun protokollan

KUVA::  Kuten kirjan kuva 4.12  (jossa on tunneloituna IPv6.

### IPv4 Reititystaulu



### Tunnelointi

Voi halutessasi lukea tunneloinnista lyhyen kuvauksen englanninkielisen wikipedian sivulta [IP Tunnel](https://en.wikipedia.org/wiki/IP_tunnel)

Piirrä aluksi itsellesi kuva, jossa verkon reunoilla olevilla solmuilla A ja Z on IPv6:n mukaiset IP-osoitteet ja ne haluavat kommunikoida keskenään. Ne ovat siis eri aliverkoissa ja eri reunoissa piirrosta. Niiden aliverkot on yhdistetty internetiin reitittimillä (B ja Y), jotka osaavat aliverkon edellyttämää IPv6:sta ja internetin suuntaan ne osaavat myös IPv4:sta, koska reitittimet (C ja X), joiden kautta niiden viestit siirtyvät internetiin on vielä sen verran vanha, että se osaa vain IPv4:ää. Reitti C ja X:n välillä on olemassa, mutta sen yksityiskohdat eivät ole tiedossa.

Kuvassa on siis kuusi solmua A,B,C,X,Y ja Z, jotka on yhdisetty toisiinsa siten, että viestit A:lta voivat päätyä Z:lle ja päinvastoin.

Nyt A lähettää IPv6-paketin Z:lle. Tässä paketissa viestein lähettäjä on A ja vastaanottaja on Z. Koska reitti kulkee B:n kautta, niin tämä paketti ohjataan ensin B:lle. Reititin B ei voi suoraan lähettää viestiä eteenpäin, koska A:n lähettämä viesti on IPv6:n mukainen ja C osaa käsitellä vain IPv4:n mukaisia viestejä. Siksi "muodostetaan tunneli" B:n ja Y:n välille siten, että B laittaa IPv6:n  mukaisen paketin IPv4-paketin sisään dataksi. Tällä IPv4-paketilla lähettäjänä on B ja vastaanottajana Y. Nyt B:n ja Y:n välillä kulkee IPv4:n mukainen paketti, jonka C, X ja muut niiden välillä olevat reitittimet osaavat käsitellä ja ohjata oikeaan suuntaan.




<quiz id="2b9e2bdd-1bc3-4058-93e0-df0c85713f4b"></quiz>

