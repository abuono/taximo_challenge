const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const fileURLToPath = require('url');
const { authToken } = require('./middlewares/auth');

const app = express();

const PORT = process.env.PORT || 3000;


// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }))

// Home routes
app.use('/', require('./routes/pag.routes'))

// Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
// Routes
//app.get('/', (req, res) => res.render('home'))

// Views
//app.engine('ejs',)
app.set('view engine', 'ejs');


// Routes API
app.use([authToken]);
app.use('/api/v1/', require('./routes/calc.routes'));

app.listen(PORT, () => {
    console.log('Servidor listo');
});