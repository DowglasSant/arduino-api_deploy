"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Bairro = require("../entities/Bairro");

var _dec, _class;

let BairroRepository = (_dec = (0, _typeorm.EntityRepository)(_Bairro.Bairro), _dec(_class = class BairroRepository extends _typeorm.Repository {
  async adicionaBairro({
    nome,
    longitude,
    latitude
  }) {
    const arduinoData = {
      nome,
      longitude,
      latitude
    };
    await this.save(arduinoData);
    const addedData = await this.findOne({
      where: {
        nome,
        longitude,
        latitude
      }
    });
    return addedData;
  }

}) || _class);
var _default = BairroRepository;
exports.default = _default;