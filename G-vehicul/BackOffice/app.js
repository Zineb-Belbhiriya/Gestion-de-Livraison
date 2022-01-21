const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/errors");

app.use(express.json());

// import all routes
const contents_ = require("./route/default-entity");
app.use("/api/v1", contents_);

// middleware to handle Errors
app.use(errorMiddleware);

module.exports = app;
