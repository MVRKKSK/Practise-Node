const http = require("http");

const server = http.createServer((req, res) => {
    console.log("server is running");
});

server.listen(3000 , () => {
    console.log("this server is running at port 3000")
})