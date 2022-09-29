"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ArduinoData = require("../entities/ArduinoData");

var _dec, _class;

let ArduinoDataRepository = (_dec = (0, _typeorm.EntityRepository)(_ArduinoData.ArduinoData), _dec(_class = class ArduinoDataRepository extends _typeorm.Repository {
  async addData({
    arduinoId,
    distance,
    sendAt
  }) {
    const arduinoData = {
      arduinoId,
      distance,
      sendAt
    };
    await this.save(arduinoData);
    const addedData = await this.findOne({
      where: {
        arduinoId,
        distance,
        sendAt
      }
    });
    return addedData;
  }

}) || _class);
var _default = ArduinoDataRepository;
exports.default = _default;