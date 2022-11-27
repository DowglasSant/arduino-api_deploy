"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BueiroRepository = _interopRequireDefault(require("../../bueiro/infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NivelDoBairroService {
  async execute(nome_bairro) {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const qntdEntupidos = await bueiroRepository.QuantidadeBueiroPorBairroEntupidos(nome_bairro);
    const qntdBueiros = await bueiroRepository.QuantidadeBueiroPorBairro(nome_bairro);
    var nivelBairro = 0;

    if (qntdEntupidos === 0 || qntdEntupidos < qntdBueiros / 2) {
      nivelBairro = 1;
    }

    if (qntdEntupidos > qntdBueiros / 2) {
      nivelBairro = 3;
    }

    if (qntdEntupidos === qntdBueiros / 2) {
      nivelBairro = 2;
    }

    return nivelBairro;
  }

}

var _default = NivelDoBairroService;
exports.default = _default;