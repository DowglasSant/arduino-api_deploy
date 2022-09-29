"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AddDataService = _interopRequireDefault(require("../../../services/AddDataService"));

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

}

exports.default = ArduinoDataController;