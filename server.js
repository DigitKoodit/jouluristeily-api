const Hapi = require('hapi');

const mockData = {
  timeStamp: "0",
  events: {
    alkumalja: {
      name: 'Alkumalja',
      time: '1212321',
      duration: '3600000',
      description: 'Jotakin maljaa jotakin'
    },
    tapahtumaKaksi: {
      name: 'Toinen tapahtuma',
      time: '12321321',
      duration: '10',
      description: 'Tapahtuma 2 tapahtuu'
    }
  }
}

function runServer(){
  const server = new Hapi.Server();

  server.connection({
    host: 'localhost',
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

  server.start((err) => {
    if(err) throw err;
    console.log('Server running at:', server.info.uri);
  });
}

runServer();