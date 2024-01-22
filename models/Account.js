const { model, Schema } = require("mongoose");
const accountScemah = new Schema({
  username: String,
  funds: Number,
});
module.exports = model("account", accountScemah);
