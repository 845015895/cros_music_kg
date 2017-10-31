var express = require('express');
var router = express.Router();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
/* GET home page. */
router.post('/', function (req, res, next) {

});

module.exports = router;
