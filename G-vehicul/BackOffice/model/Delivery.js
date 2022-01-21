const mongose = require("mongose");

const Delivery = mongose.Schema(
  {
    type: {
      type: String,
      require: [true, "Please enter type"],
    },
    from: {
      type: String,
      require: [true, "Please enter depart"],
    },
    to: {
      type: String,
      require: [true, "Please enter arrive"],
    },
    date: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Delivery", Delivery);
