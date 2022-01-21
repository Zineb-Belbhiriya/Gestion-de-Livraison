const Content = require("../model/content");


// importing the middleware to use it to handle the errors
const ErrorHandler = require("../utils/global-Errors-Handlers");

// FUNCTION << createNewProduct >> IS USED TO CREATE NEW CONTENT UNDER THE URI => /api/v1/product/new-product
exports.createNewContent = async (req, res, next) => {
  const data = await Content.create(req.body);
  res.status(201).json({
    success: true,
    data,
  });
};

// FUNCTION << getContents >> IS USER TO RENDER THE LIST OL ALL THE CONTENTS FROM THE DATABASE
exports.getContents = async (req, res, next) => {
  const contents = await Content.find();
  res.status(200).json({
    success: true,
    size: contents.length,
    contents,
  });
};

// FUNCTION <<getSingleContentDetails>> IS USED TO GET THE DETAILS FOR THE SPECIFIC CONTENT POJO UNDER THE URI => /api/v1/admin/content/:id

exports.getSingleContentDetails = async (req, res, next) => {
  const contentDetails = await Content.findById(req.params.id);
  // in case something wrong
  if (!contentDetails) {
    //****** Without The Middleware Handler  ******/
    return res.status(404).json({
      success: false,
      message: "Content Not Found",
    });
    //******* */ Using The Middleware Handler To Handle The Errors
    // return next(new ErrorHandler("Content Not Found", 404));
  }
  // everything okay
  res.status(200).json({
    success: true,
    contentDetails,
  });
};

// FUNCTION USED TO UPDATE ONE CONTENT POJO UNDER THE URI => /api/v1/admin/content/:id
exports.updateOneSingleContent = async (req, res, next) => {
  let content = await Content.findById(req.params.id);

  if (!content) {
    return res.status(404).json({
      success: false,
      message: "Content Not Found",
    });
  }

  content = await Content.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    content,
  });
};

// THIS FUNCTION IS USED TO DELETE ONE GIVEN CONTENT UNDER THE URI => /api/v1/admin/content/:id
exports.eraseOneSingleContent = async (req, res, next) => {
  const content = await Content.findById(req.params.id);
  if (!content) {
    return res.status(404).json({
      success: false,
      message: "Content Not Found",
    });
  }

  await Content.remove();

  res.status(200).json({
    success: true,
    message: "Content is deleted ",
  });
};
