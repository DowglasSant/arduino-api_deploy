"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _ArduinoDataRepository = _interopRequireDefault(require("../infra/typeorm/repositories/ArduinoDataRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddDataService {
  async execute({
    arduinoId,
    distance,
    sendAt
  }) {
    const arduinoDataRepository = (0, _typeorm.getCustomRepository)(_ArduinoDataRepository.default);

    if (arduinoId === null || distance === null || sendAt === null) {
      throw new _AppErrors.default("Field arduinoId or distance is null!");
    }

    const arduinoData = arduinoDataRepository.addData({
      arduinoId,
      distance,
      sendAt
    });
    return arduinoData;
  }

}

var _default = AddDataService;
exports.default = _default;