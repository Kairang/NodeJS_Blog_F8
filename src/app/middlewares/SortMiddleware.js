module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        order: 'default',
    };

    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            enabled: true,
            order: req.query.order,
            column: req.query.column,
        });
    }

    next();
}
