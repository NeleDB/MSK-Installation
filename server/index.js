const path = require(`path`);
const log = true;

require(`dotenv`).load({silent: true});

const {
  PORT = 3000,
  URL = `http://localhost`
} = process.env;

const Server = require(`hapi`).Server;

const server = new Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, `public`)
      }
    }
  }
});

server.connection({port: PORT});

server.start(err => {

  if (err) return console.error(err);

  console.log(``);
  console.log(`Server running at: ${URL}:${PORT}`);

  server.register({

    register: require(`hapi-devine-autoload`),

    options: {

      path: path.join(__dirname, `plugins`),
      log,

      plugins: [
        `hapi-devine-routes`,
        `inert`
      ],

      pluginOptions: {

        'hapi-devine-routes': {
          log,
          path: path.join(__dirname, `routes`)
        },

      }

    }

  }, error => {
    if (error) return console.error(error);
  });

});
