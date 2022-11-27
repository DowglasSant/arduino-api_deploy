"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BueiroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdicionaBueiroService {
  async execute({
    rua,
    longitude,
    latitude,
    bairro_nome
  }) {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const bueiro = await bueiroRepository.adicionaBueiro({
      rua: rua,
      longitude: longitude,
      latitude: latitude,
      bairro_nome: bairro_nome
    });
    return bueiro;
  }

}

var _default = AdicionaBueiroService;
exports.default = _default;