const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))


app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send()
});

app.get('/page2',function(req, res) {
    res.sendFile(__dirname + '/public/pages/page2/page2.html');
    // res.send()
});


app.listen(PORT, () => console.log('Running on port ' + PORT))