---
path: '/osa-4/4-reititin'
title: 'Reititin'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat yleisellä tasolla kuvata reitittimen rakenteen ja sen sisäisen toiminnallisuuden

</text-box>


## Reititin

Reitittimen perustehtävähän on ohjata sille saapuvat paketit oikeaan suuntaan eteenpäin. Tssä osiossa tarkastellaan reitittimen toimintaa ja rakennetta tähän perustehtävään liittyen. Wikipedian sivu [reititin](https://fi.wikipedia.org/wiki/Reititin) luettelee nykyaikaisen kotiverkon reitittimen tai oikeammin monitoimireitittimen muitakin tehtäviä, joista osa käsitellään muualla tällä kurssilla ja osa jätetään myöhemmillä kursseilla käsiteltäväksi.

Yhden paketin käsittely reitittimessä voidaan jakaa kolmeen vaiheeseen. Ensin paketti saapuu reitittimelle jonkun sisääntulon kautta. Sen jälkeen reititin tekee päätöksen mihin suuntaan paketti laitetaan. Viimeisenä vaiheena reititin lähettää paketin eteenpäin jonkun ulosmenon kautta. Reitittimen sisäisen toiminnallisuuden ja rakenteen pitää siis tukea pakettien siirtoa siihen kytkettyjen eri linkkien välillä. Useimmat verkkototeutukset perustuvat tällä hetkellä kaksisuuntaiseen yhteyteen, joten sama linkkiyhteys toimii joillekin paketeille sisäätulona ja joillekin toisille paketeille ulosmenona. 

Reitittimien täytyy toki myös ylläpitää reititystietoa. Koska reititystietojen muutokset vaikuttavat pakettien ohjaukseen, niin joskus nämä kaksi toiminnallisuutta sijoitetaan loogisesti eri tasoille. Pakettien ohjaus kuuluu silloin toimintatasolle (engl. functional plane) ja sen toimintaa ohjaa ja valvoo erillinen kontrollitaso (engl. control plane). Reititystietoihin liittyvät muutokset tehdään siis kontrollitasolla ja vain pakettien ohjaus tapahtuu toimintatasolla. Tällainen toiminnallisuuksien erotteleminen eri tasoille pitäisi jo tässä vaiheessa kurssia olla jonkunverran tuttua, koska olemme käyttäneet jo protokollapinoa, jossa on erilaisia kerroksia ja niillä erilaisia toiminnallisuuksia. Tasojen käyttö poikkeaa kuitenkin protokollapinosta yhdellä merkittävällä tavaolla. Protokollapinossa paketin käsittelyä tehdään tarvittaessa jopa pinon kaikilla kerroksilla ja pinojen toiminnallisuuksilla on järjestys. Sen sijaan toimintatason toiminnallisuus on riippumattomampaa kontrollitason toiminnasta. Pakettien ohjaus tapahtuu kokonaisuudessaan toimintatasolla ja kontrollitaso puuttuu toiminnallisuuteen vain, kun on tarpeen päivittää ohjauspäätöksen taustalla olevia tietoja.

Kotrollitason toiminnot kävimme läpi jo edellisessä osassa, kun tutustuimme reititysalgoritmeihin. Tässä keskitytäänkin toimintatasoon, jolla reittimen pitää pystyä toimimaan hyvin tehokkaasti ja välittämään paketti nopeasti eteenpäin.


## Sisääntulo



## Ulosmeno



## Arkkitehtuuri  (kytkentä sisäänmenojen ja ulostulojen välilllä)


