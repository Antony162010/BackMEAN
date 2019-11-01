const router = require("express").Router(),
    { check } = require('express-validator/check');

const EmployeeController = require('../controllers/employeeController'),// como es una clase hay que definirla en un objeto
    authenticate = require('../middlewares/authenticate');

router
    .get('/', authenticate.isAuth, EmployeeController.getEmployees)
    .post('/', authenticate.isAuth, [
        check('name').isString().exists(),
        check('position').isString().exists(),
        check('office').isString().exists(),
        check('salary').isNumeric().exists(),
    ], EmployeeController.insertEmployees)
    .get('/:id', authenticate.isAuth, [
        check('id').isMongoId()
    ], EmployeeController.getEmployeeById)
    .put('/:id', authenticate.isAuth, [
        check('id').isMongoId(),
        check('name').isString().exists(),
        check('position').isString().exists(),
        check('office').isString().exists(),
        check('salary').isNumeric().exists(),
    ], EmployeeController.updateEmployee)
    .delete('/:id', authenticate.isAuth, [
        check('id').isMongoId()
    ], EmployeeController.deleteEmployee);

module.exports = router;