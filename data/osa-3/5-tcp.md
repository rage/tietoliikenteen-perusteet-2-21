---
path: '/osa-3/5-tcp'
title: 'TCP'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata TCP:n toiminnan.
- Osaat kuvata vuonvalvonnan ja ruuhkanhallinnan periaatteet.
- Osaat perustella, miksi TCP:n toiminnassa on erilaisia vaiheita ja kertoa miten vaiheesta toiseen siirtymien tapahtuu ja miksi.

</text-box>


## TCP:n toimintaperiaatteet

TCP [https://fi.wikipedia.org/wiki/TCP] tarjoaa sovelluskerrokselle luotettavan päästä-päähän kuljetuspalvelun. Se siis siirtää sovelluskerrokselta saamansa datan sellaisenaan vastaanottajalle, kunhan lähettäjän ja vastaanottajan välillä on toimiva verkkoyhteys. Jos yhteyttä ei ole, niin viestit eivät kulje, eikä kuljetuspalvelu voi toimia.

KUVA: TCP


TCP käsittelee sovelluskerrokselta tulevaa dataa (tai viestejä) itseasiassa yhtenäisenä tavuvirtana. TCP ei siis välitä sovelluskerroksen viestirakenteesta millään tavalla. Se vain siirtää tavuvirtapistokkeen kauttaa saamansa tavut vastaanottajalle, jossa ne päätyvät tavuvirtapistokkeen kautta sovelluskerrokselle.

TCP pätkii tämän tavuvirran segmenteiksi, jotka se sitten siirtää verkkokerroksen välityksellä lähettäjältä vastaanottajalle,

TCP muodostaa yhteyden segmenttien siirtoa varten lähettäjän ja vastaanottajan välille. Yhteys mudoostetaan, kun viestien vaihto alkaa ja puretaan, kun sitä ei enää tarvita. Yhteys on kaksisuuntainen (engl. full dublex), joten samaa muodostettua yhteyttä pitkin voi kuljettaa segmenttejä molempiin suuntiin. Tämä on käytännöllistä, koska yleensä verkkosovelluksella on tarvetta siirtää tietoa molempiin suuntiin.

Luotettava kuljetuspalvelu tarvitsee aina kuittauksia, jotta lähettäjä voi varmistua viestien perillemenosta. Perusmuodossaan TCP käyttää kumulatiivista kuittausta eli saapuva kuittaus kuittaa aina kyseisen segmentin lisäksi kaikki sitä edeltävät segmentit. 

TCP:hen on vuosien varrella lisätty erilaisia piirteitä, jotka lisäävät protokollan yksityiskohtien monimuotoisuutta. Tällä kurssilla käymme läpi vain hyvin yksinkertaisen perustoiminnallisuuden. Lisäpiirteitä voi sitten opiskella myöhemmin maisterivaiheen kurssilla Internet Protocols.

Tiivistetysti TCP siis tarjoaa sovelluskerrokselle luotettavan, järjestyksen säilyttävän tavuvirran, jossa ei ole sanomarajoja. TCP käyttää tavunumerointi ja kumulatiivisia kuittauksia.

TCP pyrkii tukemaan tietoliikenneverkon ja vastaanottajan toimintaa käyttämällä sekä vuonvalvontaa että ruuhkanhallintaa. Niiden avulla varmistetaan, että lähettäjä ei pääse tukahduttamaan vastaanottaa tai matkan varrella olevia reitittimiä.  Vuonvalvonnalla (engl. flow control) suojataan vastaanottajaa. Se kontrolloi, että lähettäjä voi lähettää korkeintaan sen verran kuin vastaanottajaja pystyy vastaanottamaan. Ruuhkanhallinnalla (engl. congestion control) suojataan verkon reitittimiä, jotta paketteja ei katoaisi matkalla ylivuodon vuoksi. Ruuhkanhallinnalla pyritään lähettäjän lähetysnopeutta säätämään siten, että kaikki verkko pystyy välittämään kaikki lähetetyt paketit vastaanottajalle asti. Koska TCP käyttää liukuvan ikkunan protokollaa, niin näillä säädetään ikkunan kokoa.

## TCP-segmentti

Wikipedian [TCP-sivulla](https://fi.wikipedia.org/wiki/TCP) on kuva TCP-kehyksestä, jota tällä kurssilla kutsutaan segmentiksi sen englanninkielisen nimen segment mukaisesti. En halua käyttää siitä termiä kehys, koska kehys-termiä käytetään kurssilla myöhemmin linkkikerroksen viesteistä. Yritän eri kerrosten eri nimityksillä auttaa kokonaisuuden hallinnassa.

TCP-segmentissä on otsake (engl. header) ja dataosio. Otsakkeen rakenne määritellään tarkasti protokollan kuvauksessa. TCP:n otsakkeeen pituus on vähintään 20 tavua eli 160 bittiä tai toisin sanoen viisi 32-bittistä sanaa.  JOtta viestin lähettäjä ja vastaanottaja voivat ymmärtää toisensa oikein on jokaisen bitin (tavun, sanan) merkitys sovittava. 

Käydään nyt tavuittain läpi TCP:n otsake:
* tavut 0 ja 1: lähettäjän porttinumero (engl. sourse port)
* tavut 2 ja 3: vastaanottajan porttinumero (engl. destination port)
* tavut 4-7: järjestyssumero (engl. sequence number) tavunumerointina
* tavut 8-11: kuittausnumero (engl. acknowledgement number)
* tavut 12 ja 13: on käsiteltävä bitti kerrallaan, koska niihin on keskitetty kaikki tavua pienemmät kentät. Näistä löytyvät mm. kaikki yhden bitin kokoiset kentät, lipukkeet tai liput (engl. flag), jotka antavat oman tietonsa protokollan toimintaan. Jokaisen kentän paikka on määritelty hyvin tarkasti. Emme käy näitä kaikkia läpi, mutta osa (kuten ACK, SYN, FIN) tulee vastaan toiminnallisuuden kuvauksessa.
* tavut 14 ja 15: vastaanottajan ikkunan eli vastaanottopuskurin koko (engl. receive window)
* tavut 16 ja 17: tarkistussumma (engl. internet checksum)
* tavut 18 ja 19: kiireellisyystietä (engl. urgent data pointer)
* Optio-osa: Tavussa 12 kerrotaan 4:llä bitillä, mikä on otsakkeen täsmällinen pituus sanoina. Minimipituus on 5 sanaa, mutta otsake voi siis olla pidempikin, jolloin tämä optio-osa kattaa pidemmän otsakkeen loput sanat. Huomaathan, että maksimipituus on 15, koska 4:llä bitillä voidaan ilmaista kokonaislukunumerot 0 - 15.

Loput segmentistä on sitten siirrettävää dataa.

## Tavunumerointi

TCP käyttää segmenteissään tavunumerointia. Tavunumeroille on otsakkeessa varattu tilaa yhden 32-bittisen sanan verran eli reilu 4 miljardia eri numeroa.

Otsakkeessa oleva järjestysnumero kertoo segmentin ensimmäisen tavun numeron. Näin ollen kahden peräkkäisen segmentin numeroissa on yhtä suuri eri kuin ensimmäisessä segmentissä on tavuja.

TCp yhteys on kaksisuuntainen ja eri suuntiin liikkuvilla segmenteillä on omat järjestysnumeronsa, joilla ei ole mitään tekemistä keskenään. Yhteyden alussa segmenttien tavunumerointi voi alkaa ihan mistä numerosta tahansa.

Kuittausnumero kertoo, mitä tavua vastaanottaja seuraavaksi odottaa. Vastaanottaja siis kuittaa saaneensa kaikki tavut ennen tätä seuraavaksi odottamaansa tavua.

Katsotaan ensin osittaista esimerkkiä tästä numeroinnnista:

KUVA: TCP segmentti ja kuittausnumeroinnit vain yhteen suuntaan

Kun meillä on segmenttejä liikkeellä molempiin suuntiin, niin samassa viestissä voi kulkea sekä uutta dataa että toisen suunnan segmenttiin liittyvä kuittausnumero. Juuri siksi otsakkeessa on erikseen kentät järjestysnumerolle ja kuittausnumerolle.



KUVA: TCP segmentti ja kuittausnumeroinnit molempiin suuntiin
- JÄTÄ KUVASTA POIS KUITTAUSNUMEOT JA OSA SEGMENTTINUMEROISTA. LAITA NE TEHTÄVÄSKI HETI PERÄÄN




Kuittaukset pyritään aina kun mahdollista lähettämään varsinaisen datasegmentin yhteydessä kylkiäisenä (engl. piggypacked). Näin vähennetään tarpeetonta tietoliikennettä.

Itseasiassa TCP sallii kuittauksen viivästämisen, siten että yksittäistä kuittausta saa viivyttää korkeintaan 500 millisekuntia ja vain yhden kuittauksen voi jättää pois välistä. Eli joka toinen segmentti on kuitattava välittömästi ja yhden segmentin kuittausta saa viivyttää korkeintaa puoli sekuntia.

Koska kuittausta saa viivyttää, niin lähettäjän aikakatkaisun viiveen pitää olla riittävän pitkä, jottei tapahtu ennenaikaista aikakatkaisua ja siihen liittyvää tarpeetonta uudelleenlähetystä. Toisaalta pitkä viive aiheuttaa sen, että todellisessa katoamisessa segmentin uudelleenlähetys tapahtuu hyvin pitkän ajan kuluttua.

TCP voi käyttää niin sanottua nopeaa uudelleenlähetystä (engl. fast retransmit), jolloin lähettäjä lähettää segmentin uudelleen jo ennen aikakatkaisua. Tässä lähettäjä käyttää apuna saapuvia kuittausnumeroita. TCP:ssä vastaanottaja lähettää kuittauksen vähintään joka toisesta segmentistä, vaikka siltä puuttuisi aiempia segmenttejä. Tässä kuittauksessa se kertoo, mikä on seuraavaksi odotettava tavu. Kaikki nämä puuttuvaa segmenttiä seuraavat segmentit kuitataan siis samalla kuittausnumerolla, joka on puuttuvan segmentin ensimmäisen tavun numero. Näin alkuperäinen vastaanottaja saa useita kuittauksia, jotka kaikki kuittaavat samaa odotettavaa tavua. Kun näitä on tullut tarpeeksi, niin lähettäjä lähettää tuon todennäköisesti puuttuvan segmentin, vaikka ajastin ei olekaan vielä lauennut.

Näitä aiemman kuittauksen kuittausnumeron sisältäviä viestejä kutsutaan toistokuittauksiksi. Kun lähettäjä saa kolmannen toistokuittauksen, se lähettää segmentin uudelleen. 



QUIZZ



## Segmentin katoaminen

TCP käyttää liukuvan ikkunan menetelmää ja kumuloituvaa kuittausta. Jos varsinen datasegmentti katoaa, niin se pitää lähettää uudelleen, koska muuten vastaanottaja ei voi saada dataa. Perusmuodossaan TCP:n käyttää Paluu-N:ään. Mutta koska se tallettaa kaikki saapuvat segmentit puskuriin, niin on mahdolliste, että kaikkia kadonnutta seuraavia segmenttejä ei tarvitse lähettää uudelleen. 

Lähettäjän kannalta ei ole merkitystä katoaako varsinainen datasegmentti vai siihen liittyvä kuittaus, jos se ei saa tietoa asiasta ennen ajstimen laukeamista. Kun ajastin laukeaa, niin lähettäjä lähettää kyseisen segmentin uudelleen.

KUVA

Jos kuittaus katoaa, niin kumuloituvien kuittausten kanssa lähettäjä voi seuraavasta saapuvasta kuittauksesta päätellä, että segmentti meni perille, vaikka siihen liittyvä kuittaus ei saapunutkaan.

KUVA!!!

Toisaalta, jos kuittaus saapuu vasta ajastimen laukeamisen jälkeen, niin lähettäjä lähettää segmentin uudelleen. Tällaista tilannetta kutsutaan ennenaikaiseksi aikakatkaisu (engl. premature timeout). Tätä pyritään välttämään käyttämällä riittävän pitkää aikakatkaisua ajastimessa.

KUVA

KUVAT VOI LAITTAA RINNAKKAIN JOS NE MAHTUVAT


QUIZZ:  Ehkä joku tehtävä näihin kuviin liittyen. Skenaariota lisää ja siihen liittyvä jatkokysymys



## Yhteyden muodostus ja purku

TCP:n yhteyden muodostuksessa välitetään kolme viestiä ja siitä käytetäänkin usein termiä kolmivaiheinen kättely. [Kättelyksi](https://fi.wikipedia.org/wiki/K%C3%A4ttely_(tietoliikenne)) (engl. handshake) kutsutaan usein protokollan aloitusvaihetta, tai kokonaista protokollaa, eli kaikkia viestejä, jotka tarvitaan ennenkuin varsinaisen datan siirto alkaa.

## Vuonvalvonta


## Ruuhkanhallinta


## Liukuvan ikkunan toiminta





