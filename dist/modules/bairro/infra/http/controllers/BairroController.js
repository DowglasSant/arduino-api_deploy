"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListaBairrosServices = _interopRequireDefault(require("../../../services/ListaBairrosServices"));

var _NivelDoBairroService = _interopRequireDefault(require("../../../services/NivelDoBairroService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BairroController {
  async index(request, response) {
    const listaBairros = new _ListaBairrosServices.default();
    const bairros = await listaBairros.execute();
    return response.json(bairros);
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