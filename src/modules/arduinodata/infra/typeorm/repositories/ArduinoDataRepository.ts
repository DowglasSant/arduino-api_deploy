import { EntityRepository, Repository } from "typeorm";
import AtualizaEntupidoService from "../../../../bueiro/services/AtualizaEntupidoService";
import { ArduinoData } from "../entities/ArduinoData";

interface IRequest {
    arduinoId: string,
    longitude: string,
    latitude: string,
    entupido: boolean,
    sendAt: string
}

@EntityRepository(ArduinoData)
class ArduinoDataRepository extends Repository<ArduinoData> {
    public async addData({ arduinoId, longitude, latitude, entupido, sendAt }: IRequest): Promise<ArduinoData | undefined> {
        const atualizaEntupidoService = new AtualizaEntupidoService();

        const arduinoData = {
            arduinoId,
            longitude,
            latitude,
            entupido,
            sendAt,
        }

        await this.save(arduinoData);

        const addedData = await this.findOne({
            where: {
                arduinoId,
                longitude,
                latitude,
                entupido,
                sendAt,
            }
        })

        await atualizaEntupidoService.execute(longitude, latitude, entupido);

        return addedData;
    }

    public async findByArduinoId(arduinoId: string): Promise<ArduinoData[] | undefined> {
        const arduinoData = await this.find({
            where: {
                arduinoId: arduinoId,
            },
        });

        return arduinoData;
    }

    public async findByLatitudeLongitude(longitude: string, latitude: string): Promise<ArduinoData | undefined> {
        const arduino = await this.findOne({
            where: {
                longitude: longitude,
                latitude: latitude,
            },
        });

        return arduino;
    }
}

export default ArduinoDataRepository;