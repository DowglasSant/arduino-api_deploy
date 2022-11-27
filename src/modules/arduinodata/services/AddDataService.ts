import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import { ArduinoData } from "../infra/typeorm/entities/ArduinoData";
import ArduinoDataRepository from "../infra/typeorm/repositories/ArduinoDataRepository";

interface IRequest {
    arduinoId: string,
    longitude: string,
    latitude: string,
    entupido: boolean,
    sendAt: string
}

class AddDataService {
    public async execute({ arduinoId, longitude, latitude, entupido, sendAt }: IRequest): Promise<ArduinoData | undefined> {
        const arduinoDataRepository = getCustomRepository(ArduinoDataRepository);

        if (arduinoId === null || longitude === null || latitude === null || entupido === null || sendAt === null) {
            throw new AppError("Field arduinoId or entupido is null!");
        }

        const arduinoData = arduinoDataRepository.addData({
            arduinoId,
            longitude,
            latitude,
            entupido,
            sendAt
        });

        return arduinoData;
    }
}

export default AddDataService;