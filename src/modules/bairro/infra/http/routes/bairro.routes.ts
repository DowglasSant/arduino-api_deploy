import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import BairroController from "../controllers/BairroController";

const bairroRouter = Router();
const bairroController = new BairroController();

bairroRouter.get('/', bairroController.index);

bairroRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            nome: Joi.string().required(),
            longitude: Joi.string().required(),
            latitude: Joi.string().required(),
        },
    }),
    bairroController.adiciona,
);

bairroRouter.post(
    '/nivel',
    celebrate({
        [Segments.BODY]: {
            nome_bairro: Joi.string().required(),
        },
    }),
    bairroController.nivelBairro,
);

export default bairroRouter;