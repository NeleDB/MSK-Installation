'use strict';

module.exports.register = (server, options, next) => {
  const io = require(`socket.io`)(server.listener);
  let clients = []; //lege array om je clients (users) in te zetten


  io.on(`connection`, socket => {

    socket.emit(`init`, clients);

    socket.on(`newUser`, () => {
      const client = {id: socket.id};
      clients.push(client);
      console.log(clients);
      socket.broadcast.emit(`join`, client);
      socket.emit(`usersAmount`, clients.length);
    });

    socket.emit(`usersAmount`, clients.length);

    socket.on(`disconnect`, () => {
      clients = clients.filter(u => u.socketId !== socket.id);
      socket.broadcast.emit(`leave`, socket.id);
        //iedereen behalve zichtzelf : broadcast
    });

    socket.on(`userAnswer`, obj => {
      console.log(obj);
      const {id, answer} = obj;
      console.log(id);
      console.log(answer);
      io.emit(`handleAnswer`, answer);
    });


  });

  //next is aantonen dat hij verder mag gaan
  next();
};

module.exports.register.attributes = {
  name: `socketPlugin`,
  version: `0.1.0`
};
