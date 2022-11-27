import { Request, Response } from "express";
import AdicionaBueiroService from "../../../services/AdicionaBueiroService";
import AtualizaBueiroService from "../../../services/AtualizaBueiro";
import DeletaBueiroService from "../../../services/DeletaBueiroService";
import ListaBueirosPorBairroService from "../../../services/ListaBueirosPorBairroService";
import ListaBueirosService from "../../../services/ListaBueirosService";

export default class BueiroController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listaBueiros = new ListaBueirosService();

        const bueiros = await listaBueiros.execute();

        return response.json(bueiros);
    }

    public async bueirosPorBairro(request: Request, response: Response): Promise<Response> {
        const listaBueiroPorBairro = new ListaBueirosPorBairroService();

        const { nome_bairro } = request.params;

        const bueirosPorBairro = await listaBueiroPorBairro.execute(nome_bairro);

        return response.json(bueirosPorBairro);
    }

    public async adiciona(request: Request, response: Response): Promise<Response> {
        const { rua, longitude, latitude, bairro_nome } = request.body;

        const criaBueiro = new AdicionaBueiroService();

        const bueiro = await criaBueiro.execute({
            rua,
            longitude,
            latitude,
            bairro_nome,
        });

        return response.json(bueiro);
    }

    public async atualiza(request: Request, response: Response): Promise<Response> {
        const atualizaBueiro = new AtualizaBueiroService();

        const { longitude, latitude } = request.body;
        const { bueiro_id } = request.params;

        const bueiro = await atualizaBueiro.execute({
            bueiro_id,
            longitude,
            latitude,
        });

        return response.json(bueiro);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const deletaBueiro = new DeletaBueiroService();

        const { bueiro_id } = request.params;

        await deletaBueiro.execute({ bueiro_id });

        return response.json([]);
    }
}