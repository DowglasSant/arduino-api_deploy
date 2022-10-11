"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AddDataService = _interopRequireDefault(require("../../../services/AddDataService"));

var _ListDataService = _interopRequireDefault(require("../../../services/ListDataService"));

var _ShowArduinoDataService = _interopRequireDefault(require("../../../services/ShowArduinoDataService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ArduinoDataController {
  async addData(request, response, nextFuction) {
    const {
      arduinoId,
      distance,
      sendAt
    } = request.body;
    const addDataService = new _AddDataService.default();
    const arduinoData = await addDataService.execute({
      arduinoId,
      distance,
      sendAt
    });
    return response.json(arduinoData);
  }

  async index(request, response) {
    const listDatas = new _ListDataService.default();
    const datas = await listDatas.execute();
    return response.json(datas);
  }

  async show(request, response) {
    const {
      id
    } = request.params;
    const showArduinoData = new _ShowArduinoDataService.default();
    const arduinoDatas = await showArduinoData.execute(id);
    return response.json(arduinoDatas);
  }

}

exports.default = ArduinoDataController;