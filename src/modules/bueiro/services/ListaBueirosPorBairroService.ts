import { getCustomRepository } from "typeorm";
import { Bueiro } from "../infra/typeorm/entities/Bueiro";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

class ListaBueirosPorBairroService {
    public async execute(bairro_nome: string): Promise<Bueiro[]> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiros = await bueiroRepository.BueirosPorBairro(bairro_nome);

        return bueiros;
    }
}

export default ListaBueirosPorBairroService;