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

Toisaalta, koska reitti varataan koko yhteyden ajaksi, on reitti varattuna myös silloin, kun lähettäjällä ei ole mitään lähetettävää. Resurssi on siis varattuna tälle lähettäjälle, vaikka sitä ei käytetä. Näin 'hukataan' verkon resursseja, koska joku muu saattaisi haluta lähettää juuri tuolla hetkellä.

Yksittäinen linkki voidaan jakaa useampaan kanavaan, jolloin varausvaiheessa yhdelle yhteydelle varataan vain yksi kanava eikä koko linkkiä. Tätä kutsutaan kanavoinniksi (engl. multiplexing). Jokainen yhteys varaa käyttöönsä yhden tai useamman kanavan, ja saa näin kiinteän osan koko linkin kapasiteetista. Muut yhteydet voidaan samanaikaisesti varata käyttöönsä muita kanavia.

Linkin kanavointi voidaan tehdä joko taajuusjakona (engl. frequency-division multiplexing, FDM), aikajakona (time-division multiplexing, TDM) tai niiden yhdistelmänä.

Näistä voidaan piirtää havainnekuva x-y akselistoon, kun x akselilla on aika ja y akselilla taajuus. Taajuusjaossa jaamme y-akselin pienempiin osiin ja jokainen osa (eli kanava) on käytettävissä millä tahansa ajanhetkellä. Ne muodostavat havainnekuvaan vaakasuorat kanavat yli ajan. Jokainen kanava voidaan varata toisistaan riippumattomasti. Solmut siis varaavat yhden (tai useamman) kanavan käyttöönsä. Solmuja on kuvassa merkitty eri väreillä. Vastaavasti aikajaossa jaamme x-akselilla olevan ajan pienempiin osiin, jolloin tiettynä aikana kaikki taajuudet ovat yhden kanavan käytössä. Näin saamme pystysuoria kanavia (joissa on siis kaikki taajuudet, mutta rajoitettu aikaviipale). Nytkin voimme värittää eri kanavat eri solmuille. Aikajaossa on huomioitava, että kanavien varaukset toistuvat samassa järjestyksessä tietyn ajanjakson jälkeen.  (Jos yhdistäisimme aikajaon ja taajuusjaon samaan x-y-kuvaan, niin silloin meillä olisi matriisi kanavista, jotka olisi rajoitettu sekä taajuuden että ajan mukaan. Yksi väri kuvastaisi edelleen yhtä solmua, mutta sille varatut kanavat olisit sikin sokin tässä matriisissa.)

<img src="../img/1-4-aikajako-vs-taajuusjako.svg" alt="">

KUVA:  Linkin jako kanaviin aikajakona ja taajuusjakona.


Koska pakettikytkentäisessä verkossa ei varata yhteyttä varmuuden vuoksi, sallii se enemmän samanaikaisia "yhteyksiä". Esimerkiksi linkillä, jonka nopeus on 100 megabittiä sekunnissa voi olla 10 samanaikaista lähettäjää, jos jokainen lähettäjä haluaa käyttöönsä 10 megabittiä sekunnissa. Koska solmut eivät yleenä lähetä koko aikaa, niin tehdään vielä lisäoletus. Oletaan, että jokainen solmu on aktiivisena 10% ajasta eli minuutin aikana se lähettää dataa noin 6 sekuntia. Piirikytkentäisessä verkossa voi silti olla vain 10 solmua samaan aikaan, koska solmulle varataan sen tarvitsema kapasiteetti (10 Mb/s) koko ajaksi.

Toisaalta on varsin helppo havaita, että jos varaamme solmulle 10 Mb/s:ssa kokonaiseksi minuutiksi ja se käyttää siitä vain 6 sekuntia, niin loput 54 sekuntia jää hukkaan. Pakettikytkentäisessä verkossa tätä hukka-aikaa pyritään pienentämään sillä, että verkossa voi olla useampia solmuja. Toki, jos kaikki haluavat lähettää juuri samalla hetkellä, niin linkki ruuhkautuu pahasti.

Matemaattisesti voidaan arvioida, että pakettikytkentäisen verkon kestäisi noin 35 solmua, ennenkuin linkki ruuhkautuu liian usein. Tämä arvio perustuu siihen, että kun otoskoko N (eli solmujen lukumäärä) on 35, on todennäköisyys, että niistä yli 10 on aktiivisia samanaikaisesti, lähes nolla (tarkasti ottaen se on 0,004). Muista, että 10 samanaikaista ei ole ongelma, koska ne haluavat vain 1/10 osan koko kapasiteestista. Miten tähän tulokseen on päästy? Tulos voidaan laskea [binomijakauman](https://fi.wikipedia.org/wiki/Binomijakauma) kertymäfunktiosta. Binomijakaumaa käsitellään tarkemmin matematiikan ja tilastotieteen opetuksessa. Siksi en käy tällä kurssilla tätä matemaattista perustelua tarkemmin läpi.


<quiz id="2f4e0ca4-2883-51f9-9384-9fce36e7872f"></quiz>







