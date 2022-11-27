"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BueiroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListaBueirosPorBairroService {
  async execute(bairro_nome) {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const bueiros = await bueiroRepository.BueirosPorBairro(bairro_nome);
    return bueiros;
  }

}

var _default = ListaBueirosPorBairroService;
exports.default = _default;