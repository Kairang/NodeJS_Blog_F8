/**
 * @Kairang NodeJs 05/04/2023
 * @returns newsController
 */

function newsController() {
    return {
        // [GET] /news
        index(req, res, next) {
            res.render('news');
        },

        // [GET] /news/:slug
        show(req, res) {
            res.write('<h1>NEWS PAGE WITH SLUG</h1>');
            res.end();
        }
    }
}

module.exports = newsController();
