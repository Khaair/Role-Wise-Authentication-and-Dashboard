const mongoose = require("mongoose");
const { Schema } = mongoose;

const crudSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  nid: String,
  dob: String,

});

module.exports = mongoose.model("crud", crudSchema);
