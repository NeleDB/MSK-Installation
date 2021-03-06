'use strict';

module.exports.register = (server, options, next) => {
  const io = require(`socket.io`)(server.listener);
  let clients = []; //lege array om je clients (users) in te zetten


  io.on(`connection`, socket => {

    socket.emit(`init`, clients);

    socket.on(`newUser`, () => {
      const client = {id: socket.id};
      clients.push(client);
      socket.broadcast.emit(`join`, client);
      socket.emit(`usersAmount`, clients.length);
    });

    socket.emit(`usersAmount`, clients.length);

    socket.on(`disconnect`, () => {
      console.log(clients);
      clients = clients.filter(u => u.socketId !== socket.id);
      console.log(clients);
      socket.broadcast.emit(`leave`, socket.id);
      // clients.length -= 1;
        //iedereen behalve zichtzelf : broadcast
    });

    socket.on(`userAnswer`, answer => {
      io.emit(`handleAnswer`, answer);
    });

    socket.on(`checkTotalAnswers`, () => {
      io.emit(`handleTotal`);
    });

    socket.on(`again`, () => {
      clients = [];
    });

  });

  //next is aantonen dat hij verder mag gaan
  next();
};

module.exports.register.attributes = {
  name: `socketPlugin`,
  version: `0.1.0`
};
