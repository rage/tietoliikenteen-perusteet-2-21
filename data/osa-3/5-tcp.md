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

Jokaisessa yhteydessä segmenteillä on maksimikoko. Tämä koko voi vaihdella verkon alempien kerrosten ominaisuuksien mukaisesti. Maksimikoolla pyritään välttämään sitä, että alemmat kerrokset joutuvat pilkkomaan kuljetuskerroksen lähettämän segmentin useammaksi paketiksi. Esimerkiksi, jos fyysinen yhteys on ethernetillä, niin silloin segmentin maksimikoko on 1460 tavua, koska ethernetin maksimidata yhdessä kehyksessä on 1500. Tuo erotus 1500-1460 menee TCP:n omaan otsakkeeseen (20 tavua) ja verkkokerroksen IP-protokollan otsakkeeseen (myös 20 tavua).

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

Kättelyssä kulkee kolme segmenttiä SYN - SYNACK -ACK. Tuo viimeinen ACK voi myös kulkea jo ensimmäisen datasegmentin mukana.

Yhteyden muodostuksen voi aloittaa kumpi tahansa osapuoli. Muodostuva yhteys on kaksisuunntainen, joten segmenttejä voi jokatapauksessa lähettää kumpaankin suuntaan.

SYN ja ACK ovat TCP-otsakkeen bittikenttiä. Niiden arvo 1 tarkoittaa, että lähetettävällä viestillä on kyseinen toiminnallisuus. Koska aina TCP-viestien kohdalla lähetetään aina vähintään 20 tavua otsaketta, niin näissäkin viesteissä kulkee kaikki otsakkeen kentät. Porttinumerot kertovat mistä ja miten sovelluskerros ja kuljetuskerros kommunikoivat kummassakin päässä. SYN-viestissä kulkeva järjestysnumero kertoo, mistä numerosta viestin lähettäjä aloittaa segmenttien numeroinnin. Viestissä on yhden tavun verran dataa, jotta sen järjestysnumero eroaa myöhempien viestien järjestysnumeroista. ACK-viestissä on vastaavasti normaalien kuittaussääntöjen mukainen kuittausnumero eli seuraavaksi odotettavan tavun numero. SYNACK-viestissä on nämä molemmat.

KUVA Kättelystä ja purusta

Vastaavasti yhteyden purussa käytetään FIN ja ACK viestejä. Purkaessa täytyy molemmat suunnat purkaa erikseen. Tämä johtuu siitä, että toiseen suuntaan saattaa vielä olla liikkeellä viestejä, kun toinen suunta olisi jo valmis purkamaan. Jos tilanne sen sallii, niin toki purkaessakin FIN- ja ACK-viestit voi yhdistää, mutta tämä ei ole aina mahdollista.  Yhteys on siis kokonan purettu vasta, kun molemmat suunnat on purettu. Koska purkamista on vaikea tehdä moneen kertaan, käytetään purkuvaiheen apuna usein ajastimia, joiden avulla yhteys saadaan siivottua pois, kun se on purettu. Näillä ajastimilla on usein tietoliikenteen näkökulmasta hyvin pitkä laukeamisaika esimerkiksi 30,60 tai 120 sekuntia.

Koska palvelimilla on käytettävissään vain rajallinen kapasitetti samanaikaisille TCP-yhteyksille, on hyvin tavallista yrittää palvelunestohyökkäystä siten, että hyökkääjä pyrkii sitomaan kaikki yhteydet, jolloin lailliset asiakkaat eivät saa palvelua. Tällaisia hyökkäystyyppejä on useita, mutta yksinkertaisin niistä on niin sanottu SYN tulva (engl. SYN flood). SYN-hyökkäyksessä hyökkääjä lähettää vain SYN-viestejä, jolloin palvelin ei saa yhteyttä kokonaan muodostettua, mutta joutuu kuitenkin varamaan sille resursseja. 

## TCP:n vuonvalvonta

TCP:ssä lähettäjä ja vastaanottaja käyttävät puskureita ja liukuhihnoitusta.  Lähettäjä voi lähettää useita segmenttejä, jos vastaanottajan puskurissa on tilaa. Vastaanottajahan tallettaa saapuvat segmentit vastaanottopuskuriin, ennen kuin se saa ne toimitettua sovelluskerrokselle. Koska puskurin koko on rajallinen, täytyy lähettäjän pitää huolta että se ei lähetä enempää dataa kuin mitä vastaanottajan puskuriin mahtuu. Lähettäjä siis pyrkii sopeuttamaan lähetysnopeutensa vastaanottajan kapasiteettiin. Tähän se käyttää vuonvalvontaa.

Vuonvalvonta määrää lähettäjän ikkunan koon se mukaan mikä on vastaanottajan puskurin tilanne. Jokaisessa lähettämässään viestissä solmu kertoo, kuinka paljon sen puskuriin vielä mahtuu tavuja.

QUIZZ:  Minkä nimisessä kentässä tämä puskurin koko tietä sijaitsee? Kirjoitan kentän englanninkielinen nimi pienillä kirjaimilla. Avokysymys,


Huomaa, että saapuvat kuittaukset siirtävät ikkunaa, mutta eivät muuta sen kokoa. 

Jos vuonvalvonta pudottaa lähettäjän ikkunan koon nollaan, niin lähettäjä alkaa lähettää yhden tavun kokoisia segmenttejä. Näillä se kyselee vastaanottajalta, joko on tilaa lähettää enemmän. Vastaanottajan täytyy nämäkin viestit kuitata normaalien kuittaussääntöjen mukaisesti. Vastaanottaja käyttää toistokuittauksia kertomaan, että tilaa ei ole. Se lähettää normaalin kuittauksen vasta, kun se voi samalla kertoa, että tilaa on vähintään yhdelle täydelle TCP-segmentille.

Miksi lähettäjän täytyy lähettää näitä yhden tavun kokoisia segmenttejä? Miksei lähettäjä vain voi odottaa? Näiden kysymysten taustalla olevia periaatteita olemme jo sivunneet useampaan kertaan tämän kurssin kuluessa. Kaikki kiteytyy yksinkertaisesti siihen, että jos lähettäjä vain jää odottamaan ja kaikkia matkalla olevat kuittausviestit syystä tai toisesta katoavat, niin lähettäjällä ei ole mitään keinoa tietää koska se voi lähettää seuraavan viestin. Siksi lähettäjän täytyy aktiivisesti kysellä vastaanottajalta, jotta se voi olla varma yhteyden toimivuudesta ja siitä, että se aikanaan voi saada tiedon vastaanottajan tilanteesta. Muistathan, että vastaanottaja ei ole aktiivinen. Se aktivoituu vain kun sille saapuu viesti, jonka se käsittelee ja jää sitten odottamaan seuraavaa viestiä.


## Ruuhkanhallinta

Ruuhkanhallinnan tavoitteena on pitää TCP:n segmenttien lähetysnopeus sellaisena, että viestien määrä ei ylikuormita verkon reitittimiä, vaan kaikki viestit voivat päästä perille.

Verkon hetkellinen kuormitus vaihtelee ja käytettävissä olevan kaistan nopeus lähettäjän ja vastaanottajan välillä voi olla paljon vähemmän kuin mihin lähettäjä ja vastaanottaja kykenisivät. Pelkkä vuonvalvonta ei huomioi verkon tilannetta. Verkko voi siis olla pullonkaula ja rajoittaa liikennöintinopeutta.

Verkon kuormituksen vaihtelu johtuu yleensä muista verkon käyttäjistä eikä sitä voi kunnolla ennakoida. Etappivälitteisessä verkossa kaikki lähettäjät joutuvat jakamaan yhteisten yhteysvälien kapasiteetin ilman yksityiskohtaisia sopimuksia tai rajoituksia.

Verkon reitittimillä ja muissa verkkoelementeissä on yleensä puskurit, joilla ne voivat hiukan tasata verkon eri osien nopeuseroja. 
Kun puskuri kasvaa, yksittäisen viestin eteneminen verkossa hidastuu. Se joutuu jonottamaan yhä pidempään reitittimen puskurissa ennen kuin se lähetetään eteenpäin. Tätä käsiteltiin lyhyesti, kun kurssin alussa tarkasteltiin jonotusviivettä.

Jos kuitenkin jonkun elementin puskurit täyttyvät, niin se joutuu pudottamaan saapuvia paketteja, kun sillä ei ole tilaa vastaanottaa pakettia. Tällaisesta saapuvien pakettien pudottamisesta johtuu osa pakettien katoamisista. Kun paketti katoaa, lähettäjä joutuu lähettämään sen uudelleen. Tämä uudelleenlähetys siis lisää jo valmiiksi ylikuormittuneen verkon kuormitusta ja voi pahimmillaan johtaa siihen, että yhä enemmän paketteja putoaa verkosta matkalla. Lisäksi jonotusaikojen kasvaessa, paketin kulkuaika kasvaa ja siitä voi seurata, että lähettäjä lähettää uudelleen sellaisen paketin, joka on vielä matkalla verkon ruuhkatilanteen vuoksi. Tällaisetkin uudelleenlähetykset lisäävät verkon kuormaa ja hidastavat pakettien kulkua entisestään. Tästä syntyy valitettavan helposti itseään ruokkiva noidankehä, jossa kaikki lähettävät paljon paketteja, mutta mitään ei kuitenkaan pääse läpi. Reitittimet vain tekevät yhä enemmän turhaa työtä välittämällä paketteja, jotka joku muu reititin myöhemmin pudottaa puskurin täyttimisen vuoksi.

KUVA:  Graafinen kuva tästä ilmiöstä

Tilanteesta voidaan toipua vain kun lähettäjä huomaa ongelman ja selkeästi hidastaa viestien lähetystä. Näin se omalta osaltaan antaa verkolle mahdollisuuden toipua tästä hetkellisestä ylikuormitustilanteesta. Miten lähettäjä sitten voi havaita tilanteen? Se joko päättelee tilanteen pakettien katoamisesta ja hidastumisesta tai se saa verkolta tietoa tilanteesta.

Verkko tai siis sen reititin voi tiedottaa lähettää joko erillisellä kontrolliviestillä tai merkitä läpikulkeviin viesteihin lisätietoa ruuhkasta. Erillisellä kontrolliviestillä se siis ilmoittaa lähettäjälle, että "Olen ylikuormittunut" tai "Tukehdun". Lähettäjän odotetaan sitten reagoivan tähän kontrolliviestiin. Jos reititin vain merkitsee välittämiinsä viesteihin tiedon ruuhkautumisesta, niin tämä tieto saavuttaa lähettäjän vasta kun viestin alkuperäinen vastaanottaja lähettää tiedon ruuhkautumisesta alkuperäiselle lähettäjälle. Me emme tällä kurssilla tarkastele näitä ratkaisu, vaan keskitymme tuohon lähettäjän omaan havainnointiin, joka toimii silloinkin, kun verkkoelementit eivät ruuhkasta tiedota.

Keskitytään tässä vain TCP:n ruuhkanhallintaan. Koska kyseessä on lähettäjän omaan viestien lähetykseen liittyvä toimintaperiaate, niin eri kuljetusprotokollilla on hyvin erilaisia tapoja ratkoa omaa ruuhkanhallintaa. TCP:n ruuhkanhallinta sopii TCP:lle, mutta ei välttämättä kaikille muille kuljetusprotokollille. TCP:ssä on useita erilaisia ruuhkanhallintamenetelmiä, joista tässä tutustumme vain TCP Reno:on.

TCP:n ruuhkanhallinta tehdään säätämällä ruuhkaikkunan (eng. congestion window) kokoa. Ruuhkaikkuna ei ole sama kuin lähetysikkuna, vaikka ne molemmat säätävätkin kuittaamattomien viestien määrää. Tietyllä ajanhetkellä saa olla kuittaamatta korkeintaan min (lähetysikkunan koko, ruuhkaikkunan koko) eli näistä pienempi on aina määräävä.

Ruuhkaikkuna säätää kuittamattomien viestien määrän lisäksi myös sitä kuinka paljon lähettäjä saa kyseisellä ajanhetkellä kuormittaa verkkoa. Lähettäjän on itse pääteltävä oikea ikkunan koko, tietoa ei saada mistään muualta. Päättely perustuu saapuviin viesteihin:
* jos uudelleenlähetysajastin laukeaa, verkossa on ruuhkaa -> pienennä ikkunan kokoa
* jos kuittaukset tulevat tasaisesti, verkossa ei ole ruuhkaa -> ikkunan kokoa voisi ehkä suurentaa

Ruuhkaikkunan koko muuttuu dynaamisesti tilanteen mukaan. TCP:n vietien lähetyksessä on eri vaiheita. Lähetyksen alussa, ns hidas aloitus (engl. slow start), TCP kasvattaa ikkunan kokoa nopeasti, kunnes se törmää ruuhkaan. Silloin se pienentää ikkunan kokoa merkittävästi ja pyrkii jatkossa välttämään ruuhkaa. Ruuhkan välttely -vaiheessa (engl. congestion avoidance) TCP kasvattaa ikkunan kokoa hyvin maltillisesti.

KUVA:  TCP:n viestien lähetys!

Hidas aloitus:
* Ihan aluksi ruuhkaikkunan koko on 1 - hidas siirtonopeus, koska vain yksi sanoma yhtä kiertoviivettä kohti
* Exponentiaalinen kasvu - jokaista saapuvaa kuittausta kohti saa lähettää kaksi viestiä (ikkunan koko kasvaa yhdellä). Näin yhden kiertoviiveen aikana ikkunan koko kaksinkertaistuu
* Jatkuu kunnes ikkunan koko saavuttaa kynnysarvon

Ruuhkanvälttely:
* Alkaa heti kun ruuhkaikkunan koko saavuttaa kynnysarvon
* Lineaarinen kasvu - kasvata ruuhkaikkunan kokoa vain yhdellä yhtä kiertoviivettä kohti.

Kynnysarvon tarkoitus on siis toimia ennakkovaroituksena mahdollisesta ruuhkautumisesta ennenkuin lähetysnopeus on liian suuri. Kynnysarvo säätää vaiheita, kun ruuhkaikkuna pienempi kuin kynnysarvo ollaan hitaassa aloituksessa ja ruuhkaikkuna kasvaa yhdellä jokaisesta saapuvasta uudesta kuittauksesta. Kun ruuhkaikkuna on vähintään kynnysarvon suuruinen, niin ollaan ruuhkavälttelyssä ja ruuhkaikkunan koko saa kasvaa enää yhdellä yhden kiertoviiveen keston aikana. 

Jos ajastin laukeaa ja tulee uudelleenlähetys, niin oletaan, että verkko on pahasti ruuhkautunut. Ruuhkaikkunan kooksi asetaan 1 ja toiminta jatkuu hitaalla aloituksella. Samalla uudeksi kynnysarvoksi tulee puolet sen hetkisen ruuhkaikkunan koosta (kynnysarvo = ruuhkaikkuna / 2).

Jos yksittäinen segmentti on kadonnut, niin vastaanottaja lähettää kuittauksia, joissa on saman kuittausnumero.  Yksittäisen paketin katoaminen voi liittyä ruuhkaan, mutta yhtä hyvin paketin siirrossa on saattaut tapahtua bittivirhe, jonka seurauksena paketti on vaurioitunut ja se on hylätty. Saapuvia toistokuittauksia voidaan käyttää ruuhkanhallinnan apuna. Koska kuittauksia edelleen saapuu, niin verkko pystyy vielä välittämään liikennettä, mutta voisi olla hyvä hiukan rauhoittaa tilannetta. 

Kolmen saapuneen toistokuittauksen jälkeen lähettäjä aloittaa sekä nopean toipumisen (engl. fast recovery) että nopean uudelleenlähetyksen (engl. fast retransmit) ja lähettää puuttuvan segmentin. Samalla se puolittaa sekä ruuhkaikkunan koon että asettaa uuden kynnysarvon (kynnysarvo = ruuhkaikkuna / 2). Liikennöinti jatkuu ruuhkavälttelyllä.


KUVA: Ruuhkaikkunan koon muutoksista

QUIZZ - kuvaan liittyen  (teetä tässä vanhan tentti tms.)


## Ajastimen arvo

Edellä on vain sanottu, että lähetetään paketti uudelleen, kun ajastin laukeaa ja että ajastimen arvon pitää olla sopivan mittainen. Mikä on sopiva ajastimen arvo?  Liian lyhyt aiheuttaa tarpeettomia uudelleen lähetyksiä ja liian pitkä hidastaa toimintaa, kun uudelleenlähetykseen kestää kauan ja sinä aikana ikkuna ei voi edetä. Tarpeettoman pitkä ajastimen arvo voi myös pahentaa ruuhkaa, koska silloin lähettäjä pystyy täyttämään mahdollisesti isomman ikkunan verran verkkoa ennenkuin ajastimen avulla huomaa ruuhkatilanteen syntyneen.

Hyvä perussääntö ja paljon käytetty oletus on, että sopiva ajastimen arvo on noin kaksinkertainen kiertoviiveeseen verrattuna (ajastin = 2 * kiertoviive). Koska yhteyden alussa ei kiertoviiveen kestoa tiedetä, on TCP:n kuvauksessa määritelty ajastimen oletusarvoksi 1 sekunti. Tästä ja tuosta kaksinkertaisesta kiertoviiveestä seuraa suoraan jo aiemmin esillä ollut vaatimus, että kuittausta saa viivästää korkeintaan 500 millisekuntia.

Jos ajastin laukeaa, niin kaksinkertaistetaan aikaraja (ns. exponential backoff). Näin lähettäjä pyrkii välttämään tarpeettomia uudelleenlähetyksiä. Tarpeettomien uudelleenlähetystä välttäminen on tärkeämpää kuin mahdollinen toiminnan hidastuminen tarpeettoman pitkän ajastinarvon vuoksi.

Lähettäjä säätää ajastinarvoa saapuvien kuittausten avulla arvioidun kiertoviiveen perusteella. Edellistä arviota päivitetään uudella mittaustuloksella. Yksittäisen viestin lähetyksen ja sen kuittauksen saapumisen väli on tähän viestiin liittyvä kiertoviive. Eri viestien näin mitatut kiertoviiveet voivat olla hyvinkin eri suuruisia, siksi säätämistä tehdään jatkuvasti. Tämä mitattu kiertoviive, jolla arviota päivitetään, voidaan laskea joko jokaisen kuittauksen yhteydessä tai vähintään kerran yhden kierroksen aikana. Kierroksen kesto on yhden kiertoviiveen verran.

Näin ollen uusi ajastinarvo on TimeoutInterval = EstimatedRTT + 4* DevRTT, missä <br>
EstimatedRTT = (1-&alpha;)* EstimatedRTT + (&alpha;)* SampleRTT  ja <br>
DevRTT = (1-&beta;)* DevRTT + &beta;* |SampleRTT-EstimatedRTT|

* EstimatedRTT on kiertoviiveen arvio
* DevRTT kuvaa arvojen vaihteluväliä eli poikkeamaa
* &alpha; ja &beta; ovat painoja, joilla säädetään, kuinka paljon uusi arvo voi muuttaa edellistä arviota. Tyypillisest &alpha; = 1/8 = 0,125 ja  &beta; = 0,25

QUIZZ: Joku ajastin laskutoimitus




**Jos aikaa jää, niin tänne lisää protokollan käyttäytymisestä ruuhkaisilla yhteysväleillä yhdessä muiden kanssa. Tarkastellaan reiluuttaa (engl. fairness)**





