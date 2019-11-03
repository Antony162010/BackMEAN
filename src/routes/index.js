const indexRouter = {}

const Routes = {
    employeeRouter: require('./employeeRoute'),
}

indexRouter.getRoutes = (app) => {
    app.use(process.env.APP_URL + '/employees', Routes.employeeRouter)
}

module.exports = indexRouter;