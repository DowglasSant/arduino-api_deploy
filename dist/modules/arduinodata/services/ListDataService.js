"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ArduinoDataRepository = _interopRequireDefault(require("../infra/typeorm/repositories/ArduinoDataRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListDataService {
  async execute() {
    const arduinoDataRepository = (0, _typeorm.getCustomRepository)(_ArduinoDataRepository.default);
    const datas = await arduinoDataRepository.find();
    return datas;
  }

}

var _default = ListDataService;
exports.default = _default;