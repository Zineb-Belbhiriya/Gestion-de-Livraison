const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const error = require("../middlewares/error");
const Content = require("../model/Admin");

exports.get = async (req, res, next) => {
  const contents = await Content.find();
  res.status(200).json({
    success: true,
    size: contents.length,
    contents,
  });
};
