---
path: '/osa-5/1-linkki-toiminta'
title: 'Yleistä linkkikerroksen toiminnasta'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat selittää linkkikerroksen toiminnallisuus (MAC- 
   osoitteet, bittivirheiden havaitseminen) ja ARP-protokollan 
   käyttö. 
- Osaat selittää yhteiskäyttöisen siirtokanavan varaus ja käyttö
- Osaat selittää, kuinka koneita voi yhdistellä lähiverkoiksi
- Osaat selittää reitittimen, kytkimen ja keskittimen erot 

</text-box>


##

Linkkikerros yleisesti

- tämä voi olla aika lyhyt 


kalvo 1 Linkkikerroksen tehtävät
Virheiden havaitseminen ja korjaaminen
Yhteiskäyttöisen kanavan varaus
Osoittaminen linkkikerroksella
Ethernet
Keskitin ja kytkin

kalvo2 Linkkikerroksen tehtävät / linkkikerros
Laitetoimintoa
Siirtää paketin fyysistä linkkiä pitkin koneelta (solmulta (node)) toiselle
langallinen / langaton
bitit sisään, bitit ulos 
Kapseloi paketin sopivaan siirtomuotoon
Siirtokehys (frame)
Lähiverkossa linkkejä voi yhdistää kytkimillä
Käytetään fyysisiä osoitteita
'reititystä' ilman IP-osoitteita  

Kalvo3 linkkikerroksen tehtäviä
Vuonvalvonta, puskurointi
  Kytkimessä on useita erinopeuksisia linkkejä
Yksisuuntainen /kaksisuuntainen liikenne
Yksisuuntainen: lähetysvuorojen hallinta
Virhevalvonta
  signaali vaimenee, taustakohina häiritsee, ...
  Kehyksessä on tarkistustietoa (error detection and correction bits)
  Vastaanottava solmu korjaa, jos pystyy
  Jos ei pysty, pyytää uudelleen tai hävittää 
Kehystys (framing)
  Kehyksen rakenne ja koko riippuu siitä, millainen linkki on kyseessä
  Otsake, data, lopuke
Kohteen ja lähteen osoittaminen
  Yhteiseen linkkiin voi olla liitettynä useita laitteita
  Käytössä laitetason MAC-osoite (Medium access control)
Yhteisen linkin varaus ja käyttö (link access)
  Esim. langaton linkki, keskittimiin yhdistetyt linkit
Luotettava siirto
  Langattomilla linkeillä suuri virhetodennäköisyys
  Linkkitaso huolehtii oikeellisuudesta
  Miksi tästä täytyy huolehtia vielä kuljetuskerroksella?
  Jotkut linkkityypit eivät huolehdi lainkaan!
  Jos kehys hävitettävä .. 

Kalvo 4: Miten linkkikerros on toteutettu
Jokaisessa koneessa!
Linkkikerroksen toteutus usein “sovittimessa” (esim. verkkokortti)
Linkki ja fyysinen kerros
joka liitetään koneen väylään
Yhdistelmä laitteistoa, ohjelmistoa ja laitteisto-ohjelmisto (firmware)






