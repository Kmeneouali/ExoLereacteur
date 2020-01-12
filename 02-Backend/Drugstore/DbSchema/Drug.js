const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrugSchema = new Schema({
  name: {
    type: String,
    defaut: ""
  },
  quantity: {
    type: Number,
    defaut: 0
  }
});
module.exports = mongoose.model("Drug", DrugSchema);
