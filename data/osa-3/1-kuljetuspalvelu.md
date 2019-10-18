---
path: '/osa-3/1-kuljetuspalvelu'
title: 'Kuljetuspalvelun toiminta'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat kuvata kuljetuskerroksen palvelujen toiminnan yleisellä tasolla.
- Tiedät mitä tarkoittavat segmentti ja lomitus. Osaat kertoa mitä ne ovat ja miten lomitus toimii.

</text-box>



## Kuljetuspalvelu

Kuljetuspalvelun tehtävänä on huolehtia sen kuljetettavaksi annettu viesti lähettäjältä vastaanottajalle. Tämän kurssin edellisessä osassa ja aiemmalla kurssilla on jo käytä läpi sovellukerroksen toiveita kuljetuskerrokselle.

QUIZZ: Kertaustehtävä, jolla palautetaan mieleen erilaiset termit palveluun laatuun ja asiakkaan toiveisiin liittyen.

Kuljetuspalvelun keskeinen tehtävä on täyttää sovelluskerroksen toiveet ja vaatimukset, vaikka verkkokerros ei aina tue näitä.

Luotettavan kuljetuspalvelun keskeinen tehtävä on siis piilottaa verkkokerroksen epäluotettavuus sovelluskerrokselta:  
* Sovelluskerros edellyttää kuljetuspalvelulta Virheettömyyttä ja luotettavuutta, mutta verkkokerros voi muuttaa segmentin bittejä tai kadottaa koko segmentin
* sovelluskerros edellyttää järjestyksen säilymistä, mutta verkkokerros voi toimittaa segmentit epäjärjestyksessä
* sovelluskerros edellyttää kaksoiskappaleiden karsimista, mutta vekkokerros voi monistaa segmenttejä eli toimittaa useita kopioita samasta segmentistä
* sovelluskerros edellyttää mielivaltaisen pitkiä sanomia, mutta verkkokerros voi rajoittaa segmentin kokoa
* verkkokerros voi lisäksi viivyttää segmenttejä satunnaisen pitkän ajan, 
        
Kuljetuskerros siis piilottaa verkkokerroksen puutteita ja parantaa sovellukselle näkyvän palvelun laatua. Aivan kaikkea kuljetuskerros ei pysty piilottamaan. Esimerkiksi viestien viivästymiset tai verkkoyhteyden katkeaminen ovat tilanteita, jolloin kuljetuskerros ei pysty välittämään viestejä ja näin ne välttämättä näkyvät myös sovelluskerrokselle. 


Segmenttien lomitus

- esimerkkikuva



<quiz id="45b6aea4-2c5f-404e-9143-23a644ebea63"></quiz>

