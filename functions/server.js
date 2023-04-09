const express = require('express');
const cors = require('cors');

const corsOptions = {
    origin: '*',
}


function createServer(controllers) {
    const app = express();

    app.use(express.json());
    app.use(cors(corsOptions));

    controllers.forEach((controller) => {
        app.use(controller.path, controller.handler);
    });

    return app;
}

module.exports = createServer;
