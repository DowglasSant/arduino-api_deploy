import { getCustomRepository } from "typeorm";
import { ArduinoData } from "../infra/typeorm/entities/ArduinoData";
import ArduinoDataRepository from "../infra/typeorm/repositories/ArduinoDataRepository";

class ShowArduinoByLatitudeLongitudeService {
    public async execute(longitude: string, latitude: string): Promise<ArduinoData[]> {
        const arduinoDataRepository = getCustomRepository(ArduinoDataRepository);

        const datas = await arduinoDataRepository.find({
            where: {
                longitude: longitude,
                latitude: latitude
            }
        });

        return datas;
    }
}

export default ShowArduinoByLatitudeLongitudeService;