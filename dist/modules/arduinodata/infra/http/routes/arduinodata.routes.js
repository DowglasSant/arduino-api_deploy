"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _ArduinoDataController = _interopRequireDefault(require("../controller/ArduinoDataController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const arduinoDataRouter = (0, _express.Router)();
const arduinoDataController = new _ArduinoDataController.default();
arduinoDataRouter.post("/", (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    arduinoId: _celebrate.Joi.string().required(),
    longitude: _celebrate.Joi.string().required(),
    latitude: _celebrate.Joi.string().required(),
    entupido: _celebrate.Joi.boolean().required(),
    sendAt: _celebrate.Joi.string().required()
  }
}), arduinoDataController.addData);
arduinoDataRouter.get('/', arduinoDataController.index);
arduinoDataRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), arduinoDataController.show);
var _default = arduinoDataRouter;
exports.default = _default;