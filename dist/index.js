"use strict";

require("reflect-metadata");

var _routes = _interopRequireDefault(require("./shared/infra/http/routes"));

var _typeorm = require("typeorm");

var _express = _interopRequireDefault(require("express"));

var _AppErrors = _interopRequireDefault(require("./shared/errors/AppErrors"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
(0, _typeorm.createConnection)();
app.use(_routes.default);
app.use((0, _celebrate.errors)());
app.use((error, request, response, next) => {
  if (error instanceof _AppErrors.default) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});