import { getCustomRepository } from "typeorm";
import { ArduinoData } from "../infra/typeorm/entities/ArduinoData";
import ArduinoDataRepository from "../infra/typeorm/repositories/ArduinoDataRepository";

class ShowArduinoDataService {
    public async execute(arduinoId: string): Promise<ArduinoData[] | undefined> {
        const arduinoDataRepository = getCustomRepository(ArduinoDataRepository);

        const product = await arduinoDataRepository.findByArduinoId(arduinoId);

        return product;
    }
}

export default ShowArduinoDataService;