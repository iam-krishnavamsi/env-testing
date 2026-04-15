import http from "http";

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Web service running");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
