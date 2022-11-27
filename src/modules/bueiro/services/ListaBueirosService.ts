import { getCustomRepository } from "typeorm";
import { Bueiro } from "../infra/typeorm/entities/Bueiro";
import BueiroRepository from "../infra/typeorm/repositories/BueiroRepository";

class ListaBueirosService {
    public async execute(): Promise<Bueiro[]> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const bueiros = await bueiroRepository.find();

        return bueiros;
    }
}

export default ListaBueirosService;