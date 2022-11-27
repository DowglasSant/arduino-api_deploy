"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ListaBairrosServices = _interopRequireDefault(require("../../../services/ListaBairrosServices"));

var _NivelDoBairroService = _interopRequireDefault(require("../../../services/NivelDoBairroService"));

var _BairroRepository = _interopRequireDefault(require("../../typeorm/repositories/BairroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BairroController {
  async index(request, response) {
    const listaBairros = new _ListaBairrosServices.default();
    const bairros = await listaBairros.execute();
    return response.json(bairros);
  }

  async adiciona(request, response) {
    const {
      nome,
      longitude,
      latitude
    } = request.body;
    const bairroRepository = (0, _typeorm.getCustomRepository)(_BairroRepository.default);
    const bueiro = await bairroRepository.adicionaBairro({
      nome,
      longitude,
      latitude
    });
    return response.json(bueiro);
  }

  async nivelBairro(request, response) {
    const nivelDoBairroService = new _NivelDoBairroService.default();
    const {
      bairro_nome
    } = request.body;
    const nivelBairro = await nivelDoBairroService.execute(bairro_nome);
    return response.json(nivelBairro);
  }

}

exports.default = BairroController;