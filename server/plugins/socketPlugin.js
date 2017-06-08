'use strict';

module.exports.register = (server, options, next) => {
  const io = require(`socket.io`)(server.listener);
  let clients = []; //lege array om je clients (users) in te zetten

  //dit stuk is voor als een persoon weggaat)
  io.on(`connection`, socket => {
    socket.on(`disconnect`, () => {
      clients = clients.filter(c => c.socketid !== socket.id);
      socket.broadcast.emit(`leave`, socket.id);
    });

    //client/user toevoegen aan de clients array
    const client = {id: socket.id};
    clients.push(client);

    //init is wat hij doet bij opstarten
    socket.emit(`init`, clients);
    socket.broadcast.emit(`join`, client);
  });

  //next is aantonen dat hij verder mag gaan
  next();
};

module.exports.register.attributes = {
  name: `socketPlugin`,
  version: `0.1.0`
};
