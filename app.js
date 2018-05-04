/**
 * Created by ryp on 1/31/16.
 */
var express = require('express');
var app = express();
app.use(express.static('www'));//static file

var server = app.listen(8083, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});