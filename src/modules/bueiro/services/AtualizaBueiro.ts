import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import { Bueiro } from "../infra/typeorm/entities/Bueiro";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

interface IRequest {
    bueiro_id: string;
    longitude: string;
    latitude: string;
}

class AtualizaBueiroService {
    public async execute({ bueiro_id, longitude, latitude }: IRequest): Promise<Bueiro> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiro = await bueiroRepository.findOne({
            where: {
                id: bueiro_id,
            }
        });

        if (!bueiro) {
            throw new AppError("Bueiro não encontrado!");
        }

        bueiro.longitude = longitude;
        bueiro.latitude = latitude;

        await bueiroRepository.save(bueiro);

        return bueiro;
    }
}

export default AtualizaBueiroService;