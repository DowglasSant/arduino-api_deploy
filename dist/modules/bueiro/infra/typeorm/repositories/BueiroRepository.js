"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Bueiro = require("../entities/Bueiro");

var _dec, _class;

let BueiroRepository = (_dec = (0, _typeorm.EntityRepository)(_Bueiro.Bueiro), _dec(_class = class BueiroRepository extends _typeorm.Repository {
  async adicionaBueiro({
    rua,
    longitude,
    latitude,
    bairro_nome
  }) {
    const arduinoData = {
      rua,
      longitude,
      latitude,
      bairro_nome
    };
    await this.save(arduinoData);
    const addedData = await this.findOne({
      where: {
        rua,
        longitude,
        latitude,
        bairro_nome
      }
    });
    return addedData;
  }

  async BueirosPorBairro(bairro_nome) {
    const bueirosPorBairro = await this.find({
      where: {
        bairro: bairro_nome
      }
    });
    return bueirosPorBairro;
  }

  async BueirosEntupidosPorBairro(bairro_nome) {
    const bueirosEntupidosPorBairro = await this.find({
      where: {
        bairro: bairro_nome,
        entupido: true
      }
    });
    return bueirosEntupidosPorBairro;
  }

  async QuantidadeBueiroPorBairro(bairro_nome) {
    const bueirosPorBairro = await this.BueirosPorBairro(bairro_nome);
    const quantidadeBueiroPorBairro = bueirosPorBairro.length;
    return quantidadeBueiroPorBairro;
  }

  async QuantidadeBueiroPorBairroEntupidos(bairro_nome) {
    const bueirosEntupidosPorBairro = await this.BueirosPorBairro(bairro_nome);
    const quantidadeBueiroPorBairro = bueirosEntupidosPorBairro.length;
    return quantidadeBueiroPorBairro;
  }

}) || _class);
var _default = BueiroRepository;
exports.default = _default;