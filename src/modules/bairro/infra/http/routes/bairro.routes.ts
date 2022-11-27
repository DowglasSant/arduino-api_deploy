import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import BairroController from "../controllers/BairroController";

const bairroRouter = Router();
const bairroController = new BairroController();

bairroRouter.get('/', bairroController.index);

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