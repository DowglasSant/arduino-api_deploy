import { getCustomRepository } from "typeorm";
import { ArduinoData } from "../infra/typeorm/entities/ArduinoData";
import ArduinoDataRepository from "../infra/typeorm/repositories/ArduinoDataRepository";

class ListDataService {
    public async execute(): Promise<ArduinoData[]> {
        const arduinoDataRepository = getCustomRepository(ArduinoDataRepository);

        const datas = await arduinoDataRepository.find();

        return datas;
    }
}

export default ListDataService;