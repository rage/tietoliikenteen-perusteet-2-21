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

Koska tietoliikenteessä tietoa siirretään erilaisina signaaleina langallisesti tai langattomasti, niin signaalit voivat muuttua siirron aikana. Nämä muutokset voivat kohdistua vain yhteen bittiin tai useampaan peräkkäiseen bittiin, jolloin niitä kutsutaan virheryöpyksi (engl- burst).


Virhevalvonta
  signaali vaimenee, taustakohina häiritsee, ...
  Kehyksessä on tarkistustietoa (error detection and correction bits)
  Vastaanottava solmu korjaa, jos pystyy
  Jos ei pysty, pyytää uudelleen tai hävittää 
  
  Luotettava siirto
  Langattomilla linkeillä suuri virhetodennäköisyys
  Linkkitaso huolehtii oikeellisuudesta
  Miksi tästä täytyy huolehtia vielä kuljetuskerroksella?
  Jotkut linkkityypit eivät huolehdi lainkaan!
  Jos kehys hävitettävä .. 
  



Kalvo: bittitason virheet
Yhden bitin virheitä siellä täällä tai peräkkäisten bittien virheryöppyjä (burst)
 Virheiden esiintymistiheys BER (bit error rate)
 Mitä suurempi tiheys, sitä lyhyempiä kehyksiä käyttöön 
 Havaitsemiseen lisäbittejä
 Feedback/backward error control
 Tietoliikenteessä yleensä: hylkää virh. ja uudelleenlähetys
 Korjaamiseen enemmän lisäbittejä 
 Forward error correction (FEC) (esim. Hamming-koodi)
 Esim. CD, DVD, Blu-Ray, viivakoodit, satelliittiyhteydet, digitelevisio, ...  (Reed-Salomon-koodi)

## Tarkemmin

Kalvo: pariteettitarkistus
Pariteettibitti
  Parillinen vs. pariton pariteetti
  Virheryöpyssä jopa 50% voi jäädä huomaamatta
Kaksiulotteinen pariteetti
  Erikseen horisontaalinen ja vertikaalinen pariteetti
  Pystyy korjaamaan yhden bitin virheen
Hamming-koodi (kts.TiTo)

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

