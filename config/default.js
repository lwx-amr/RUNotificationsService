'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "NotificationsService",
        baseUrl: `http://localhost:`,
        port: process.env.PORT || 3000
    },
    api: {
        prefix: '^/api/v[1-9]',
        version: [1],
    }
};
