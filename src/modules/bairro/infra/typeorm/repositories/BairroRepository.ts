import { EntityRepository, Repository } from "typeorm";
import { Bairro } from "../entities/Bairro";

interface IRequest {
    nome: string;
    longitude: string;
    latitude: string;
}

@EntityRepository(Bairro)
class BairroRepository extends Repository<Bairro> {
    public async adicionaBairro({ nome, longitude, latitude }: IRequest): Promise<Bairro | undefined> {
        const arduinoData = {
            nome,
            longitude,
            latitude,
        }

        await this.save(arduinoData);

        const addedData = await this.findOne({
            where: {
                nome,
                longitude,
                latitude,
            }
        })

        return addedData;
    }

}

export default BairroRepository;