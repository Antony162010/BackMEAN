const router = require("express").Router(),
    { check } = require('express-validator/check');

const EmployeeController = require('../controllers/employeeController'),
    authenticate = require('../middlewares/authenticate');

router
    .get('/', EmployeeController.getEmployees)
    .post('/', [
        check('name').isString().exists(),
        check('position').isString().exists(),
        check('office').isString().exists(),
        check('salary').isNumeric().exists(),
    ], EmployeeController.insertEmployees)
    .get('/:id', [
        check('id').isMongoId()
    ], EmployeeController.getEmployeeById)
    .put('/:id', [
        check('id').isMongoId(),
        check('name').isString().exists(),
        check('position').isString().exists(),
        check('office').isString().exists(),
        check('salary').isNumeric().exists(),
    ], EmployeeController.updateEmployee);
    // .delete('/:id', [
    //     check('id').isMongoId()
    // ], EmployeeController.deleteEmployee);

module.exports = router;