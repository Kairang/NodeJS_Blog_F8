const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 8888;

app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// HTML logger
app.use(morgan('combined'));

// Template Engine - general config
app.engine('hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
/* get method */
app.get('/', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('news'));
app.get('/login', (req, res) => res.render('login'));

/* post method */
app.post('/login', (req, res) => {
    console.log(req.body)

    res.send('success')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})