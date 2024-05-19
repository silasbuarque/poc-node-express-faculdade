const express = require('express')
const bodyParser = require('body-parser')
const { NOMEM } = require('dns')
const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    res.render(req.body.nome)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})