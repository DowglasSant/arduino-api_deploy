"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BairroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BairroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListaBairrosService {
  async execute() {
    const bairroRepository = (0, _typeorm.getCustomRepository)(_BairroRepository.default);
    const bairros = await bairroRepository.find();
    return bairros;
  }

}

var _default = ListaBairrosService;
exports.default = _default;