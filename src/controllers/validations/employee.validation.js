const { body, param, query } = require("express-validator/check");

const EmployeesValidation = {};

EmployeesValidation.login = () => {
  return [
    body("email").exists().isEmail(),
    body("password").exists().isLength({ min: 6 }),
  ];
};

EmployeesValidation.signup = () => {
  return [
    body("name").exists().isString(),
    body("position").exists().isString(),
    body("email").exists().isString().isEmail(),
    body("password").exists().isString().isLength({ min: 6 }),
    body("office").exists().isString(),
    body("salary").exists().isNumeric(),
  ];
};

EmployeesValidation.getMongoId = () => {
  return [param("id").exists().isMongoId()];
};

module.exports = EmployeesValidation;
