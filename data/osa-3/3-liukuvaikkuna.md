---
path: '/osa-3/3-liukuvaikkuna'
title: 'Liukuva ikkuna'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata liukuvan ikkunan periaatteen.
- Osaat perustella miksi liukuvan ikkunan käyttäminen tiedon siirrossa nopeuttaa sitä yksinkertaiseen pysähdy-ja-odota -malliin verrattuna.
- Osaat kuvata miten liukuvan ikkunan kanssa voidaan toipua viestien katoamisesta.

</text-box>


## Liukuva ikkuna

Edellä käytiin läpi luotettavan kuljetuspalvelun teoriaa äärellisten tila-automaattien avulla. Saimme niillä kuvattua hyvin yksinkertaisen järjestelmän, jossa lähettäjä lähettää yhden viestin ja pysähtyy odottamaan kuittausta tähän viestiin. Koska lähettäjän ja vastaanottajan väliseen tiedonsiirtoon kuluu aikaa, jolloin lähettäjä vain odottaa. Tämän odotuksen kesto noin kaksi kertaa yhden paketin siirron kesto, koska sanoma kulkee lähettäjältä vastaanottajalle ja sitten kuittaus kulkee takaisinpäin. Tätä aikaa, joka viestin lähetyksessä kuluu viestin kulkuun edestakaisin kutsutaan **kiertoviiveeksi** (engl. roundtrip time, RTT).

Yksinkertaisessa järjestelmässä lähettäjä pysähtyy jokaisen paketin jälkeen odottamaan vastausta. Jolloin kahden peräkkäisen viestin välissä kuluu noin yhden kiertoviiveen verran aikaa. Tiedonsiirtoa voidaan nopeuttaa vain, jos saamme kahden peräkkäisen viestin lähettämisten välistä aikaa lyhyemmäksi. Kun kurssin alussa tarkastelimme viipeitä, niin havaitsimme, että lähetettävän datan pilkkominen pienempiin osiin nopeuttaa sen kulkemista verkossa, jos voimme lähettää kaikki palaset liikkeelle peräkkäin. Tarvitaan siis monimutkaisempi toteutus kuin tuo yksinkertainen pysähdy-ja-odota (engl. stop-and-wait). Toki voisimme yhden viestin sijaan lähettää vaikkapa 10 viestiä ja sitten odottaa niille kaikille vastaukset ennen seuraavan purskeen lähettämistä. Tällä saadaan jo viestintää nopeutettua. Mallinnuksen ja algoritmien kannalta kyseessä on kuitenkin tuollainen pysähdy-ja-odota -tyyppinen käyttäytyminen, koska odotetaan vastaus kaikkiin ennenkuin lähetetään lisää. 

Jos viestien lähettäminen liukuhihnoitetaan (engl. pipeline) siten, että lähettäjällä voi olla N kappaletta viestejä odottamassa kuittausta ja lähettäjä voi aina lähettää yhden uuden viestin, kun se saa kuittauksen vanhimpaan lähetettyyn viestiin, niin päästään käyttämään liukuvan ikkunan mallia. Ikkunasta ajatellaan näkyvän juuri niiden viestien, jotka on lähetetty, mutta joille ei vielä ole saapunut kuittausta. KUn kuittaus saapuu, niin ikkuna siirtyy ja lähettäjä pääsee lähettämään uuden viestin. Tässä on tärkeää huomata, että järjestyksessä ensimmäinen (pienin numero, vanhin lähetetty) kuittaamaton viesti on aina ikkunan reunassa. Jo kuitatut viestit eivät siis enää ole ikkunassa, koska niistä lähettäjä tietää, että vastaanottaja on ne varmasti saanut.

Liukuvan ikkunan (engl- sliding window) mallissa tavoitteena on, että lähettäjän ja vastaanottajan välillä on koko ajan liikkeellä viestejä ja kuittauksia siten, että lähettäjän ei tarvitsisi koskaan erikseen pysähtyä odottamaan kuittauksia. Luotettavan kuljetuspalvelun toteutus edellytti, että viestit menevät perille ja että ne menevät perille oikeassa järjestyksessä. Nyt kun matkalla on useita viestejä, on tärkeää numeroida viestit siten, että vastaanottaja voi tarvittaessa järjestää saapuvat viestit oikeaan ja järjestykseen. Vastaanottajan pitää siis voida havaita, jos joku viesti puuttuu välistä. 


## Liukuvan ikkunan toimintaperiaate

Ikkunan koko määrää sen, kuinka monta kuittaamatonta viestiä voi olla yhtä aikaa matkalla lähettäjältä vastaanottajalle. Lähettäjän ei ole pakko lähettää niitä kaikkia, mutta enempää ei saa lähettää.

Ikkunan ulkopuolella voi jonossa olla viestejä, joita ei ole vielä otettu lähettäjällä käsittelyyn, mutta jotka tulevat aikanaan vuoroon, kunhan ikkun saadaan siirrettyä niiden kohdalle.

Ikkunasta jo poistuneista viesteistä ei olla enää kiinnostuneita, koska ne kuljetuspalvelu on saanut onnistuneesti siirrettyä lähettäjältä vastaanottajalle.

Kiinnostavin viesti on ikkunan reunassa oleva viesti, jonka lähettämisestä on kulunut pisin aika. Sitä ei ole vielä kuitattu, joten lähettäjällä ei ole tietoa onko vastaanottaja saanut sen. Vasta kun kuittaus saapuu lähettäjälle voi kuljetuspalvelu olla varma siitä, että viesti on saatu toimitettu perille ja vasta silloin ikkuna voi liikkua sen ohi.

KUVA Liukuvasta ikkunasta!!

Yksinkertaisella äärellisellä tila-automaatilla emme voi enää mallintaa liukuvan ikkunan -algoritmin toimintaa, koska tarvitsisimme juoksevan numeroinnin viesteille ja yksinkertaiset automaatit eivät osaa parametrisoituja viestejä. Siksi tuossa vuorottelevan bitin mallissakin meillä oli kaksi eri viestiä m0 ja m1. Sellaisen automaatin laatiminen, jossa olisi paljon enemmän viestejä ei ole enää mielekästi.  Tuota vuorottelevan bitin mallia voidaan pitää yksinkertaisimpana mahdollisena liukuvan ikkunan järjestelmänä, jos ajatellaan, että viestit muodostavat ketjun 0,1,0,1,0,1,0,1, jne. Yhden alkion kokoinen ikkuna on siis juuri sen viestin kohdalla, joka on lähetty ja jonka kuittausta odotetaan saapuvaksi.

KUVA: Aikajana, jossa rinnakkain kolme aikajanaa: 


## Viestin katoamisesta toipuminen

Luotettavan kuljetuspalvelun ongelma on se, että sen käyttämä kanava on epäluotettava ja voi siis kadottaa viestejä, järjestää viestejä, vaurioittaa viestejä ja jopa monistaa viestin. Kuljetuspalvelun pitää siis selvitä näistä kaikista.

Monistunut viesti on helppo, se pitää vain tunnistaa ja myöhemmin saapunut kopio jättää huomioimatta.  Viestien järjestyksen vaihtuminen pitää huomata vastaanottajalla. Kuljetuspalvelun vastaanottopään pitää antaa viestit eteenpäin oikeassa (lähetys)järjestyksessä, ei siis saapumisjärjestyksessä. Jos vastaanottajalla ei ole puskuria tallentaa väärässä välissä 'liian aikaisin' saapuneita viestejä, niin se joutuu ne kadottamaan, jolloin päädytäänkin kadonneen viestin ongelmaan. Vaurioitunut viesti voidaan käsitellä kadonneena viestinä, koska sisällön oikeellisuuteen ei enää voi luottaa. Kadonneen viestin osalta toipuminen edellyttää aina viestin uudelleenlähetystä.

Lähettäjähän voi havaita kadonneen viestin vain siitä, että siihen liittyvää kuittausviestiä ei tule. Tähän käytetään yleensä ajastinta, jolloin kuittausviestiä odotetaan vain tietty aika, tyypillisesti noin kaksi kertaa kiertoviiveen arvioitu kesto. Ajastimen laukeamisen jälkeen lähettäjä lähettää tämän viestin uudelleen. Mutta mitä pitäisi tehdä muille ikkunassa oleville jo lähetetyille viesteille? Lähettää nekin uudelleen? Vai olettaa, että ne olisivat päässet perille ja vastaanottajalla on riittävä puskuri niiden säilyttämiseen odottamassa toimitusvuoroaan?  Tähän ei ole yhtä ja ainoaa oikeaa vastausta. Ratkaisu voi riippua esimerkiksi siitä kuinka iso ikkuna on tai siitä kuinka suuri tuo kiertoviive on? Myös tietoliikenteen kustannusmalli saattaa vaikuttaa asiaan? Jos jokaisesta siirretystä tavusta maksetaan, niin silloin kannattaa pitää siirrettävän tiedon määrä mahdollisimman pienenä. Jos maksetaan siirtoajasta, niin silloin sitä pitäisi yrittää minimioida. Lähettäjällä ja vastaanottajalla voi olla erilainen kustannusmalli.

Liukuvan ikkunan protokollaan voidaankin toteuttaa joko valikoiva uudelleenlähetys (engl. selective repeat) tai koko ikkunan uudelleenlähetys. Tätä koko ikkunan uudelleenlähetystä kutsutaan usein nimellä Paluu-N:ään (engl. Go-Back-N), koska ajatellaan, että meillä on lähetyskohdan ilmaiseva osoitin, joka siirretään, eli palautetaan, taaksepäin tuohon kohtaan N, josta lähettämistä jatketaan.  


## Paluu-N:ään (Go-Back-N)

Paluu-N:ään on toiminnallisesti hyvin yksinkertainen. Kun vanhimpaan viestiin liittyvää kuittausta ei tule ajoissa, ajastin laukeaa ja lähettäjä lähettää kaikki ikkunassa olevat viestit uudelleen.

Jokainen kuittaus kertoo lähettäjälle, että vastaanottaja on saanut kyseisen paketin ja kaikki sitä edeltävät paketit. Tätä kutsutaan kumulatiiviseksi kuittaukseksi (engl. cumulative acknowldgement). Näin yksittäinen katoava kuittausviesti ei pääse aiheuttamaan massiivista uudelleenlähetystä.

Lähettäjän toiminnallisuus = Tapahtumat, joihin pitää reagoida
* Viesti sovelluskerrokselta: Oletetaan, että meillä on ääretön puskuri, joten viesti lisätään lähetysjonoon. Tarkista onko ikkuna täynnä (eli onko jo N kuittamatonta viestiä). Jos ikkuna ei ole vielä täynnä, lähetä viesti vastaanottajalle. JOs ikkuna on täynnä, viestiä ei vielä voi lähettää.
* Kuittausviesti saapuu: Jos kuittaa jo aiemmin kuitattuja viestejä, niin älä tee mitään. JOs kuittaa uusia kuittaamattomia viestejä, niin siirrä ikkunan reuna ensimmäiseen kuittaamattomaan. Jos lähetysjonossa on lähetettävää, niin lähetä ne yksitellen kunnes ikkuna on täynnä tai ei enää lähetettävää.
* Ajastin laukeaa: Oletetaan, että ajastimen laukeaminen liittyy aina ikkkunan vanhimpaan viestiin, joten lähetä kaikki aiemin lähetetyt kuittaamattomat viestin uudelleen.

Vastaanottajan toiminnallisuus = tapahtumat, joihin pitää reagoida
* Vastaanottaja odottaa seuraavaksi viestiä, jonka järjestysnumero on N+1, ksoak se on jo toimittanut sovelluskerrokselle ja kuitannut kaikki viestit järjestysnumeroon N asti.
* Saapuu viesti, jonka järjestysnumero on oikein eli N+1: Lähetä kuittaus N+1 ja toimita viesti sovelluskerrokselle. (Kasvata odotettavan viestin järjestysnumeroa yhdellä.)
* Saapuu viesti, jonka järjestysnumero on väärin eli ei ole N+1: Lähetä kuittaus N. Viestin voi kadottaa.

Vastaanottajan on tärkeä kuitata kaikki väärällä järjestysnumerolla varustetut viestit. Osa niistä on uudelleenlähetyksiä, joille lähettäjä odottaa kuittausta ja osa on viestejä, joita edeltävät viestit ovat ehkä kadonneet. Lähettäjän on hyvä silloinkin saada tieto siitä, mihin asti vastaanottajalla on täydellinen ketju viestejä.

Miksi vastaanottaja voi kadottaa väärässä järjestyksessä saapuvan viestin? Se voi luottaa siihen, että lähettäjä kuitenkin lähettää viestin uudelleen, jos ja kun edeltävä viesti on kadonnut. Sen ei tarvitse ylläpitää puskuria näille väärässä vaiheessa saapuneille paketeille ja sen toiminnallisuus muuttuu yksinkertaisemmaksi. Sen pitää vain tietää mikä on seuraavaksi odotetun oikean paketin järjestysnumero. Toki on mahdollista, että vastaanottaja puskuroi paketin, mutta silloin oikean paketin saavuttua sen pitää tutkia puskuria ja selvittää, kuinka monta pakettia se voi toimittaa sovelluskerrokselle puskurista.

KUVA Paketin katoamisesta ja siihen liittyvä toipuminen

## Valikoiva uudelleenlähetys

Vähän suorituskyky ja algoritmiikka pohdintaa näihin liittyen. Valinta ei ole aina selvä.
