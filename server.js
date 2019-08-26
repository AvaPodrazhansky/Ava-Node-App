// const express = require('express')
// const app = express()
// const path = require('path')
// const PORT = process.env.PORT || 5000

// // import page1 from './public/pages/page1';

// app.use(express.static(path.join(__dirname, 'public')))
// // app.set('view engine', 'html')
// // app.get('/', (req, res) => res.render('index'))
// // app.get('/page2', (req, res) => res.render('page2'))

// app.listen(PORT, () => console.log('Running on port ' + PORT))

//Don't use this
// const express = require('express')
// const app = express()
// const path = require('path')
// const PORT = process.env.PORT || 5000
// const rotues = require('public/routes')
// // import page1 from './public/pages/page1';

// app.use('/', routes)
// // app.set('view engine', 'html')
// // app.get('/', (req, res) => res.render('index'))
// // app.get('/page2', (req, res) => res.render('page2'))

// app.listen(PORT, () => console.log('Running on port ' + PORT))

// const express = require('express')
// const app = express()
// const path = require('path')
// const PORT = process.env.PORT || 5000

// app.set('views', __dirname + '/public/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// var engines = require('consolidate');

// app.engine('html', engines.mustache);
// app.set('view engine', 'html')

// // app.get('/', function (req, res) {
// //     res.render(path.join(__dirname + '/public/index'));
// // });

// // app.use(express.static(path.join(__dirname, 'public')))
// app.use('/', function (req, res, next) {
//     res.render(path.join(__dirname, 'public'));
// })

// app.listen(PORT, () => console.log('Running on port ' + PORT))


const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

// import page1 from './public/pages/page1';

app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send()
});

app.get('/page2',function(req, res) {
    res.sendFile(__dirname + '/public/pages/page2/page2.html');
    // res.send()
    // res.send("You made it to page 1!");
});


app.listen(PORT, () => console.log('Running on port ' + PORT))