/**
 * @Kairang NodeJs 05/04/2023
 * @returns news route
 */

const newsRouter = require('./news.route');
const siteRoute = require("./site.route");

function route(app) {

    app.use('/news', newsRouter);
    app.use('/', siteRoute);

}

module.exports = route;
