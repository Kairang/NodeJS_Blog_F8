/**
 * @Kairang NodeJs 05/04/2023
 * @returns siteController
 */

function siteController() {
    return {
        // [GET] /
        index(req, res) {
            res.render('home');
        },

        // [GET] /login
        login(req, res) {
            res.render('login');
        }
    }
}

module.exports = siteController();
