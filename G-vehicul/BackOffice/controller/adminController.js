const Admin = require("../models/Admin");
const userController = require("./userController");

const login = (req, res, next) => {
  userController.login("Admin", req, res, next);
};
const register = (req, res, next) => {
  userController.register(Admin, req, res, next);
};
const refresh = (req, res, next) => {
  userController.refresh(Admin, "Admin", req, res, next);
};

module.exports = {
  login,
  register,
  refresh,
};
