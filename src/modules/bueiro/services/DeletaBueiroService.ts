import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

interface IRequest {
    bueiro_id: string;
}

class DeletaBueiroService {
    public async execute({ bueiro_id }: IRequest): Promise<void> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiro = await bueiroRepository.findOne({
            where: {
                id: bueiro_id,
            }
        });

        if (!bueiro) {
            throw new AppError("Bueiro não encontrado!");
        }

        await bueiroRepository.remove(bueiro);
    }
}

export default DeletaBueiroService;