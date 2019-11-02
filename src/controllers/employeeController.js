const Employee = require("../models/employee"); //pongo Employee porque es un modelo

const EmployeesController = {};

// EmployeesController.getEmployees = (req, res) => { /**Callbacks */
//     Employee.find((err, usr) => {
//         if (err) {
//             return res.status(202).send(err);
//         } else {
//             Employee.find((err, usr2) => {
//                 if (err) {
//                     return res.status(202).send(err);
//                 } else {
//                     return res.status(200).send(usr2)
//                 }
//             })
//         }
//     });
// }

// EmployeesController.getEmployees = (req, res) => { /**Promises */
//     Employee.find()
//         .then((result) => {
//             return res.status(200).send(result);
//         })
//         .then((result2) => {
//             return res.status(200).send(result2);
//         })
//         .catch((err) => {
//             return res.status(202).send(err);
//         });
// }

EmployeesController.getEmployees = async (req, res) => { /**Asnyc-await */
    try {
        const employees = await Employee.find();
        res.status(200).send(employees);
    } catch (error) {
        res.status(202).send(error);
    }
}


EmployeesController.insertEmployees = async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json({
        message: "Insert succesfully"
    });
};

EmployeesController.getEmployeeById = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json({
        employee
    });
};

EmployeesController.updateEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    await Employee.findByIdAndUpdate(
        req.params.id, { $set: employee }, { new: true }
    );

    res.status(200).json({
        message: "Update succesfully"
    });
};

EmployeesController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);

    res.status(200).json({
        message: "Delete sucesfully"
    });
};

module.exports = EmployeesController;