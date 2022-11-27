import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";
import BueiroController from "../controllers/BueiroController";

const bueiroRouter = Router();
const bueiroController = new BueiroController();

bueiroRouter.get('/', bueiroController.index);

bueiroRouter.get(
    '/:bairro_nome',
    celebrate({
        [Segments.PARAMS]: {
            bairro_nome: Joi.string().required(),
        },
    }),
    bueiroController.bueirosPorBairro,
);

bueiroRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            rua: Joi.string().required(),
            longitude: Joi.string().required(),
            latitude: Joi.string().required(),
            bairro_nome: Joi.string().required(),
        },
    }),
    bueiroController.adiciona,
);

bueiroRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            longitude: Joi.string().required(),
            latitude: Joi.string().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    bueiroController.atualiza,
);

bueiroRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    bueiroController.delete,
);

export default bueiroRouter;