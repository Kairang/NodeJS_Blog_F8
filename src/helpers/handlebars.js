const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    formatDate: (date) => new Date(date).toLocaleDateString(),
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.order : 'default';

        const icons = {
            default: 'chevron-expand-sharp',
            desc: 'chevron-down-sharp',
            asc: 'chevron-up-sharp',
        }
        const types = {
            default: 'desc',
            desc: 'asc',
            asc: 'desc',
        }

        const icon = icons[sortType]
        const type = types[sortType]

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&order=${type}`)
        const result = `<a href='${href}'><ion-icon name=${icon}></ion-icon></a>`;

        return new Handlebars.SafeString(result);
    },
}