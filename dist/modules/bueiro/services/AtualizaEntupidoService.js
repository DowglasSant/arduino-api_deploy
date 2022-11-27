"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _BueiroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AtualizaEntupidoService {
  async execute(longitude, latitude, entupido) {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const bueiro = await bueiroRepository.findOne({
      where: {
        longitude: longitude,
        latitude: latitude
      }
    });

    if (!bueiro) {
      throw new _AppErrors.default("Bueiro não encontrado!");
    }

    bueiro.entupido = entupido;
    await bueiroRepository.save(bueiro);
  }

}

var _default = AtualizaEntupidoService;
exports.default = _default;