const { orderRouter } = require("./orderRouter");
const { ORDER_SERVICE_WELCOME_MSG } = require("../statval/constants");

const addRoutes = (app) => {
	app.use("/api/orders", orderRouter);
};

module.exports = {
	addRoutes: addRoutes,
};
