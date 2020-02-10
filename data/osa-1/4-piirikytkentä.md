---
path: "/osa-1/4-piirikytkentä"
title: "Pakettikytkentä vs piirikytkentä"
---
<text-box variant='learningObjectives' name='Oppimistavoitteet'>

* Osaat kuvata pakettikytkennän ja piirikytkennän sekä niiden väliset keskeiset erot

</text-box>

## Piirikytkentä ja pakettikytkentä

Pakettikytkentäinen verkkoratkaisu on jo tuttu. Siinä viestit rakennetaan paketeiksi, jotka kulkevat itsenäisesti lähettäjältä vastaanottajalta etappi kerrallaan. Tällaista etappivälitteistä verkkoa kutsutaan englanniksi termillä store-and-forward, koska verkon sisäiset solmut vastaanottavat paketin, tallettavat sen hetkiseksi ja vasta sitten lähettävät sen edelleen.

Verkko voidaan myös toteuttaa piirikytkentäisenä, jolloin aina lähettäjän ja vastaanottajan välille varataan 'kiinteä' yhteys koko kommunikoinnin keston ajaksi. Tällainen verkon toteutus oli (ja on) käytössä erilaisissa langallisissa telex- ja puhelinverkoissa. Lähettäjän täytyy siis varata polun kaikki linkit, joita pitkin viestit sitten kulkevat lähettäjältä vastaanottajalle. Jos yhteys varataan kaksisuuntaisena (engl. full-duplex), niin myös vastaukset kulkevat tätä samaa yhteyttä pitkin. Yhteys voi olla myös yksisuuntainen (engl. half-duplex), jolloin jos vastaanottajalla on tarve lähettää viesti alkuperäiselle lähettäjälle, sen täytyy varata oma yhteys näiden kahden solmun välille.

Piirikytkentäisessä verkossa paketit eivät voi kärsiä ruuhkasta, koska niille on varattu oma yhteys, jota ei jaeta muiden kanssa (engl. no sharing). Jos verkko on täynnä, niin lähettäjä ei voi muodostaa yhteyttä eikä pääse lainkaan lähettämään, mutta kun yhteys on muodostettu, niin liikennöinti sen sisällä etenee sujuvasti. Piirikytkentäinen verkko takaa siis tasaisen siirtonopeuden koko reitille.

Toisaalta, koska reitti varataan koko yhteyden ajaksi, on reitti varattuna myös silloin kun lähettäjällä ei ole mitään lähetettävää. Resurssi on siis varattuna tälle lähettäjälle, vaikka sitä ei käytetä. Näin 'hukataan' verkon resursseja, koska joku muu saattaisi haluta lähettää juuri tuolla hetkellä.

Yksittäinen linkki voidaan jakaa useampaan kanavaan, jolloin varausvaiheessa yhdelle yhteydelle varataan vain yksi kanava eikä koko linkkiä. Tätä kutsutaan kanavoinniksi (engl. multiplexing). Jokainen yhteys varaa käyttöönsä yhden tai useamman kanavan, ja saa näin kiinteän osan koko linkin kapasiteetista. Muut kanavat voidaan samanaikaisesti varata käyttöönsä muita kanavia. (TODO viimeinen lause)

Linkin kanavointi voidaan tehdä joko taajuusjakona (engl. frequency-division multiplexing, FDM), aikajakona (time-division multiplexing , TDM) tai niiden yhdistelmänä.

Koska pakettikytkentäisessä verkossa ei varata yhteyttä varmuuden vuoksi, sallii se enemmän samanaikaisia "yhteyksiä". Käydään tätä eroa läpi esimerkin avulla. Oletetaan, että linkin nopeus on 100 megabittiä sekunnissa ja että jokainen käyttäjä haluaa käyttöönsä
10 megabittiä sekunnissa kun aktiivisena eli kun käyttäjä lähettää tai vastaanottaa. Piirikytkentäisessä verkossa voi olla vain 10 käyttäjää samaan aikaan, kun pakettikytkentäisen verkon arvioidaan kestävän noin 35 käyttäjää.  Tämä luku 35 voidaan laskea matemaattisesti [binomijakauman](https://fi.wikipedia.org/wiki/Binomijakauma) kertymäfunktiosta. Kun otoskoko N (eli käyttäjien määrä) on 35, on todennäköisyys, että niistä yli 10 on aktiivisia samanaikaisesti, lähes nolla.

XXXXXXX  TARKISTA tuo yllä oleva väite!!!!


QUIZZ:



KUVA:  Linkin jako kanaviin aikajakona ja taajuusjakona (katso kalvo 2017, luento 1, 28).


