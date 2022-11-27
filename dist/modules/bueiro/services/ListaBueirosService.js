"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BueiroRepository = _interopRequireDefault(require("../infra/typeorm/repositories/BueiroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListaBueirosService {
  async execute() {
    const bueiroRepository = (0, _typeorm.getCustomRepository)(_BueiroRepository.default);
    const bueiros = await bueiroRepository.find();
    return bueiros;
  }

}

var _default = ListaBueirosService;
exports.default = _default;