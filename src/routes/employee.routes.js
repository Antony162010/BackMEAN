const router = require("express").Router();

const employeeController = require("../controllers/apis/employee.controller"),
  employeeValidation = require("../controllers/validations/employee.validation"),
  validator = require("../middlewares/validation"),
  authenticate = require("../middlewares/authenticate");

router
  .get("/", employeeController.getEmployees)
  .post(
    "/",
    validator.validate,
    employeeValidation.signup(),
    employeeController.insertEmployees
  )
  .post(
    "/login",
    validator.validate,
    employeeValidation.login(),
    employeeController.login
  )
  .get(
    "/:id",
    validator.validate,
    employeeValidation.getMongoId(),
    employeeController.getEmployeeById
  )
  .put(
    "/:id",
    validator.validate,
    employeeValidation.signup(),
    employeeController.updateEmployee
  )
  .delete(
    "/:id",
    validator.validate,
    employeeValidation.getMongoId(),
    employeeController.deleteEmployee
  );

module.exports = router;
