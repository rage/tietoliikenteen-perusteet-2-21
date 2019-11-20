---
path: '/osa-3/3-liukuvaikkuna'
title: 'Liukuva ikkuna'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata liukuvan ikkunan periaatteen.
- Osaat perustella miksi liukuvan ikkunan käyttäminen tiedon siirrossa nopeuttaa sitä yksinkertaiseen pysähdy-ja-odota -malliin verrattuna.
- Osaat kuvata miten liukuvan ikkunan kanssa voidaan toipua viestien katoamisesta.

</text-box>


## Liukuva ikkuna

Edellellä käytiin läpi luotettavan kuljetuspalvelun teoriaa äärellisten tila-automaattien avulla. Saimme niillä kuvattua hyvin yksinkertaisen järjestelmän, jossa lähettäjä lähettää yhden viestin ja pysähtyy odottamaan kuittausta tähän viestiin. Koska lähettäjän ja vastaanottajan väliseen tiedonsiirtoon kuluu aikaa, jolloin lähettäjä vain odottaa. Tämän odotuksen kesto noin kaksi kertaa yhden paketin siirron kesto, koska sanoma kulkee lähettäjältä vastaanottajalle ja sitten kuittaus kulkee takaisinpäin. Tätä aikaa, joka viestin lähetyksessä kuluu viestin kulkuun edestakaisin kutsutaan #kiertoviiveeksi#

TCP[https://fi.wikipedia.org/wiki/TCP] tarjoaa luotettavan kuljetuspalvelun. Se siis siirtää sovelluskerrokselta saamansa data sellaisenaan vastaanottajalle, jos lähettäjän ja vastaanottajan välillä on verkkoyhteys. Jos yhteyttä ei ole, niin kuljetus ei ole mahdollista ja tästä informoidaan sekä lähettäjää että vastaanottajaa.

TCP:n näkokulmasta sovellus pyytää TCP-yhteyden muodostusta, kun se avaa uuden tavuvirtapistokkeen. Vastaavasti sovellus pyytämällä pisteokkeen sulkemista kertoo TCP:lle, että yhteys voidaan purkaa.

Kun yhteys on auki sovellus voi sitä kautta lähettää viestejä molempiin suhtiin lähettäjän ja vastaanottajan välillä. Huomaathan, että yhteys muodostetaan aina vain kahden laitteen välille.



## Liukuvan ikkunan toimintaperiaate


## Viestin katoamisesta toipuminen

- yksittäisen viestin uudelleen lähettäminen (engl. selective repeat)

- kadonneen viestin ja kaikkien sitä seuraavien viestein uudelleen lähettäminen (engl- go-back-n)

Vähän suorituskyky ja algoritmiikka pohdintaa näihin liittyen. Valinta ei ole aina selvä.
