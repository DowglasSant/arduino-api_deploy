"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppErrors = _interopRequireDefault(require("../../../shared/errors/AppErrors"));

var _BueiroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AtualizaBueiroService {
  async execute({
    bueiro_id,
    longitude,
    latitude
  }) {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const bueiro = await bueiroRepository.findOne({
      where: {
        id: bueiro_id
      }
    });

    if (!bueiro) {
      throw new _AppErrors.default("Bueiro não encontrado!");
    }

    bueiro.longitude = longitude;
    bueiro.latitude = latitude;
    await bueiroRepository.save(bueiro);
    return bueiro;
  }

}

var _default = AtualizaBueiroService;
exports.default = _default;