const createServer = require('./server');
var functions = require('firebase-functions');
const countryController = require('./api/controllers/countryController');

const controllers = [
    { path: '/country', handler: countryController },
]

const app = createServer(controllers);

exports.api = functions.region('europe-west1').https.onRequest(app);

exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 60,
});
