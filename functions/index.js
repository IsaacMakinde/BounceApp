const createServer = require("./server");
var functions = require("firebase-functions");
var whitelist = functions.config().api_whitelist;
const countryController = require("./controllers/countryController");

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PATCH"],
};

const controllers = [{ path: "/country", handler: countryController }];

const app = createServer(controllers, corsOptions);

exports.api = functions.region("europe-west1").https.onRequest(app);

exports.functionsTimeOut = functions.runWith({
  timeoutSeconds: 60,
});
