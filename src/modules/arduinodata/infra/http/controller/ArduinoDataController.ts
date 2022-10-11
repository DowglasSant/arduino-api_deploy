import { Request, Response, NextFunction } from "express";
import AddDataService from "../../../services/AddDataService";
import ListDataService from "../../../services/ListDataService";
import ShowArduinoDataService from "../../../services/ShowArduinoDataService";

export default class ArduinoDataController {
    public async addData(request: Request, response: Response, nextFuction: NextFunction): Promise<Response> {
        const { arduinoId, distance, sendAt } = request.body;

        const addDataService = new AddDataService();

        const arduinoData = await addDataService.execute({
            arduinoId,
            distance,
            sendAt
        })

        return response.json(arduinoData);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const listDatas = new ListDataService();

        const datas = await listDatas.execute();

        return response.json(datas);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showArduinoData = new ShowArduinoDataService();

        const arduinoDatas = await showArduinoData.execute(id);

        return response.json(arduinoDatas);
    }
}