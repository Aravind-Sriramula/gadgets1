const express = require("express");
const app = express();
app.listen(3000);

app.get("/gadgets", (_request, response) => {
  console.log("locoalhost is running");
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = app;
