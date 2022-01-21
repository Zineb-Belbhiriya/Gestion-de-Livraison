const ErrorHandler = require("../utils/global-Errors-Handlers");

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal Server Error";

//   res.status(err.statusCode).json({
//     success: false,
//     error: err.stack, // Or use juste the  error: err,
//   });
// };

// Separation of the dev errors and the production errors
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // The Developpement Mode
  if (process.env.NODE_ENV === "dev") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  // The Production Mode
  if (process.env.NODE_ENV === "prod") {
    // copy of the error
    let error = { ...err };
    error.message = err.message;
    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
