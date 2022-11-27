import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import ListaBairrosService from "../../../services/ListaBairrosServices";
import NivelDoBairroService from '../../../services/NivelDoBairroService';
import BairroRepository from '../../typeorm/repositories/BairroRepository';
import BueiroRepository from '../../typeorm/repositories/BairroRepository';

export default class BairroController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listaBairros = new ListaBairrosService();

        const bairros = await listaBairros.execute();

        return response.json(bairros);
    }

    public async adiciona(request: Request, response: Response): Promise<Response> {
        const { nome, longitude, latitude } = request.body;

        const bairroRepository = getCustomRepository(BairroRepository);

        const bueiro = await bairroRepository.adicionaBairro({
            nome,
            longitude,
            latitude,
        });

        return response.json(bueiro);
    }

    public async nivelBairro(request: Request, response: Response): Promise<Response> {
        const nivelDoBairroService = new NivelDoBairroService();

        const { bairro_nome } = request.body;

        const nivelBairro = await nivelDoBairroService.execute(bairro_nome);

        return response.json(nivelBairro);
    }
}