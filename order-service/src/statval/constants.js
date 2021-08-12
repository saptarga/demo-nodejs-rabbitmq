const EXCHANGE_FANOUT = "order";
const EXCHANGE_TOPIC = "order_topic";
const QUEUE = "order.process";
const QUEUE_TOPIC = "order_topic.process";

const ITEM_PRICE = {
	burger: 50.0,
	fries: 20.0,
	coke: 10.0,
};

// map all error names to corresponding HTTP codes
const ERROR_MAPPING = {
	400: ["CastError", "ValidationError"],
};

const MORGAN_CONFIG =
	":method :url :status :res[content-length] :remote-addr - :response-time ms";
const ORDER_SERVICE_WELCOME_MSG = "Welcome to the Order Service!";

module.exports = {
	ITEM_PRICE: ITEM_PRICE,
	MORGAN_CONFIG: MORGAN_CONFIG,
	ORDER_SERVICE_WELCOME_MSG: ORDER_SERVICE_WELCOME_MSG,
	ERROR_MAPPING: ERROR_MAPPING,
	EXCHANGE_FANOUT: EXCHANGE_FANOUT,
	EXCHANGE_TOPIC: EXCHANGE_TOPIC,
	QUEUE: QUEUE,
	QUEUE_TOPIC: QUEUE_TOPIC,
};
