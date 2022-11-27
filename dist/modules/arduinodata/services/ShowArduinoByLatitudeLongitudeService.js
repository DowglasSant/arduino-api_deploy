"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ArduinoDataRepository = _interopRequireDefault(require("../infra/typeorm/repositories/ArduinoDataRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowArduinoByLatitudeLongitudeService {
  async execute(longitude, latitude) {
    const arduinoDataRepository = (0, _typeorm.getCustomRepository)(_ArduinoDataRepository.default);
    const datas = await arduinoDataRepository.find({
      where: {
        longitude: longitude,
        latitude: latitude
      }
    });
    return datas;
  }

}

var _default = ShowArduinoByLatitudeLongitudeService;
exports.default = _default;