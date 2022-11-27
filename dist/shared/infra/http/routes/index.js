"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _arduinodata = _interopRequireDefault(require("../../../../modules/arduinodata/infra/http/routes/arduinodata.routes"));

var _bairro = _interopRequireDefault(require("../../../../modules/bairro/infra/http/routes/bairro.routes"));

var _bueiro = _interopRequireDefault(require("../../../../modules/bueiro/infra/http/routes/bueiro.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use("/arduinodata", _arduinodata.default);
routes.use("/bueiro", _bueiro.default);
routes.use("/bairro", _bairro.default);
routes.get('/', (req, res) => {
  res.send('Arduino API Data is Running...');
});
var _default = routes;
exports.default = _default;