const Hapi = require('hapi');

const times = {
  time2015: 1480616100000,
  time2100: 1480618800000,
  time2115: 1480619700000,
  time2130: 1480620600000,
  time2215: 1480623300000,
  time2300: 1480626000000,
  time2315: 1480626900000,
  time2400: 1480629600000,
  time0015: 1480630500000,
  time0030: 1480631400000,
  time0100: 1480633200000,
  time0130: 1480635000000,
  time0430: 1480645800000,
  time1100: 1480669200000,
  time1200: 1480672800000,
  time1230: 1480674600000,
  time1245: 1480675500000,
  time1330: 1480678200000,
  time1400: 1480680000000,
  time1500: 1480683600000,
  time1600: 1480687200000,
  time1730: 1480692600000,
  time1800: 1480694400000,
  time1830: 1480696200000
}

const mockData = {
  timeStamp: "0",
  events: [
     {
      name: 'Lähtö',
      startTime: times.time2015,
      endTime: false,
      description: 'Baltic Princess lähtee Turusta ja ravintolat aukeavat'
    },
    {
      name: 'Pianisti Piano Barissa',
      time: times.time2015,
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
      time: times.time2115,
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
      time: times.time2215,
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
      time: times.time2315,
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
      time: times.time2400,
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
      time: times.time0000,
      endTime: times.time0015,
      description: 'DJ-koalitio Boatsinkers vetää bileet äärimmilleen ja nupit kaakkoon Starlight Palacessa (Kansi 6 ja 7)'
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
    path: '/open',
    handler: (request, reply) => {
      reply(mockData);
    }
  });

  server.start((err) => {
    if(err) throw err;
    console.log('Server running at:', server.info.uri);
  });
}

runServer();