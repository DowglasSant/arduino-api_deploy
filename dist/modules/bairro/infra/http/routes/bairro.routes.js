"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _BairroController = _interopRequireDefault(require("../controllers/BairroController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bairroRouter = (0, _express.Router)();
const bairroController = new _BairroController.default();
bairroRouter.get('/', bairroController.index);
bairroRouter.post('/nivel', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    nome_bairro: _celebrate.Joi.string().required()
  }
}), bairroController.nivelBairro);
var _default = bairroRouter;
exports.default = _default;