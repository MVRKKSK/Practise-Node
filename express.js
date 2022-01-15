const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/index.html" , {root : __dirname});
})

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html" , {root : __dirname});
  })

  app.get("/404", (req, res) => {
    res.sendFile("./views/404.html" , {root : __dirname});
  })

app.listen(3001, () => {
    console.log("server is listening on port 3001");
})