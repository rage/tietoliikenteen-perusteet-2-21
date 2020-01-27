---
path: '/osa-5/3-vuorojen-jakelu'
title: 'Lähetysvuorojen jakelu'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata yleisellä tasolla, miten kanavan jakaminen ja lähetysvuorojen jakelu voidaan tehdä.
- Osaat esitellä erilaisia lähetysvuorojen jakeluun liittyviä periaatteellisia ongelmia sekä joitakin niihin liittyviä ratkaisuja
- Tunnistat mm. lyhenteet TDMA, FDMA, CDMA, CSMA/CD, CSMA/CA, jne.
- Osaat simuloida Ethernetin käyttämää lähetysvuorojen jakelumenetelmää erilaisissa tilanteissa.

</text-box>

## Yhteiskäyttöinen kanava ja lähetysvuorojen jakelu

Kanava, jolla lähettäjän ja vastaanottajan välinen viesti kulkee, voi olla joko oma tai ajettu. Omaa kanavaa kutsutaan kaksipisteyhteydeksi (engl. point-to-point), koska siinä on vain kaksi päätä lähettäjä ja vastaanottaja. Jos kanava on jaettu, niin silloin se on yleislähetysyhteys (engl. broadcast), jossa voi olla useita lähettäjiä ja vastaanottajia. Kaksipisteyhteys on esimerkiksi tähtiverkon yksi haara ei parikaapeli kytkimen ja isäntäkoneen (engl. host) välillä. Myös puhelinverkossa esimerkiksi kahden modeemin välinen yhteys on kaksipisteyhteys. [Point-to-Point Protocol (PPP)](https://fi.wikipedia.org/wiki/PPP_(tiedonsiirtoprotokolla)) on suunniteltu nimeomaan käytettäväksi tällaisilla yhteyksillä. Nykyisin ethernet on paljolti syrjäyttänyt sen, koska modeemien käyttö on vähentynyt ja etherner-pohjaisten laajakaistayhteyksien käyttö lisääntynyt.

Langaton verkko, väylätopologia ja usein myös tähtitopologia ovat yleislähetysyhteyksiä, koska kaikki voivat lähettää ja kaikki vastaaottajat kuulevat kaiken tai lähes kaiken kanavassa kulkeva liikenteen. Yleislähetysyhteydellä meillä on siis yksi jaettu kanava, jota kaikki kuuntelevat. Lähetys onnistuu virheettömäasti vain jos yksi lähettäjä lähettää kerrallaan. Jos useampi lähettäjä lähettää samanaikaisesti, niin syntyy yhteentörmäys, jolloin viestien signaalit sekoittuva ja vastaanottajalle saapuu epämääräistä "bittimössöä". Vastaanottaja ei siis pysty tästä mössöstä enää erottamaan yhtä virheetöntä viestiä, vaan kaikki törmänneet viestit tuhoutuvat ja ne täytyy lähettää uudelleen. Meidän täytyy siis rakentaa mekanismi, jolla varmistetaa, että vain yksi lähettäjä kerrallaan lähettää.

Kanavan lähetysvuorojen jakelusta käytetään useita erilaisia englanninkielisiä termejä, ainakin channel access method, multiple-access protocol ja media access control (eli MAC). Ne korostavat hiukan eri asioista tästä vuoronjako problematiikasta. Suomen kielen termmi 'lähetysvuorojen jakelu' on muuten kuvaava, mutta se ei valitettavsti ota kantaa siihen, että usein kyse on nimenomaan lähettäjällä tapahtuvasta päätöksenteosta. Englanninkieliset termit korostavat nimenomaan siitä, että kyse on lähettäjän tai viestin pääsystä (access) kanavalle.

Vuoronjakomenetelmää suuniteltaessa on siis päätettävä miten solmu päättelee voiko se lähettää ja kuinka solmun on toimittava törmäystilanteessa. Huomaa, että tietoliikenteessä meillä on käytettävissä vain tämä yksi kanava, jolloin kaikki tarvittava neuvottelu lähetysvuoroista käydään tässä yhdessä ja samassa kanavassa. Neuvotteluissakin lähetetään ja vastaanotetaan viestejä, joiden lähetysvuoroista pitäisi sopia. Tässä siis sekä kontrolli (engl. control) että data kulkevat samassa kanavassa. 

Yhteiskäyttöisen kanavan vuorojenjakomenetelmä valitaan siten, että saamme mahdollisimman suuren osa kanavasta hyötykäyttöön. Tällöin menetelmän aiheuttama yleisrasite on pieni ja lähetysvuoroista sopiminen tehdään kustannustehokkaasti. Menetelmä on tällöin yleensä myös yksinkertainen ja halpa toteuttaa.

Kun kanavassa on vain yksi lähettäjä kerrallaan, se pystyy hyödyntämään kanavan koko siirtonopeuden eli siirtämään tietoa kanavan 'maksiminopeudella' R bittiä sekunnissa. Pidemmällä aikavälillä tarkasteltuna, kun meillä on M lähettäjää, niin jokainen niistä saa keskimäärin saman osuuden linjan siirtonopeudesta eli R/M bittiä sekunnissa.

Vuoronjakomenetelmän keskeinen ongelma onkin se, että miten voimme varmistaa, että yksi lähettäjä ei voi kaapata kanavaa itselleen, vaan että kaikilla lähettäjillä on tasapuolisesti mahdollisuus saada kanava käyttöön ja lähettää viesti sitä pitkin. Haluamme siis välttää yksittäisen lähettäjän nälkiintymisen (engl. starvation). Tietojenkäsittelyteoriassa nälkiintyminen tarkoittaa, että kyseinen entiteetti (tässä sanoman lähettäjä) ei saaa koskaan tarvitsemaansa resurssia (tässä kanava). Jotta nälkiintymistä ei tapahdu, niin kanavanjako menetelmän täytyy olla tasapuolinen. Toisaalta myöskään lukkiutumista (engl. deadlock), eli että mikään lähettäjä ei voisi enää lähettää, ei saa esiintyä. Menetelmän mitää siis olla kaikilta ominaisuuksillaan hyvin toimintavarma.



### Lähetysvuorojen jakaminen

Lähetysvuorojen jakaminen yhdellä kanavalla voidaan tehdä usealla eri tavalla. Kanavanjakoprotokollilla (channel partiotioning protools) oimme jakaa kanava osiin ja antaa yhden osan yhden lähettäjän käyttöön. Voimme ottaa käyttöön jonkun v

Kalvo: lähetysvuorojen jakelu
1) Kanavanjakoprotokollat (channel partitioning protocol)
     Jaa kanavan käyttö 'viipaleisiin' (time slots, frequency, code)
     Kukin solmu saa oman viipaleensa
     TDMA, FDMA, CDMA
     “Käytä sinä tätä puolta, minä tätä toista”
2) Kilpailuprotokollat (random access protocols)
   “Se ottaa, joka ehtii.”
    Jos sattuu törmäys, yritä myöhemmin uudelleen.
    Aloha,CSMA, CSMA/CD
3) Vuoronantoprotokollat (taking-turns protocols)
Jaa käyttövuorot jollakin sovitulla tavalla:
vuorokysely (polling), vuoromerkki, ...
“Minä ensin, sinä sitten.”




Klvo: Kanavajako TDMA
Vuorotellen:
 Vakiokokoinen aikaviipale (time slot) kullekin kanavaan kytketylle asemalle (station) kerran jaksossa
 Aikaviipaleen pituus on yhden kehyksen lähetysaika
 Varattuna, vaikka ei lähetettävää
 Esim 6 solmua:  viipaleissa 1,3,4 on paketteja ja viipaleissa 2,5,6 ei ole 

Kalvo: FDMA
Kanavan taajuusalueet jaettu kanavan käyttäjien (varaajien) kesken
Jokainen asema saa kiinteän taajuusalueen (fixed frequency band), vain osa kanavasta (R/M bps)
 Varattuna, vaikka ei lähetettävää
 Esim. alueilla 1,3,4 on paketteja, ja alueilla 2,5,6 ei 

Kalvo: CDMA
Radiolinjoilla käytettävä koodinjakoon perustuva protokolla
 Kullakin asemalla oma yksilöllinen tapansa koodata bitit 1 ja 0 
 Asemat voivat lähettää yhtäaikaa koko kanavan taajuudella
 Kaikkien signaalit saavat yhdistyä linkillä
 Asemat pystyvät erottelemaan yhteissignaalista itselleen kuuluvat bitit (yksilöllinen koodaustapa)
 Signaali levitetään laajalle spektrialueelle


### Kilpailuprotokollat


Multiple Access Protocol -menetelmissä ei myöskään ole yhtä tiettyä koordinaattoria tai kellojen synkronointia. Kanavanjakaminen eri lähettäjille voidaan toki tehdä keskitetysti, jolloin keskitetty koordinaattori kertoo, milloin solmu saa lähettää. Mikäli tiedämme riittävän luotettavasti, että kaikkien kanavan laitteiden kellot ovat synkronissa, niin silloin kanava voitaisiin jakaa aikaperustaisesti. Huomaa, että Multiple Access Protocol  -menetelmien kanssa kumpaakaan oletusta ei voi käyttää, vaan lähetysvuorot tulee saada aikaiseksi ilman keskitettyä palvelua. Päätös pitää siis tehdä jokaisessa lähettäjässä paikallisen tiedon varassa. 


Kalvo: Kilpailuprotokollat (random access protocols)
Kun asema haluaa lähettää
Se kuuntelee ensin, onko joku muu asema jo lähettämässä
Jos ei, lähettää heti täydellä nopeudella
Jos kaksi aloittaa yhtäaikaa => törmäys
Odota satunnainen aika ja yritä uudestaan (random access)
Protokolla määrittää
Miten törmäys huomataan
Miten törmäyksestä toivutaan
Esim. (viipaloitu)ALOHA, CSMA, CSMA/CD, CSMA/CA

Kalvo: aloha
Kehitetty radiotietä varten70-luvulla Hawaijilla
Lähetä heti, kun on lähetettävää
Ei mitään kuuntelua ennen lähetystä
Kuuntele sitten, onnistuiko lähetys
Lähiverkossa törmäys havaitaan 'heti', sillä siirtoviive on pieni  (toisin kuin satelliitilla)
Jos törmäys, niin odota satunnainen aika ja  yritä uudelleen
Törmäyksen td. suuri 
Max tehokkuus ~ 18% 

Kalvo: viipaloitu aloha
*Oletukset:*
Kaikki siirtokehykset samankokoiset
Aikaviipale yhden kehyksen lähetysaika
Solmu aloittaa lähetyksen aina aikaviipaleen alusta
Solmut ja niiden kellot on synkronoitu
Kaikki solmut havaitsevat yhteentörmäykset (collision)
*Toiminta*
Valmis siirtokehys lähetetään heti seuraavassa aikaviipaleessa 
Ei yhteentörmäystä: Solmu voi lähettää seuraavan kehyksen seuraavassa aikaviipaleessa
Yhteentörmäys: Solmu yrittää lähetystä uudelleen seuraavassa aikaviipaleessa todennäköisyydellä p. Yrittää niin kauan kunnes onnistuu.
*Suorituskyky* kaksinkertaistuu (Alohaan verrattuna) 
Jos paljon lähettäjiä  max. ~37 % tehokkuus
Siis  37% tyhjiä, 37% onnistumisia, 26% törmäyksiä 

Kalvo: kilpailuprotokollat -lhhetyskanavan kuuntelu CSMA (Carrier Sense Multiple Access)
*Kuuntele ennen kuin lähetät*
Asema tutkii, onko kanava jo käytössä (carrier sense)
Jos siirtotie on vapaa, saa lähettää
Jos siirtotie on varattu, odota satunnainen aika ja yritä uudelleen
Ei aina paljasta jo alkanutta lähetystä
*Aina huomaaminen ei ole mahdollista*
Esim.  satelliittikanavan kuuntelu ei paljasta, onko jokin muu maa-asema jo aloittanut lähetyksen
Langattomassa lähiverkossa lähettäjän ympäristön kuuntelu ei kerro, onko vastaanottaja saamassa sanomia muilta
*Yhteentörmäyksiä voi tapahtua* Etenemisviiveen takia ei huomata toisen signaalia ajoissa
Yhteentörmäyksen seuraus: Paketin lähetys epäonnistuu ja lähetysaika menee hukkaan
	Solmujen etäisyydet ja etenemisviiveet vaikuttavat yhteentörmäysten todennäköisyyteen  
    
Kalvo: CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
Asema kuuntelee myös lähettämisen jälkeen
Langallinen LAN: törmäys => signaalin voimakkuus muuttuu 
Esim. Ethernet
Langaton LAN: hankalaa
Jos törmäys, keskeytä lähettäminen heti
ja yritä uudestaan satunnaisen ajan kuluttua
Näin törmäyksen aiheuttama hukka-aika pienenee

Kauanko kuunneltava?
2* maksimi etenemisviive solmujen välillä (A ei saa lopettaa lähetystä ennenkuin  törmäyssignaali olisi ehtinyt tulla!
)

Kalvo: vuoronantoprotokollat
Yhdistä edellisten parhaita puolia
Älä pidä kapasiteettia turhaan varattuna
Älä aiheuta törmäystä
Vuorokysely, pollaus
Isäntäasema kyselee vuorotellen jokaiselta asemalta, onko sillä lähetettävää (polling)
Isäntä kuuntelee signaalia, osaa päätellä, milloin lähetys loppuu
Vuoromerkki (token)
Se, jolla on vuoromerkki, saa lähettää 
Jos ei ole lähetettävää, niin vuoromerkki siirtyy seuraavalle
Kummastakin useita versioita
Ongelmia: lisäviive, 'single point of failure', ..
Montako kehystä yhdessä vuorossa saa lähettää







## Lähetysvuorojen jakelu


