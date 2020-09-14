const bcrypt = require("bcryptjs");

const Employee = require("../../models/employee"), //pongo Employee porque es un modelo
    {createToken, getPayload} = require("../../services/jwt"),
    EmployeesController = {},
    saltRounds = 10;

EmployeesController.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Employee.findOne({email});

        if (user) {
            if (await bcrypt.compareSync(password, user.password))
                res.status(200).json({
                    message: "Login succesfully",
                    token: createToken(user),
                });
            else
                return res.status(400).json({
                    message: "Password fails",
                });
        } else {
            return res.status(404).json({
                message: "Not records found",
            });
        }
    } catch (error) {
        console.log(error.stack);
        return res.status(500).json({error: error.stack});
    }
};

EmployeesController.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        if (!employees)
            return res.status(404).json({
                message: "Not records found",
                data: []
            });
        else res.status(200).json({data: employees});
    } catch (error) {
        console.log(error.stack);
        return res.status(500).json({error: error.stack});
    }
};

EmployeesController.insertEmployees = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash;

        const employee = new Employee(req.body);
        await employee.save();

        res.status(201).json({
            message: "Insert succesfully",
        });
    } catch (error) {
        console.log(error.stack);
        return res.status(500).json({error: error.stack});
    }
};

EmployeesController.getEmployeeById = async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if (!employee)
        return res.status(404).json({
            message: "Not records found",
        });
    else
        res.status(200).json({
            data: employee,
        });
};

EmployeesController.updateEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    try {
        await Employee.findByIdAndUpdate(
            req.params.id,
            {$set: employee},
            {new: false}
        );

        res.status(200).json({
            message: "Update succesfully",
        });
    } catch (error) {
        console.log(error.stack);
        return res.status(500).json({error: error.stack});
    }
};

EmployeesController.deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndRemove(req.params.id);

        res.status(200).json({
            message: "Delete sucesfully",
        });
    } catch (error) {
        console.log(error.stack);
        return res.status(500).json({error: error.stack});
    }
};

module.exports = EmployeesController;
