---
path: '/osa-2/1-http'
title: 'Verkkosovelluksen toimintaperiaatteita'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat selittää miksi tietoliikenneverkko pitää olettaa epäluotettavaksi.
- Ymmärrät miksi verkon kuuntelu on helppoa ja miksi kuuntelulta suojautuminen tapahtuu lähinnä salauksen avulla.
- Osaat kuvata kuljetuskerroksen palvelut sovelluskerroksen protokollille.
- Osaat perustella miksi sovelluskerroksella täytyy ottaa kantaa sen tarvitsemiin alemman kerroksen palveluihin.

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>


## Aiemmalla kurssilla



## Sovelluskerroksen odotuksia kuljetuskerrokselle



## HTTP

HTTP (Hypertext Transfer Protocol) on käsitelty jo ensimmäisellä kurssiosalla. Se on yksinkertainen pyyntö-vastaus -protokolla. Asiakas lähettää pyynnön, johon palvelin vastaa.  Protokollan yleisen käyttötapa on www-sivujen siirto palvelimelta selaimelle. Tällöin prokollalla siirretään HTML-kielen mukaisen sivun kuvaus.

HTTP protokollaa käytetään nykyään myös sovellusten omien protokollien kuljettamiseen sovelluksen komponenttien välillä. Se on siis näiden sovelluksen omien protokollien näkökulmasta vain kuljetusprotokolla, vaikka onkin Internetin protokollapinossa sovelluskerroksen protokolla. Tällä kurssillä jätetään nämä HTTP:n päälle rakennetut sovellukset ja niiden ratkaisut kokonaan käsittelemättä, mutta lukijan on hyvä muistaa, että niitä on jo nyt ja niiden määrä luultavsti vain lisääntyy tulevaisuudessa.

## Liikenteen analysointi

Tietoliikennettä ja sen protokollien toimintaa voi seurata useilla erilaisissa analysointiohjelmilla. Niiden avulla voi kuunnella tietoliikenneverkossa kulkevia paketteja. Tällainen verkkoliikenteen seuranta ei kaikissa tilanteissa ole laillista, joten sitä ei pidä noin vain kokeilla missä vaan. Rikosoikeudellinen vastuu ja korvausvastuu on aina liikennettä seuraavalla henkilöllä, joten verkon käyttösäännöt pitää tuntea ennenkuin edes lähtee kokeilemaan liikenteen kuuntelua. Kuunnellun liikenteen voi myös tallettaa myöhempää analysointia varten. Tällaisesta pakettien tallettamista kutsutaan englanniksi capture ja suomeksi usein käytetään liikenteen kaappamista tai sieppaamista. Tällaista toimintaa tekevät sekä hyvikset että pahikset. Kumpaan joukkoo liikenteen analysoija milläkin hetkellä kuuluu voi riippua näkökulmasta. Verkon ylläpitäjällä on oikeus seurata verkon liikennettä, jos näin on käyttösäännöissä sovittu. Toisaalta verkon käyttäjä ei varmaankaan toivo oman arkaluontoisen viestittelynsä näkyvän edes ylläpitäjälle.

Viestien salaus on ainoa tällä hetkellä tunnettu keino estää muista seuraamasta omien viestien sisältöjä ja silloinkin liikenteen seuraajalla on käytettävissään erilaisia keinoja liikenteen analysointiin.

Tietoliikenteen seuraamiseen on saatavilla valmiita ohjelmia. Wireshark on avoimen lähdekoodin ohjelma, joka on laajasti käytetty. Ohjelman voi ladata wiresharkin omilta sivuilta [https://www.wireshark.org/]{https://www.wireshark.org/}. Sille on myös saatavilla paljon valmiita analysoitavia tiedostoa, jolloin voimme välttää todellisen tietoliikenteen kuuntelun tällä kurssilla kokonaan. 

Wireshark on erittäin monipuolinen ja tarjoaa paljon vaihtoehtoja tietoliikenteen analysointiin. Tällä kursilla käytämme hyvin pientä osaa sen piireteistä ja tarkastelemme vain muutamaa valmista aineistoa.



ZZZZZZZZ KESKEN!!!!!  ZZZZZZZZZ 

Suosittelen ohjelman käyttöä ja noiden valmiiden aineistojen tarkastelua. Osa harjoitustehtävistäkin perustuu niihin. Esimerkiksi HTTP protokollaan liittyy tiedosto xxx.pcap. Kun avaamme tämän tiedoston wiresharkilla, niin ….


## SMTP

SMTP (Simple Mail Transfer Protocol) on sähköpostijärjestelmässä käytetty siirtoprotokolla, jolla sähköposti siirretään vastaanottajan sähköpostipalvelimelle. Sitä voidaan käyttää myös sähköpostiviestin siirtämiseen viestiä lähettävän käyttäjän sähköpostiohjelmasta lähettäjän omalle sähköpostipalvelimelle viestin edelleenlähetystä varten. SMTP protokolla on suunniteltu vain viestin siirtämiseen lähettäjältä vastaanottajalle.  Siksi sitä ei voida käyttää viestin vastaanottavan käyttäjän sähköpostiohjelmassa viestin noutamiseen lukemista varten. Viestien noutamiseen onkin myöhemmin kehitetty erillisiä protokollia kuten POP3 ja IMAP.

Nykyisin käytössä on lähinnä SMTP:stä edellen kehitetty ESMTP (Extended SMTP).  Tällä kurssilla ei paneuduta tähän laajennukseen, vaan opiskellaan sähköpsotijärjestelmän toimintaperiaate tuon alkuperäisen SMTP:n kanssa. Jos jotakuta laajennus kuitenkin kiinnostaa, niin suomenkielinen wikipedian sivu https://fi.wikipedia.org/wiki/ESMTP on hyvä lähtökohta asian itsenäiselle tutkimiselle.

SMTP protokollassa on määritelty monivaiheinen viestien vaihto lähettäjän ja vastaanottajan välillä. Niiden täytyy ylläpitää tilatietoa, jotta ne pysyvät kärryillä missä vaiheessa viestien vaihto on menossa. Tässä SMTP poikkeaa HTTP-protokollasta. HTTP:hän oli tilanton, jolloin lähettäjän ja vastaanottajan ei tarvitse tätä tilatietoa ylläpitää.

Oheinen yhteysesimerkki on mukaeltu Visa Hännisen insinöörityössä  [https://www.theseus.fi/bitstream/handle/10024/23284/Hanninen_Visa.pdf?sequence=1&isAllowed=y]{"SMTP-releointipalvelun valvonta ja raportointi"}, Metropolia 2010, olleesta esimerkistä.

A (lahettava.palvelin.com) avaa TCP-yhteyden B:lle (email.vastaanottaja.com)
A:   HELO lahettava.palvelin.com
B:   250 email.vaastaanottaja.com Helo lahettava.palvelin.com, nice to interact with you
A:   MAIL FROM: <joku123@ lahettava.palvelin.com>
B:   250 sender <joku123@ lahettava.palvelin > OK
A:   RCPT TO: <kuka123@postipalvelin.com>
B:   250 recipient <kuka123@ postipalvelin.com > OK
A:   DATA
B:   250 OK; enter text, end with .
A:   Tämä on viestin sisältö.
A:   .
B:   250 postipalvelin.com OK; message accepted for delivery
A:   QUIT

Tästä esimerkistä käy hyvin ilmi tuo monivaiheinen viestien vaihto. Tässä esimerkissä sähköpostin lähettäminen onnistuu. Protokollassa on määritelty tarkasti myös erilaiset virhetilanteet ja niihin liittyvät viestit. SMTP on HTTP-protokollan tavoin tekstipohjainen, jolloin ihmisen on mahdollista itsekin ottaa TELNET yhteys palvelimeen ja kirjoittaa nuo lähettävän palvelimen viestit ihan suoraan näppäimistöltä. 

Vastaanottajan tieto toimitetaan palvelimelle oikeasti kahteen kertaan. Se on tuolla RCPT TO viestissä, ja sen mukaisesti viesti sijoitetaan vastaanottajan postilaatikkoon. Viestin mukana näkyvä vastaanottaja tieto tulee kuitenkin erikseen osana viestin sisältöä. Näin toimitaan myös lähettäjän osoitteen kanssa.

XXXX: Tehtävä mitä hyötyjä / haittoja tästä tietojen kahteen kertaan toimittamisesta on?



HUOM: SMTP:hen käytetään paljon aikaa ja tilaa tällä kurssilla!!!!




## DNS

Protokollan sisäinen toiminta ja nimipalveluorganisaatio huolellisesti.  Korosta tuotan asiakaan omaan nimipalvelijaa (engl. DNS resolver), joka ei ole osa virallisten nimipalvelijoiden hierarkiaa.

HTTP,  SMTP  ja DNS



Samat pienet ongelmat (tai "osaongelmat") toistuvat ohjelmissa yhä uudestaan ja uudestaan: "Lue käyttäjältä syötettä", "Laske lukujen summa", "Laske lukujen keskiarvo",  "Lue käyttäjältä syötettä kunnes", "Montako lukua käyttäjä on syöttänyt.", jne.

Tarkastellaan muutamia tällaisia ongelmia sekä niihin liittyviä ratkaisuja.


## Lukemista


<quiz id="333846bf-2099-4aca-89e7-1a313babf7a5"></quiz>




**up**
**never**
**gonna**
**let**
