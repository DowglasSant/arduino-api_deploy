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
    longitude,
    latitude,
    entupido,
    sendAt
  }) {
    const arduinoDataRepository = (0, _typeorm.getCustomRepository)(_ArduinoDataRepository.default);

    if (arduinoId === null || longitude === null || latitude === null || entupido === null || sendAt === null) {
      throw new _AppErrors.default("Field arduinoId or entupido is null!");
    }

    const arduinoData = arduinoDataRepository.addData({
      arduinoId,
      longitude,
      latitude,
      entupido,
      sendAt
    });
    return arduinoData;
  }

}

var _default = AddDataService;
exports.default = _default;