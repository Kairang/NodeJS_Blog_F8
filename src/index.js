const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const methodOverride = require('method-override');

const app = express();
const port = 8888;

const db = require('./config/db');

// Conect to DB
db.conect();

app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// HTML logger
app.use(morgan('combined'));

// method Override
app.use(methodOverride('_method'));

// Template Engine - general config
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        formatDate: (date) => new Date(date).toLocaleDateString(),
    }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
route(app);

/* post method */
// app.post('/login', (req, res) => {
//     console.log(req.body)

//     res.send('success')
// });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})