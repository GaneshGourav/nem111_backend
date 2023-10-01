
const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    adminName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile_Number:{ type: Number },
    location:{ type: String}
  },
  {
    versionKey: false,
  }
);

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };