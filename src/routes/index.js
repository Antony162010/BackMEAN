const indexRouter = {}

const routers = {
    employeeRouter: require('./employee.routes'),
    externRouter: require('./extern.routes'),
}

indexRouter.getRoutes = (app) => {
    app.use(process.env.APP_URL + '/employees', routers.employeeRouter)
    app.use(process.env.APP_URL + '/extern', routers.externRouter)
}

module.exports = indexRouter;