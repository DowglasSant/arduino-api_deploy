"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AtualizaEntupidoService = _interopRequireDefault(require("../../../../bueiro/services/AtualizaEntupidoService"));

var _ArduinoData = require("../entities/ArduinoData");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ArduinoDataRepository = (_dec = (0, _typeorm.EntityRepository)(_ArduinoData.ArduinoData), _dec(_class = class ArduinoDataRepository extends _typeorm.Repository {
  async addData({
    arduinoId,
    longitude,
    latitude,
    entupido,
    sendAt
  }) {
    const atualizaEntupidoService = new _AtualizaEntupidoService.default();
    const arduinoData = {
      arduinoId,
      longitude,
      latitude,
      entupido,
      sendAt
    };
    await this.save(arduinoData);
    const addedData = await this.findOne({
      where: {
        arduinoId,
        longitude,
        latitude,
        entupido,
        sendAt
      }
    });
    await atualizaEntupidoService.execute(longitude, latitude, entupido);
    return addedData;
  }

  async findByArduinoId(arduinoId) {
    const arduinoData = await this.find({
      where: {
        arduinoId: arduinoId
      }
    });
    return arduinoData;
  }

  async findByLatitudeLongitude(longitude, latitude) {
    const arduino = await this.findOne({
      where: {
        longitude: longitude,
        latitude: latitude
      }
    });
    return arduino;
  }

}) || _class);
var _default = ArduinoDataRepository;
exports.default = _default;