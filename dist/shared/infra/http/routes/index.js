"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _arduinodata = _interopRequireDefault(require("../../../../modules/arduinodata/infra/http/routes/arduinodata.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use("/arduinodata", _arduinodata.default);
routes.get('/', (req, res) => {
  res.send('Hello World!');
});
var _default = routes;
exports.default = _default;