import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import { ArduinoData } from "../infra/typeorm/entities/ArduinoData";
import ArduinoDataRepository from "../infra/typeorm/repositories/ArduinoDataRepository";

interface IRequest {
    arduinoId: string,
    distance: number,
    sendAt: string
}

class AddDataService {
    public async execute({ arduinoId, distance, sendAt }: IRequest): Promise<ArduinoData | undefined> {
        const arduinoDataRepository = getCustomRepository(ArduinoDataRepository);

        if (arduinoId === null || distance === null || sendAt === null) {
            throw new AppError("Field arduinoId or distance is null!");
        }

        const arduinoData = arduinoDataRepository.addData({
            arduinoId,
            distance,
            sendAt
        });

        return arduinoData;
    }
}

export default AddDataService;