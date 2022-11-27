import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

class AtualizaEntupidoService {
    public async execute(longitude: string, latitude: string, entupido: boolean): Promise<void> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiro = await bueiroRepository.findOne({
            where: {
                longitude: longitude,
                latitude: latitude,
            }
        });

        if (!bueiro) {
            throw new AppError("Bueiro não encontrado!");
        }

        bueiro.entupido = entupido;

        await bueiroRepository.save(bueiro);
    }
}

export default AtualizaEntupidoService;