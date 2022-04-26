const path = require("path");
const express = require("express");
const app = express();
//const distPath = "/dist/interest-bank";
//const distPath = "/angular-httpclient-app/dist/angular-httpclient-app";
const distPath = "/dist/google-trends";

app.use(express.static(__dirname + distPath));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, distPath, "index.html"));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
