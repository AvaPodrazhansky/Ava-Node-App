const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
// app.set('view engine', 'html')
// app.get('/', (req, res) => res.render('index'))
// app.get('/page2', (req, res) => res.render('page2'))

app.listen(PORT, () => console.log('We Gucci'))
