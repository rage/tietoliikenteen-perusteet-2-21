---
path: '/osa-3/6-udp'
title: 'UDP'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata UDP:n toiminnan
- osaat perustella miksi kaikki protokollat eivät tarvitse yhteydellistä kuljetuspalvelua ja miksi joillekin se on tarpeen

</text-box>


## UDP:n toimintaperiaatteet

UDP https://fi.wikipedia.org/wiki/UDP on kuljetusprotokollana TCP:N vastakohta. Se on yhteydetön ja epäluotettava ja sillä on hyvin pieni otsakkeen koko, vain 8 tavua. 

UDP:n otsake
* tavut 0 ja 1: lähettäjän porttinumero
* tavut 2 ja 3: vastaanottajan porttinumero
* tavut 4 ja 5: segmentin pituus otsake mukaan luettuna
* tavut 6 ja 7: tarkistussumma

Loput segmentistä on sitten dataa. 

Data tulee sovelluskerrokselta lähetyspäässä ja toimitetaan vastaanottopäässä sovelluskerrokselle sellaisenaan.

Bittivirheitä vastaan UDP:ssä (ja TCP:ssä) on tarkistussumma, jolla vastaanottaja voi tarkistaa onko viesti ehyt. 

