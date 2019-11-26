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

TCP [https://fi.wikipedia.org/wiki/TCP] tarjoaa luotettavan kuljetuspalvelun. Se siis siirtää sovelluskerrokselta saamansa datan sellaisenaan vastaanottajalle, jos lähettäjän ja vastaanottajan välillä on verkkoyhteys. Jos yhteyttä ei ole, niin kuljetus ei ole mahdollista ja tästä informoidaan sekä lähettäjää että vastaanottajaa.

TCP:hen on vuosien varrella lisätty erilaisia piirteitä, jotka lisäävät protokollan yksityiskohtien monimuotoisuutta. Tällä kurssilla käymme läpi vain hyvin yksinkertaisen perustoiminnallisuudet. Lisäpiirteitä voi sitten opiskella myöhemmin maisterivaiheen kurssilla Internet Protocols.

TCP muodostaa yhteyden viestien siirtoa varten lähettäjän ja vastaanottajan välille. Yhteys mudoostetaan, kun viestien vaihto alkaa ja puretaan, kun sitä ei enää tarvita.

TCP:n näkokulmasta sovellus pyytää TCP-yhteyden muodostusta, kun se avaa uuden tavuvirtapistokkeen. Vastaavasti sovellus pyytämällä pisteokkeen sulkemista kertoo TCP:lle, että yhteys voidaan purkaa.

Kun yhteys on auki sovellus voi sitä kautta lähettää viestejä molempiin suhtiin lähettäjän ja vastaanottajan välillä. Huomaathan, että yhteys muodostetaan aina vain kahden laitteen välille.


KUVA: TCP

## TCP:n otsaketiedot


## Yhteyden muodostus ja purku

TCP:n yhteyden muodostuksessa välitetään kolme viestiä.

## Vuonvalvonta


## Ruuhkanhallinta


## Liukuvan ikkunan toiminta


## Virhetilanteista toipuminen



