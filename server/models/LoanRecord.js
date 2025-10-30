const mongoose = require("mongoose");

const loanRecordSchema = new mongoose.Schema({
  amount: Number,
  rate: Number,
  years: Number,
  emi: Number,
  totalInterest: Number,
  totalPayment: Number,
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("LoanRecord", loanRecordSchema);
