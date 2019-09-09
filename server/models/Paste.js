const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pasteSchema = new Schema(
  {
    pasteID: String,
    pasteTitle: String,
    pasteText: String,
    pasteSyntax: String,
    pasteViews: Number
  },
  { timestamps: true }
);

const Paste = mongoose.model('Paste', pasteSchema);
module.exports = Paste;