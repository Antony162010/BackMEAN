const indexRouter = {}

const Routes = {
    employeeRouter: require('./employeeRoute'),
}

indexRouter.getRoutes = (app) => {
    app.use('/employees', Routes.employeeRouter)
}

module.exports = indexRouter;