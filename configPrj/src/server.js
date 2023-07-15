// const {renderToPipeableStream} = require('react-dom/server');
// const express = require('express');

// const app = express()

// app.use('/', (request, response) => {
//   const { pipe } = renderToPipeableStream('<div>App2</div>', {
//     onShellReady() {
//       response.setHeader('content-type', 'text/html');
//       pipe(response);
//     }
//   });
// }).listen(3000, (err) => { console.log(`App Listen to port ${3000}`) })



const { renderToStaticMarkup } = require('react-dom/server');
const express = require('express');
const app = express()

app.use('/', (req, res) => {
  const html = renderToStaticMarkup('<div>AAppAApp</div>');
  res.send(html);
}).listen(3000, (err) => { console.log(`App Listen to port ${3000}`) })
