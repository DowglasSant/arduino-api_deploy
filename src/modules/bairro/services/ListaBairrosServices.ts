import { getCustomRepository } from "typeorm";
import { Bairro } from "../infra/typeorm/entities/Bairro";
import BairroRepository from "../infra/typeorm/repositories/BairroRepository";

class ListaBairrosService {
    public async execute(): Promise<Bairro[]> {
        const bairroRepository = getCustomRepository(BairroRepository);

        const bairros = await bairroRepository.find();

        return bairros;
    }
}

export default ListaBairrosService;