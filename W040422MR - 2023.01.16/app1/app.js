const http = require("http");
const homePageHTML = require("./pages/home");

// console.log(http.METHODS);
// console.log(http.STATUS_CODES);

const server = http.createServer(/*(req, res) => {}*/);
server.on("request", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);

  if (req.method === "GET" && req.url === "/home") {
    res.statusCode = 200;
    res.setHeader("response-time", new Date().toISOString());
    res.setHeader("from-server", "hello");

    res.write(homePageHTML);

    res.end();

    return;
  }

  res.statusCode = 404;
  res.setHeader("response-time", new Date().toISOString());
  res.setHeader("from-server", "hello");

  res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>hello from server</title>
    
            <style>
            h1 {
                color: red;
            }
            </style>
        </head>
        <body>
            <h1>404 NOT FOUND</h1>
        </body>
        </html>
    `);

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
