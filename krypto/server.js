const express = require('express')
const app = express()
const port = 8080
var path = require('path');


app.use(express.static('page'));


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'page','index.html'));
})


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })  