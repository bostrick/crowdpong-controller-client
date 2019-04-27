const express = require('express')
const app = express()
const port = 8080

const proxy = require('express-http-proxy')

app.use('/api', proxy('http://api:8080', {
  proxyReqPathResolver: function (req) {
    return '/api' + req.url;
  }
}));

app.use('/board', proxy('http://board:8080', {
  proxyReqPathResolver: function (req) {
    return '/board' + req.url;
  }
}));

app.use(express.static('dist'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
