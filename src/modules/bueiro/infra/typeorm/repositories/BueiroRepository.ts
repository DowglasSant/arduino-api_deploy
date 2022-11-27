import { EntityRepository, Repository } from "typeorm";
import { Bueiro } from "../entities/Bueiro";

interface IRequest {
    rua: string;
    longitude: string;
    latitude: string;
    bairro_nome: string;
}

@EntityRepository(Bueiro)
class BueiroRepository extends Repository<Bueiro> {
    public async adicionaBueiro({ rua, longitude, latitude, bairro_nome }: IRequest): Promise<Bueiro | undefined> {
        const arduinoData = {
            rua,
            longitude,
            latitude,
            bairro_nome,
        }

        await this.save(arduinoData);

        const addedData = await this.findOne({
            where: {
                rua,
                longitude,
                latitude,
                bairro_nome,
            }
        })

        return addedData;
    }

    public async BueirosPorBairro(bairro_nome: string): Promise<Bueiro[]> {
        const bueirosPorBairro = await this.find({
            where: {
                bairro: bairro_nome
            }
        })

        return bueirosPorBairro;
    }

    public async BueirosEntupidosPorBairro(bairro_nome: string): Promise<Bueiro[]> {
        const bueirosEntupidosPorBairro = await this.find({
            where: {
                bairro: bairro_nome,
                entupido: true
            }
        })

        return bueirosEntupidosPorBairro;
    }

    public async QuantidadeBueiroPorBairro(bairro_nome: string): Promise<number> {
        const bueirosPorBairro = await this.BueirosPorBairro(bairro_nome);

        const quantidadeBueiroPorBairro = bueirosPorBairro.length;

        return quantidadeBueiroPorBairro;
    }

    public async QuantidadeBueiroPorBairroEntupidos(bairro_nome: string): Promise<number> {
        const bueirosEntupidosPorBairro = await this.BueirosPorBairro(bairro_nome);

        const quantidadeBueiroPorBairro = bueirosEntupidosPorBairro.length;

        return quantidadeBueiroPorBairro;
    }
}

export default BueiroRepository;