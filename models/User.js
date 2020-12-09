const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio:{
    type: String,
  },
  interests:{
    type: String,
  },
  bookings:{
    type: Array,
    default: []
  },
  role:{
    type: String,
    default: "patient"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);