import { EntityRepository, Repository } from "typeorm";
import { ArduinoData } from "../entities/ArduinoData";

interface IRequest {
    arduinoId: string,
    distance: number,
    sendAt: string
}

@EntityRepository(ArduinoData)
class ArduinoDataRepository extends Repository<ArduinoData> {
    public async addData({ arduinoId, distance, sendAt }: IRequest): Promise<ArduinoData | undefined> {
        const arduinoData = {
            arduinoId,
            distance,
            sendAt
        }

        await this.save(arduinoData);

        const addedData = await this.findOne({
            where: {
                arduinoId,
                distance,
                sendAt
            }
        })

        return addedData;
    }
}

export default ArduinoDataRepository;