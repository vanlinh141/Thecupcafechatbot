const homeRoute = require('./homeRoute');

function initRoute(app) {
    app.use('/', homeRoute);
}

module.exports = initRoute;
