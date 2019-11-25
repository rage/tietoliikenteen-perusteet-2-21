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


## TCP:n toiminnan periaatteet

TCP[https://fi.wikipedia.org/wiki/TCP] tarjoaa luotettavan kuljetuspalvelun. Se siis siirtää sovelluskerrokselta saamansa data sellaisenaan vastaanottajalle, jos lähettäjän ja vastaanottajan välillä on verkkoyhteys. Jos yhteyttä ei ole, niin kuljetus ei ole mahdollista ja tästä informoidaan sekä lähettäjää että vastaanottajaa.

TCP:n näkokulmasta sovellus pyytää TCP-yhteyden muodostusta, kun se avaa uuden tavuvirtapistokkeen. Vastaavasti sovellus pyytämällä pisteokkeen sulkemista kertoo TCP:lle, että yhteys voidaan purkaa.

Kun yhteys on auki sovellus voi sitä kautta lähettää viestejä molempiin suhtiin lähettäjän ja vastaanottajan välillä. Huomaathan, että yhteys muodostetaan aina vain kahden laitteen välille.

## Yhteyden muodostus ja purku

TCP:n yhteyden muodostuksessa välitetään kolme viestiä.

## Vuonvalvonta


## Ruuhkanhallinta


## Liukuvan ikkunan toiminta


## Virhetilanteista toipuminen


## TCP:n otsaketiedot
