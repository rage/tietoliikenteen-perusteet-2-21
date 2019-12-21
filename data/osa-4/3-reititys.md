---
path: '/osa-4/3-reititys'
title: 'Reititys'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- osaat kuvata reitityksen periaatteellisella tasolla
- osaat muutaman keskeisen reititysalgoritmit ja osaat laatia tarvittavat reititystaulut näitä algoritmeja käyttäen

</text-box>


*Tee luento näistä. *

##  Reititys ja reititysalgoritmit

Reitittimet käyttävät reititystauluja pakettien edelleenlähetykseen. Jotta reititystaulut pysyvät hyödyllisinä verkon arkkitehtuurin muuttuessa niitä pitää päivittää. Reitittimen oman reititystaulun päivittäminen on reitittimen vastuulla.  Koko verkon reittien suunnittelu eli reititys voidaan tehdä keskitetysti, jolloin reititin saa valmiin reititystaulun, jonka sen sitten ottaa käyttöön. Tällainen keskitetty reittien laskenta sopii erityisesti staattiseen reititykseen, jolloin reititys päätetään ennalta ja se ei sitten enää muutu. Toki sitä voidaan käyttää dynaamisemmin, jolloin keskitetyst lasketaan aika ajoni uudet reitit ja päivitetään ne reitittimille. Reititin käyttää sitten näitä reittejä, kunnes ne joskus päivitetään sille. Reitittimen näkökulmasta tämä on hyvin staattista reititystä, koska se vain noudattaa saamansa reititystaulua eikä tee siihen muutoksia. Nykyisessä internetissä kaikkien reittien laskeminen keskitetysti veisi aivan liian paljon aikaa, jolloin reittimuutokset tapahtuisivat todella hitaasti. Nopeampi reititystaulujen päivitys onnnistuu vain hajautettuilla ja dynaamisilla reititysalgoritmeilla. Nämä algoritmit ovat hajautettuja, koska kaikki saman verkon reitittimet suorittavat kyseistä algoritmia ja vaihtavat tietoa (eli reititystauluja) toistensa kanssa. Ne ovat dynaamisia, koska reitittimet itse päivittävät oman reititystaulunsa.

Reititys voidaan suunnitella myös hierarkisesti, siten että aliverkkojen (eli autonomisten alueiden) välinen reititys suunnitellaan tai sovitaan erikseen tähän sopivalla menetelmällä, joka internetissä on [Boarder Gateray Protocol](https://fi.wikipedia.org/wiki/BGP) (BGP).  Aliverkojen oma, sisäinen reititys on aliverkon oma asia ja se voidaan tehdä millä tahansa aliverkolle sopivalla tavalla. Internetissä tyypilliset verkon sisäiset reititysprotokollat ovat [Routing Information Protocol](https://fi.wikipedia.org/wiki/Routing_Information_Protocol) (RIP) ja [Open Shortest Path First](https://fi.wikipedia.org/wiki/OSPF) (OSPF). 

Jätämme nuo internetin varsinaiset reititysalgoritmit myöhemmille kursseilla. Tutustutaan nyt kahteen reititysalgoritmiin, joita ainakin osa protokollista käyttää. Nämä eroavat toisistaan erityisesti siinä miten kattavan tiedon verkosta ja linkkien kustannuksista eli solmujen etäisyyksistä ne tarvitsevat.  Linkkitila-algoritmi (engl. link state algorithm)  tarvitsee täydellisen tiedon verkon rakenteesta kun taas etäisyysvektorialgoritmille (engl- distance vectora algorithm) riittää epätäydellinen kuva verkosta. 

Verkkoja ja verkkoalgoritmeja käsitellään laajemmin tietorakenteet ja algoritmit -kurssilla.

Algoritmien näkökulmasta verkko on sellainen tietorakenne, joka sisältää solmuja ja niiden välisiä yhteyksiä eli linkkejä. Tämä voidaan merkitä G=(N,E), missä G on verkko eli graafi, N on solmujen (engl. node) joukko ja E on linkkien (engl. edge) joukko. Lisäksi merkitään, että c(x,y) on solmujen x ja y välisen linkin kustannus (engl. cost). Linkin kustannus voi olla sen nopeus, kaistanleveys, ruuhkaisuus, rahallinen hinta linkin käytöstä, tai jotain muuta, jolla on numeerinen arvo. Näissä esimerkeissä linkin kustannus on siirron kesto tai hinta kyseisen linkin kautta.

Reititysalgoritmin tavoitteena on siis löytää nopeimmat tai halvimmat reitit solmujen välille. Reitti voi kulkea muiden solmujen kautta, kunhan se kokonaiskustannus on mahdollisista reiteistä pienin.

Käydään näiden algoritmien toiminta läpi esimerkin avulla.

KUVA: Piirrä kuva ja vaihtoehtoiseen tekstiin solmut, linkit ja niiden kustannukset.

## Linkkitila-algoritmi




## Etäisyysvektorialgoritmi



