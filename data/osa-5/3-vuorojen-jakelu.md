---
path: '/osa-5/3-vuorojen-jakelu'
title: 'Lähetysvuorojen jakelu'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet käsitteen kuormittaminen.
- Osaat luoda luokalle useampia konstruktoreita.
- Osaat luoda luokkaan useampia samannimisiä metodeja.

</text-box>

## Yhteiskäyttöinen kanava


Kalvo: yksikanava - jaettu vai oma?
Kaksipisteyhteys (point-to-point)
PPP-protokolla, puhelinyhteys (dial-up access)
Ethernet-kaapeli kytkimen ja isäntäkoneen välissä
Yleislähetysyhteys (broadcast)
Alkuperäinen Ethernet, Ethernet keskittimen ja isäntäkoneen välissä, kaapelimodeemiyhteys (upstream), WLAN, satelliitti, 

Kslvo: lähetysvuorojen jakelu
Yksi yhteinen kanava lähettäjille
Lähetys onnistuu vain, jos yksi  kerrallaan lähettää
Jos useampi lähettää yhtäaikaa, syntyy yhteentörmäys
Kaikki solmut saavat useita signaaleja, “bittimössöä”
Törmänneet sanomat tuhoutuvat ja ne on lähetettävä uudelleen
Multiple Access Protocol
Tapa, jolla solmu päättelee, voiko se lähettää
Kuinka solmun on toimittava törmäystilanteessa
 Neuvottelu samassa kanavassa!

Klvo: Multiple access protocol
Pieni yleisrasite
Kun vain yksi lähettää, se pystyy hyödyntämään koko kanavan siirtonopeuden R bps
Tasapuolisuus
Kun M lähettäjää, kukin saa keskimäärin saman osuuden linjan siirtonopeudesta (R/M bps)
Toimintavarmuus
Yksikään solmu ei ole erikoisasemassa, koordinaattorina
Ei kellojen sykronointia tms
Hajautettu vuoroista sopiminen
Kustannustehokkuus
Yksinkertainen ja halpa toteuttaa

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


