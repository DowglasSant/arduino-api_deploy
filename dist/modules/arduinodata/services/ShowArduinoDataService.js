"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ArduinoDataRepository = _interopRequireDefault(require("../infra/typeorm/repositories/ArduinoDataRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowArduinoDataService {
  async execute(arduinoId) {
    const arduinoDataRepository = (0, _typeorm.getCustomRepository)(_ArduinoDataRepository.default);
    const product = await arduinoDataRepository.findByArduinoId(arduinoId);
    return product;
  }

}

var _default = ShowArduinoDataService;
exports.default = _default;