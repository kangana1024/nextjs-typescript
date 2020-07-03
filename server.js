const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();


    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, 'localhost', (err) => {
      if (err) throw err;
      console.log('> Ready On Server')
    });
  })
  .catch((ex) => {
    console.log(ex);
    process.exit(1);
  })