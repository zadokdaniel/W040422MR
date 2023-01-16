const http = require("http");

const pages = {
  "/home": require("./pages/home"),
  "/about": require("./pages/about"),
  "/sdkfjs": require("./pages/home"),
  "*": require("./pages/404"),
};


async function requestHandler(req, res) {
  console.log(new Date().toLocaleTimeString(), req.method, req.url);

  res.setHeader("Content-Type", "text/html");

  if (req.method === "GET" && req.url in pages) {
    res.end(pages[req.url]);
    return;
  }

  res.statusCode = 404;
  res.end(pages["*"]);
}

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, () => console.log(`running on port ${PORT}`));
