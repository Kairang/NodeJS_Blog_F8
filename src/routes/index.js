/**
 * @Kairang NodeJs 05/04/2023
 * @returns news route
 */

const newsRouter = require('./news.route');
const siteRouter = require("./site.route");
const coursesRouter = require('./courses.route');
const meRouter = require('./me.route');

// Rest api routes for bookstote
const bookRouter = require('./bookstore/books.route');
const authorRouter = require('./bookstore/authors.route');

function route(app) {

    app.use('/api/v1/authors', authorRouter);
    app.use('/api/v1/books', bookRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);

}

module.exports = route;
