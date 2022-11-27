import { getCustomRepository } from "typeorm";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

class QuantidadeDeBueirosPorBairroService {
    public async execute(bairro_nome: string): Promise<number> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiros = await bueiroRepository.QuantidadeBueiroPorBairro(bairro_nome);

        return bueiros;
    }
}

export default QuantidadeDeBueirosPorBairroService;