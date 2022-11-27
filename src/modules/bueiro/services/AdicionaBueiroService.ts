import { getCustomRepository } from "typeorm";
import { Bueiro } from "../infra/typeorm/entities/Bueiro";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

interface IRequest {
    rua: string;
    latitude: string;
    longitude: string;
    bairro_nome: string;
}

class AdicionaBueiroService {
    public async execute({ rua, longitude, latitude, bairro_nome }: IRequest): Promise<Bueiro | undefined> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiro = await bueiroRepository.adicionaBueiro({
            rua: rua,
            longitude: longitude,
            latitude: latitude,
            bairro_nome: bairro_nome,
        });

        return bueiro;
    }
}

export default AdicionaBueiroService;