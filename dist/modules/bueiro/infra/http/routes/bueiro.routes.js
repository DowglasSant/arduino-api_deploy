"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _BueiroController = _interopRequireDefault(require("../controllers/BueiroController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bueiroRouter = (0, _express.Router)();
const bueiroController = new _BueiroController.default();
bueiroRouter.get('/', bueiroController.index);
bueiroRouter.get('/:bairro_nome', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    bairro_nome: _celebrate.Joi.string().required()
  }
}), bueiroController.bueirosPorBairro);
bueiroRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    rua: _celebrate.Joi.string().required(),
    longitude: _celebrate.Joi.string().required(),
    latitude: _celebrate.Joi.string().required(),
    bairro_nome: _celebrate.Joi.string().required()
  }
}), bueiroController.adiciona);
bueiroRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    longitude: _celebrate.Joi.string().required(),
    latitude: _celebrate.Joi.string().required()
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), bueiroController.atualiza);
bueiroRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), bueiroController.delete);
var _default = bueiroRouter;
exports.default = _default;