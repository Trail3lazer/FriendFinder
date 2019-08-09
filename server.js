var express = require('express')
var app = express()
var path = require('path')
var PORT = process.env.PORT || 10000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app, path)
apiRoutes(app, path)

app.listen(PORT)
console.log("Server listening on: http://localhost:" + PORT);