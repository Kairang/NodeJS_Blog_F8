const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    NO: { type: Number },
    name: { type: String, required: true, unique: true },
    desc: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name' },
}, {
    timestamps: true,
});

// Custom query heplers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.order);
        return this.sort({
            [req.query.column]: isValidType ? req.query.order : 'desc'
        });
    }
    return this;
};

// Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement, { id: 'NO', inc_field: 'NO' });
CourseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Course', CourseSchema);
