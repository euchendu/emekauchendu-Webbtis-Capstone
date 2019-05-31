/**
 * api/app.js
 * Exports an express app (REST API).
 */

const express = require('express')

// Initializes express app
const app = express();

// Import router with endpoints definitions
const router = require('./routes');

// Attach routes as a middleware
app.use(router);

module.exports = app;