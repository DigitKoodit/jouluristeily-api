const Hapi = require('hapi');

const times = {
  time2000: 1480615200000,
  time2015: 1480616100000,
  time2030: 1480617000000,
  time2100: 1480618800000,
  time2115: 1480619700000,
  time2130: 1480620600000,
  time2200: 1480622400000,
  time2215: 1480623300000,
  time2230: 1480624200000,
  time2300: 1480626000000,
  time2315: 1480626900000,
  time2400: 1480629600000,
  time0015: 1480630500000,
  time0030: 1480631400000,
  time0100: 1480633200000,
  time0200: 1480636800000,
  time0130: 1480635000000,
  time0430: 1480645800000,
  time0500: 1480647600000,
  time0600: 1480651200000,
  time0800: 1480658400000,
  time0900: 1480662000000,
  time1000: 1480665600000,
  time1100: 1480669200000,
  time1200: 1480672800000,
  time1230: 1480674600000,
  time1245: 1480675500000,
  time1300: 1480676400000,
  time1330: 1480678200000,
  time1400: 1480680000000,
  time1430: 1480681800000,
  time1500: 1480683600000,
  time1530: 1480685400000,
  time1600: 1480687200000,
  time1645: 1480689900000,
  time1715: 1480691700000,
  time1730: 1480692600000,
  time1800: 1480694400000,
  time1830: 1480696200000,
  time1900: 1480698000000
}

const mockData = {
  iteration: 1,
  events: [
     {
      name: 'Lähtö',
      startTime: times.time2015,
      endTime: false,
      description: 'Baltic Princess lähtee Turusta ja ravintolat aukeavat'
    },
    {
      name: 'Pianisti Piano Barissa',
      startTime: times.time2015,
      endTime: times.time2300,
      description: 'Pianisti Stenly soittaa Piano Barissa (Kansi 7)'
    },
    {
      name: 'Tervetulotilaisuus',
      startTime: times.time2100,
      endTime: times.time2215,
      description: 'Tervetulotilaisuus Starlight Palacessa. Arvonnassa huikeat palkinnot (esim. hytti-päivitys suiteksi, risteilylahjakortin, kurkunkostuketta!) komiikkaa tarjolla, sirkus, mahtava juontaja-duo vauhdittaa fiilistä. Be here or be circle! (Kansi 6 ja 7)'
    },
    {
      name: 'Trubaduuri Pubissa',
      startTime: times.time2115,
      endTime: times.time2400,
      description: 'Trubaduuri Vaakku viihdyttää Pubissa (Kansi 7)'
    },
    {
      name: 'Karaoke Iskelmäbaarissa',
      startTime: times.time2130,
      endTime: times.time2400,
      description: 'Karaokea iskemäbaarissa kannella 6.'
    },
    {
      name: 'Bilebändi Starlight Palacessa',
      startTime: times.time2215,
      endTime: times.time2300,
      description: 'Starlightissa tunnelmaa nostaa bilebändi Kalja&Bylsintä, joka myös Hybridispeksissä on mainetta niittänyt. (Kansi 6 ja 7)'
    },
    {
      name: 'NHL17-kisa Pubissa',
      startTime: times.time2300,
      endTime: times.time0100,
      description: 'NHL17-skabailua Pubissa (Kansi 7)'
    },
    {
      name: 'Joku Paikallinen Bändi Starlightissa',
      startTime: times.time2315,
      endTime: times.time0015,
      description: 'Joku Paikallinen Bändi buustaa fiilistä Starlight Palacessa (Kansi 6 ja 7)'
    },
    {
      name: 'DJ Eki Klubilla',
      startTime: times.time2315,
      endTime: times.time0430,
      description: 'DJ Eki starttaa bileet Klubilla (Kansi 10)'
    },
    {
      name: 'Pomppupalloturnajaiset',
      startTime: times.time2400,
      endTime: times.time0015,
      description: 'Pomppupalloturnajaiset keula-aulassa (Kansi 5)'
    },
        {
      name: 'Portion Boys Starlightissa',
      startTime: times.time0030,
      endTime: times.time0130,
      description: 'Ultimaattinen meno räjähtää Starlightissa: Portion Boys nousee lavalle! (Kansi 6 ja 7)'
    },
    {
      name: 'Boatsinkers Starlightissa',
      startTime: times.time2400,
      endTime: times.time0015,
      description: 'DJ-koalitio Boatsinkers vetää bileet äärimmilleen ja nupit kaakkoon Starlight Palacessa (Kansi 6 ja 7)'
    },
    {
      name: 'YouTube-korneri',
      startTime: times.time1100,
      endTime: times.time1200,
      description: 'Paluupäivän aloittaa Pianobaarissa uutuusohjelma: Youtube-korneri (Kansi 7)'
    },
    {
      name: 'Musavisa Iskelmäbaarissa',
      startTime: times.time1200,
      endTime: times.time1230,
      description: 'Musavisa Iskelmäbaarissa kannella 6'
    },
    {
      name: 'NHL17-kisa Pubissa',
      startTime: times.time1200,
      endTime: times.time1500,
      description: 'NHL17-skabailut jatkuu ja Beer pongia tarjolla Pubissa (Kansi 7)'
    },
    {
      name: 'Pianisti Piano Barissa',
      startTime: times.time1200,
      endTime: times.time1245,
      description: 'Pianisti Stenly soittaa Piano Barissa (Kansi 7)'
    },
    {
      name: 'Super Jackpot Bingo Iskelmäbaarissa',
      startTime: times.time1230,
      endTime: times.time1330,
      description: 'Super Jackpot Bingo Iskelmäbaarissa (Kansi 6)'
    },
    {
      name: 'Rastikierros',
      startTime: times.time1400,
      endTime: times.time1600,
      description: 'Jouluristeilyn ultimaattinen rastikierros. Kerää joukkue, osallistu ja voita! Lähtö Piano Barista (Kansi 7)'
    },
    {
      name: 'Karaokea Iskelmäbaarissa',
      startTime: times.time1400,
      endTime: times.time1800,
      description: 'Karaokea ilmoille iskelmäbaarissa kannella 6'
    },
    {
      name: 'Trubaduuri Pubissa',
      startTime: times.time1500,
      endTime: times.time1645,
      description: 'Trubaduuri Vaakku viihdyttää Pubissa (Kansi 6)'
    },
    {
      name: 'Joku Paikallinen Bändi Starlightissa',
      startTime: times.time1530,
      endTime: times.time1715,
      description: 'Bilebändi Joku Paikallinen Bändi nostaa paluupäivän tunnelmaa Starlight Palacessa (Kansi 6 ja 7)'
    },
    {
      name: 'Pianisti Piano Barissa',
      startTime: times.time1645,
      endTime: times.time1730,
      description: 'Pianisti Stenly soittaa Piano Barissa (Kansi 7)'
    },
    {
      name: 'Rastikierroksen Palkintojenjako',
      startTime: times.time1715,
      endTime: times.time1730,
      description: 'Jouluristeilyn rastikierroksen palkintojenjako Starlightissa (Kansi 6 ja 7)'
    },
    {
      name: 'DJ Eki Starlightissa',
      startTime: times.time1730,
      endTime: times.time1830,
      description: 'DJ Eki ottaa viimeiset irti risteilykansasta Starlight Palacessa (Kansi 6 ja 7)'
    }
  ]
}

const openingHours = {
  iteration: 1,
  hours: [
    {
      name: 'Tax Free',
      deck: '6',
      category: 'Ostokset',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time2230
        },
        {
          startTime: times.time0900,
          endTime: times.time1330
        },
        {
          startTime: times.time1430,
          endTime: times.time1900
        }
      ]
    },
    {
      name: 'Tobacco',
      deck: '6',
      category: 'Ostokset',
      times: [
        {
          startTime: times.time2030, 
          endTime: times.time2230
        },
        {
          startTime: times.time1000,
          endTime: times.time1900
        }
      ]
    },
    {
      name: 'Perfumes & Cosmetics',
      deck: '6',
      category: 'Ostokset',
      times: [
        {
          startTime: times.time2030, 
          endTime: times.time2230
        },
        {
          startTime: times.time1000,
          endTime: times.time1830
        }
      ]
    },
    {
      name: 'Starlight Palace',
      deck: '6-7',
      category: 'Baarit',
      times: [
        {
          startTime: times.time2100, 
          endTime: times.time0430
        },
        {
          startTime: times.time1430,
          endTime: times.time1830
        }
      ]
    },
    {
      name: 'Iskelmäbaari',
      deck: '6',
      category: 'Baarit',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time2400
        },
        {
          startTime: times.time0900,
          endTime: times.time1830
        }
      ]
    },
    {
      name: 'Pubi',
      deck: '7',
      category: 'Baarit',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time0200
        },
        {
          startTime: times.time1200,
          endTime: times.time1900
        }
      ]
    },
    {
      name: 'Piano Bar',
      deck: '7',
      category: 'Baarit',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time0030
        },
        {
          startTime: times.time1100,
          endTime: times.time1830
        }
      ]
    },
    {
      name: 'Klubi',
      deck: '10',
      category: 'Baarit',
      times: [
        {
          startTime: times.time2300, 
          endTime: times.time0430
        }
      ]
    },
    {
      name: 'Buffet',
      deck: '7',
      category: 'Ravintolat',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time2200
        },
        {
          startTime: times.time2230, 
          endTime: times.time2400
        },
        {
          startTime: times.time0600, 
          endTime: times.time1100
        },
        {
          startTime: times.time1400, 
          endTime: times.time1600
        }
      ]
    },
    {
      name: 'Grill House',
      deck: '7',
      category: 'Ravintolat',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time2300
        },
        {
          startTime: times.time0800, 
          endTime: times.time1100
        },
        {
          startTime: times.time1300, 
          endTime: times.time1730
        }
      ]
    },
    {
      name: 'Katarina\'s Kitchen',
      deck: '7',
      category: 'Ravintolat',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time2300
        },
        {
          startTime: times.time0800, 
          endTime: times.time1100
        },
        {
          startTime: times.time1300, 
          endTime: times.time1730
        }
      ]
    },
    {
      name: 'Cafeteria',
      deck: '6',
      category: 'Ravintolat',
      times: [
        {
          startTime: times.time2015, 
          endTime: times.time0500
        },
        {
          startTime: times.time0600, 
          endTime: times.time1900
        }
      ]
    },
    {
      name: 'Saunaosasto',
      deck: '2',
      category: 'Muut',
      times: [
        {
          startTime: times.time2000, 
          endTime: times.time2300
        },
        {
          startTime: times.time0800, 
          endTime: times.time1800
        }
      ]
    },
    {
      name: 'Loimun ständi',
      deck: '6',
      category: 'Muut',
      times: [
        {
          startTime: times.time2200, 
          endTime: times.time2400
        },
        {
          startTime: times.time1200, 
          endTime: times.time1600
        }
      ]
    }
  ]
}

function runServer(){
  const server = new Hapi.Server();

  server.connection({
    port: process.env.PORT || 8080
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('There is nothing here. :)');
    }
  });

  server.route({
    method: 'GET',
    path: '/events',
    handler: (request, reply) => {
      reply(mockData);
    }
  });

  server.route({
    method: 'GET',
    path: '/openingHours',
    handler: (request, reply) => {
      reply(openingHours);
    }
  });

  server.start((err) => {
    if(err) throw err;
    console.log('Server running at:', server.info.uri);
  });
}

runServer();