"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AdicionaBueiroService = _interopRequireDefault(require("../../../services/AdicionaBueiroService"));

var _AtualizaBueiro = _interopRequireDefault(require("../../../services/AtualizaBueiro"));

var _DeletaBueiroService = _interopRequireDefault(require("../../../services/DeletaBueiroService"));

var _ListaBueirosPorBairroService = _interopRequireDefault(require("../../../services/ListaBueirosPorBairroService"));

var _ListaBueirosService = _interopRequireDefault(require("../../../services/ListaBueirosService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BueiroController {
  async index(request, response) {
    const listaBueiros = new _ListaBueirosService.default();
    const bueiros = await listaBueiros.execute();
    return response.json(bueiros);
  }

  async bueirosPorBairro(request, response) {
    const listaBueiroPorBairro = new _ListaBueirosPorBairroService.default();
    const {
      nome_bairro
    } = request.params;
    const bueirosPorBairro = await listaBueiroPorBairro.execute(nome_bairro);
    return response.json(bueirosPorBairro);
  }

  async adiciona(request, response) {
    const {
      rua,
      longitude,
      latitude,
      bairro_nome
    } = request.body;
    const criaBueiro = new _AdicionaBueiroService.default();
    const bueiro = await criaBueiro.execute({
      rua,
      longitude,
      latitude,
      bairro_nome
    });
    return response.json(bueiro);
  }

  async atualiza(request, response) {
    const atualizaBueiro = new _AtualizaBueiro.default();
    const {
      longitude,
      latitude
    } = request.body;
    const {
      bueiro_id
    } = request.params;
    const bueiro = await atualizaBueiro.execute({
      bueiro_id,
      longitude,
      latitude
    });
    return response.json(bueiro);
  }

  async delete(request, response) {
    const deletaBueiro = new _DeletaBueiroService.default();
    const {
      bueiro_id
    } = request.params;
    await deletaBueiro.execute({
      bueiro_id
    });
    return response.json([]);
  }

}

exports.default = BueiroController;