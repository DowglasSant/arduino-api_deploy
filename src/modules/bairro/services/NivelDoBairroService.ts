import { getCustomRepository } from "typeorm";
import BueiroRepository from "../../bueiro/infra/typeorm/repositories/BueiroRepository";

class NivelDoBairroService {
    public async execute(nome_bairro: string): Promise<number> {
        const bueiroRepository = getCustomRepository(BueiroRepository);

        const qntdEntupidos = await bueiroRepository.QuantidadeBueiroPorBairroEntupidos(nome_bairro);
        const qntdBueiros = await bueiroRepository.QuantidadeBueiroPorBairro(nome_bairro);

        var nivelBairro = 0;

        if (qntdEntupidos === 0 || qntdEntupidos < (qntdBueiros / 2)) {
            nivelBairro = 1;
        }

        if (qntdEntupidos > (qntdBueiros / 2)) {
            nivelBairro = 3;
        }

        if (qntdEntupidos === (qntdBueiros / 2)) {
            nivelBairro = 2;
        }

        return nivelBairro;
    }
}

export default NivelDoBairroService;