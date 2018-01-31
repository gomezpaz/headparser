
// init project
var express = require('express');
var app = express();

app.get("/api/whoami", function (req, res) {
  var ipaddress = req.headers['x-forwarded-for'].split(',')[0]
  var language = req.headers['accept-language'].split(',')[0]
  // regExp to only get first betwwen parentheses string
  var regExp = /\(([^)]+)\)/
  var software = regExp.exec(req.headers['user-agent'])[1] 
  res.send({"ipaddress": ipaddress, "language": language, "software": software})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
