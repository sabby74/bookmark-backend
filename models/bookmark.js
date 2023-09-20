const mongoose = require('../database/connection');
const bmarkSchema = new mongoose.Schema({
    title: String,
    url: String,
});

const Bookmark = mongoose.model('Bookmark', bmarkSchema)

module.exports = Bookmark;