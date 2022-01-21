const mongoose = require("mongoose");


const contentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter content name"],
    trim: true,
    maxlength: [100, "Content name cannot ecedded the 1000 character limit"],
  },
  price: {
    type: Number,
    require: [true, "Please enter content price"],
    maxlength: [5, "Content price cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    require: [true, "Please enter content description"],
  },
  rating: {
    type: Number,
    require: [true, "Please enter content rating"],
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please enter content category"],
    enum: {
      values: [
        "CATEGORY 1",
        "CATEGORY 2",
        "CATEGORY 3",
        "CATEGORY 4",
        "CATEGORY 5",
        "CATEGORY 6",
        "CATEGORY 7",
        "CATEGORY 8",
      ],
      message: "Please select correct category for the content",
    },
  },
  seller: {
    type: String,
    require: [true, "Please enter content seller"],
  },
  stock: {
    type: Number,
    require: [true, "Please enter content stock"],
    maxlength: [5, "Content "],
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Content", contentSchema);
