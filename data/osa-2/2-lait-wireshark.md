
---
path: '/osa-2/2-lait-wireshark'
title: 'Verkon kuuntelu ja lainsäädäntö'
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät millaisia lainsäädännöllisiä aspekteja liittyy tietoliikenteen seurantaan verkossa
- Ymmärrät milloin verkon liikennettä voi kuunnella / kaapata ja miten, jotta ei riko lakia
- Osaat alkeellisella tasolla käyttää wireshark -ohjelmaa valmiin tallennetun liikenteen analysointiin

</text-box>

<quiz id="38dcffe8-2431-4357-ba9c-1d1405abff5d"></quiz>

## Liikenteen analysointi

Tietoliikennettä ja sen protokollien toimintaa voi seurata useilla erilaisissa analysointiohjelmilla. Niiden avulla voi kuunnella tietoliikenneverkossa kulkevia paketteja. Tällainen verkkoliikenteen seuranta ei kaikissa tilanteissa ole laillista, joten sitä ei pidä noin vain kokeilla missä vaan. Rikosoikeudellinen vastuu ja korvausvastuu on aina liikennettä seuraavalla henkilöllä, joten verkon käyttösäännöt pitää tuntea ennenkuin edes lähtee kokeilemaan liikenteen kuuntelua. Kuunnellun liikenteen voi myös tallettaa myöhempää analysointia varten. Tällaisesta pakettien tallettamista kutsutaan englanniksi capture ja suomeksi usein käytetään liikenteen kaappamista tai sieppaamista. Tällaista toimintaa tekevät sekä hyvikset että pahikset. Kumpaan joukkoo liikenteen analysoija milläkin hetkellä kuuluu voi riippua näkökulmasta. Verkon ylläpitäjällä on oikeus seurata verkon liikennettä, jos näin on käyttösäännöissä sovittu. Toisaalta verkon käyttäjä ei varmaankaan toivo oman arkaluontoisen viestittelynsä näkyvän edes ylläpitäjälle.

Viestien salaus on ainoa tällä hetkellä tunnettu keino estää muista seuraamasta omien viestien sisältöjä ja silloinkin liikenteen seuraajalla on käytettävissään erilaisia keinoja liikenteen analysointiin.

Tietoliikenteen seuraamiseen on saatavilla valmiita ohjelmia. Wireshark on ilmainen, avoimen lähdekoodin ohjelma, joka on laajasti käytetty. Ohjelman voi ladata wiresharkin omilta sivuilta [https://www.wireshark.org/]{https://www.wireshark.org/}. Sille on myös saatavilla paljon valmiita analysoitavia tiedostoa, jolloin voimme välttää todellisen tietoliikenteen kuuntelun tällä kurssilla kokonaan. 

Wireshark on erittäin monipuolinen ja tarjoaa paljon vaihtoehtoja tietoliikenteen analysointiin. Tällä kursilla käytämme hyvin pientä osaa sen piireteistä ja tarkastelemme vain muutamaa valmista aineistoa.


## Lainsäädännöstä ja etiikasta

Tietoliikenteen ammattilaisten ja käyttäjien on hyvä tietää mitä verkossa voi tehdä ja mitä ei. Suomen laki asettaa suomalaisille toimijoille selkeät rajat. Ajankohtaisen kotimaisen lainsäädännön voit aina tarkistaa finlex.fi -palvelusta.

Alalla on myös TIVIAn laatimat ja julkaisemat [etiikan ohjeet](https://tivia.fi/toimiala/etiikan-ohjeet/), joita kaikkien alan ammttilaisten olisi hyvä noudattaa. Nämä ohjeet ovat sen verran lyhyet, että kaikkien hyvä ne lukea ja ymmärtää. Sen sijaan kaikkia tässä osiossa mainittua lakeja ei tarvitse kurssimateriaalina lukea. 

Tietoliikenteeseen liittyy useita lakeja, mutta näistä ehkä kaikkien keskeisin on suhteellisen uusi laki [sähköisen viestinnän palveluista]( https://www.finlex.fi/fi/laki/ajantasa/2014/20140917).  Siinä käydään läpi erilaisten sähköisten palvelujen tarjoajien oikeuksia ja velvollisuuksia. Tähän lakiin perustuu esimerkiksi entisen viestintävirastn nykyisen TrafiComin oikeus hallita .fi ja .ax osoitteita.

Harjoitellaan hiukan lakien lukemista. Tutustu siis sähköisen viestinnän palvelujen lain lukuun 21 ja lue siitä mitä laissa sanotaan verkkotunnuksista.

QUIZZ:  Tarkista tästä laista kuinka pitkä verkkonimen vähintään pitää .fi alueella olla?  Entä mikä on maksimipituus?

Kaikenlaiset väärinkäytöksiin, rikoksiin ja niiden valmisteluun liittyvät säännöt ja rangaistukset on koottu [rikoslakiin](https://www.finlex.fi/fi/laki/ajantasa/1889/18890039001).

QUIZZ: MItkä seuraavista rikoksita on kuvattu rikoslain luvussa 38


salakuuntelu
Salassapito
tietoliikenteen häirintä
tietojärjestelmän häirintä
tietomurto
suojauksen purkujärjestelmärikos
tietosuojarikos    (Tietosuojalaki!)
identiteettivarkaus

Teknisen suojauksen kiertämiskeinorikos  (eri luvussa!)
Oikeuksien sähköisten hallinnointitietojen loukkausrikos
Datavahingonteko
Viestintärauhan rikkominen
Salakuuntelu
viestintäsalaisuuden loukkaus

Jos hallinnoisimme verkkoa tai sen palvelua siten, että käsittelisimme henkilötietoja, niin meidän täytyisi noudattaa [tietosuojalakia]( https://www.finlex.fi/fi/laki/ajantasa/2018/20181050). Työnantajina ja työntekijöinä on hyvä tietää mitä laissa [yksityisyyden suojasta työelämässä](https://www.finlex.fi/fi/laki/ajantasa/2004/20040759) määrätään.

Koska seuraavaksi tutustutaan työkaluun, jolla voi kuunnella tietoliikenneverkossa kulkevia viestejä, on tärkeä tietää milloin tällainen kuunteleminen on sallittua ja milloin ei. Suomen laki asettaa perusrajat verkkokuuntelulle, mutta myös verkon käyttösäännöt vaikuttavat asiaan. Esimerkiksi Helsingin yliopiston käyttösäännöt kieltävät kaiken verkkokuuntelun yliopiston omissa verkoissa. Näin on useimpien palveluntarjoajien käyttösäännöissä. 

Lait myös muuttuvat. Keväällä 2019 tuli uusi laki  [tietoliikennetiedustelusta siviilitiedustelussa](https://www.finlex.fi/fi/laki/alkup/2019/20190582), joka tarkentaa poliisilakia tältä osin. Lisäksi on paljon muitakin lakeja, jotka vaikuttavat erilaisten palvelujen tarjoajiin ja muihin ammattilaisiin ja heidän toimintaansa. 

## Wireshark

ZZZZZZZZ KESKEN!!!!!  ZZZZZZZZZ 

Suosittelen ohjelman käyttöä ja noiden valmiiden aineistojen tarkastelua. Osa harjoitustehtävistäkin perustuu niihin. Esimerkiksi HTTP protokollaan liittyy tiedosto xxx.pcap. Kun avaamme tämän tiedoston wiresharkilla, niin ….
