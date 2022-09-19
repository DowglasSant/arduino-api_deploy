import { Request, Response, NextFunction } from "express";
import AddDataService from "../../../services/AddDataService";

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
}