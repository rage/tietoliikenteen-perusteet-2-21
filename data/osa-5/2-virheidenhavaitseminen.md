---
path: '/osa-5/2-virheidenhavaitseminen'
title: 'Virheiden havaitseminen ja korjaaminen'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata miksi tietoliikenteessä virheet ovat mahdollisia.
- Osaat kuvata virheen havaitsemisen ja korjaamisen periaatteet.
- Osaat mainita useita virheiden havaitsemiseen käytettyjä menetelmiä ja kuvata niiden tyypillisiä käyttötilanteita.
- Osaat kertoa UDP/Internet-tarkistussumman ja CRC:n toimintaperiaatteen ja jopa tarvittaessa toteuttaa pienen ohjelman, joka laskee tarkistussumman tällä periaatteella.

</text-box>

## Yleistä virheistä ja niiden havaitsemisesta

Koska tietoliikenteessä tietoa siirretään erilaisina signaaleina langallisesti tai langattomasti, niin signaalit voivat muuttua siirron aikana. Signaali saatta vaimentua niin paljon, että vastaanottaja ei enää kykene luotettavasti erottaan nollia ja ykkösiä toisistaan. Kanavassa voi myös olla muuta taustakohinaa, joka häiritsee vastaanottoa, esimerkiksi kaksi samanaikaista lähettäjää. Myös magneettikenttie vaihtelut ja jopa avaruudesta saapuvat hiukkaset ja säteily voivat muuttaa signaalin tasoja. Nämä muutokset voivat kohdistua vain yhteen bittiin tai useampaan peräkkäiseen bittiin, jolloin niistä voidaan käyttää myös nimitystä virheryöpyksi (engl- burst).

Virheiden havaitseminen on vastaanottajan vastuulla, mutta lähettäjän pitää antaa sille riittävä informaatio, jotta virheenhavaitseminen on mahdollista. Tätä varten lähettäjä lisää kehykseen tarkistustietoa tai tarkistusbittejä (engl. error detection and correction bits). Tämän tarkistustiedon avulla vastaanottaja voi tarkistaa, onko kehykseen tullut virheitä. Jos se havaitsee virheitä kehyksessä, niin se voi joko yrittää korjata virheen, hävittää kehyksen tai pyytää sitä uudelleen lähettäjältä. Nämä kaikki ovat aitoja vaihtoehtoja virheide käsittelyssä, mutta tietoliikenteessä yleensä virheellinen kehys hävitetään. Lähettäjä joutuu lähettämään kehyksen uudelleen.
  
Virheen havaitsemiseen tarvitaan siis lisäbittejä, joita voidaan tarkistusbitti -nimityksen sijaan kutsua tarkistussummaksi. Tarkistussummaan tutustuimmekin jo TCP ja UDP -protokollien yhteydessä. Samaa tarkistussummaa käytetään myös IP-otsakkeessa. Ethernet-kehyksissä käytössä on [Cyclic Redundance Check (CRC)](https://fi.wikipedia.org/wiki/CRC), joka on tehokkaasti toteutettavissa laiteistolla.

Vaikka kuljetuskerroksella on oma segmenttejä ja paketteja koskeva virhetarkistus, niin linkkikerroksella, ainakin ethernet-verkoissa, on oma virhetarkitus. Miksi ihmeessä virhetarkistuksia tehdään useammalla kuin yhdellä kerroksella? Yksinkertainen vastaus, koska muut kerrokset eivät tiedä, missä muualla virhetarkistuksia tehdään. Monimutkaisempi vastaus, eri kerroksilla on käytössä eri menetelmiä, joista osa tekee virhetarkistuksia ja osa ei, joten jos kyseinen protokolla haluaa varmistua siitä, että virhetarkistus toimii kaikilla eri yhdistelmillä, niin se joutuu tekemään sen itse. Vaikka tällä kurssilla tutustutaankin vain linkkikerroksen osalta ethernet-verkon toimintaan, niin todellisuudessa linkkikerroksella voi olla käytössä joku muu menetelmä, jossa ei ole virhetarkistusta. Vastaavsti linkkikerrokselle saattaa saapua siirrettäväksi sellaista dataa, jossa ei ole ylempien kerroksen virhetarkistuksia.

Tietokoneen toiminta kurssilla tutustuttiin jo pariteettibitin käyttämiseen bittivirheen havaitsemisessa ja Hamming-koodin käyttämiseen bittivirheen korjaamisessa. Tästä jo havaittiin, että virheen korjaamiseen tarvitaan pajon enemmän bittejä kuin pelkkään virheen havaitsemiseen. Jos uudelleenlähetys ei ole vaihtoehto, niin silloin lähetykseen pitää liittää vielä enemmän tarkistustietoa, jotta virheenkorjaaminen on mahdollista.

Teoreettisemmassa tarkastelussa virheen korjaaminen (engl. error correction) voidaan tehdä joko taaksepäin (backward) tai eteenpäin (forward). Uudelleenlähetys luokitellaan tässä taaksepäin tapahtuvaksi, koska järjestelmän toiminta tavallaan peruutetaan aiempaan toiminnallisuuteen. Vastaavasti sellaisen menetelmän käyttö, jossa paketti saadaan korjattua ja voidaan toimittaa edelleeen kuuluu näihin eteenpäin tapahtuviin eli FEC-menetelmiin.  Näitä menetelmiä ovat edellämainittu Hamming-koodi ja satelliittiyhteyksillä käytetty Reed-Solomon-koodi.

Tietoliikenteessä tyypillisesti kuitenkin erikoistapauksia lukuunottamatta tyydytään virheen havaitsemiseen ja tarvittaessa paketin hylkäämiseen / uudelleen lähetykseen. Näin tarvittavan tarkistustiedon määrä pysyy kohtuullisena. Noin 1500 tavua dataa sisältävän ethernet-kehyksen tarkistustiedon koko on vain 4 tavua. Kun lisäksi valitaan laitteistolla tehokkaasti toteutettava koodaustapa, niin paketin siirtoonkaan ei tule kohtuutonta viivettä tarkistussumman laskennasta ja tarkistamisesta.

Koska virheet esiintyvät tyypillisesti ryöppyinä ja sekoittavat kehyksen sisällöstä enemmän kuin vain yhden bitin, eivät menetelmät, joilla havaitaan vain yksittäisen bitin vikaantuminen, toimi tietoliikenteessä. Esimerkiksi yksinkertaisella pariteettitarkistuksella on vain noin 50% todennäköisyys havaita viottunut paketti.  Vastaavasti se tulkitsee viallisen paketin samalla todennäköisyydellä oikeaksi. Jotta menetemä olisi käyttökelpoinen sen pitää havaita vioittunut paketti paljon luotettavammin.

Eri yhteyksillä virheiden esiintymistiheyksissä (engl. bit error rate, BER) pn suuria eroja. Jos yhteydellä esiintyy paljon virheitä eli virheiden tiheys on suuri, niin lähetettävien kehyste kokoa kannattaa pienemtää. Näin kasvatetaan todennäköisyyttä, että virhe ei osu kehykseen vain ennen sitä tai sen jälkeen. Suuri kehys on kauan siirtotiellä ja samalla kasvaa todennäköisyys, että kehykseen osuu bittivirhe tai virhepurske.


  
 
  


## Tarkemmin

Kalvo: Tarkistussumma
Internet-checksum
  Yhteenlasketaan 16 bitin kokonaisuuksia, yhden komplementti
  Kuljetuskerros laskee ja tarkastaa UDP- ja TCP-protokollissa
  Huom. IP sekä UDP/TCP ja UDP optionaalinen
  Ei kovin tehokas;  linkkikerros ei käytä
CRC (cyclic redundance check)
  Linkkikerroksella paljon käytetty virheenpaljastusmenetelmä, 
  helppo toteuttaa laitteistotasolla, luotettava
  Perustuu polynomien aritmetiikkaan 
  tunnetaan myös nimellä polynomikoodi (polynomial code)
  Useita tarkistusbittejä; havaitsee usean bittivirheen ryöpyn. 
  
Kalvo: CRC
Bittijonot tulkitaan polynomeiksi mod 2, ts. kertoimet ovat 0 tai 1. 
Sovittu virittäjäpolynomi P. P:n aste r+1, jos r tarkistusbittiä. Tällaisia polynomeja on stardardoitu, esim. 
   CCITT: X^16+x^12+X^5+1.
Olkoon paketti m bittiä ja tulkitaan se taas polynomiksi M. 
Lisätään M:ään r bittiä siten, että X^r M + R on tasan jaollinen P:llä. 
R on M:n tarkistusumma. 
Kuinka R löydetään? 
Pitäisi siis olla x^r M + R = nP, jollakin n>0. 
Siis R on jakojäännös (x^r M)/P. 
Esim. P=1001 = x^3 + 1, r = 3, 
M = 101110 = x^5+x^3 + x^2 + x.
x^3 M = x^8 + x^6 + x^5 + x^4. 
Jakojäännös (x^3 M)/P on x+1 eli 011.  

Kalvo: standardoituja virittäjäpolynomeja IEEE
GCRC-12 = x12 + x11 + x3 + x2 + x + 1  (HUOM! potensseja!!!)
GCRC-16 = x16 + x15 + x2 +1
GCRC-32=x32+ x26 + x23+…+ x4 + x2 + x+1 
            =1 0000 0100 1100 0001 0001 1101 1011 0111
				(r+1=33 bittiä)
Virittäjäpolynomin merkitsevin bitti aina =1
Havaitsee
   kaikki virheryöpyt, joiden pituus < tai =  kuin virittäjän pituus
   lähes kaikki virheryöpyt, joiden pituus on suurempi
   
   
Kalvo: CRC polynomin määritys
Polynomi kuvaa virheiden jakautumista
Maksimoi virheiden havaitseminen
Minimoi ylimääräinen tarkistus
CRC hyödyllinen koska se on tehokas toteuttaa ja havaitsee myös purskevirheet (jotka eivät ole tasajakautuneita)
Ei sovi tietoturvakäyttöön
Pariteettibitti voidaan nähdä triviaalina 1-bitin CRC:nä

Lisätietoja: http://en.wikipedia.org/wiki/Mathematics_of_CRC



 








Tarkastellaan tätä käytännössä. Oletetaan, että käytössämme on seuraava luokka `Henkilo`.

<quiz id='3a28a6ee-2504-44c5-957d-1dbd9e9533af'></quiz>

