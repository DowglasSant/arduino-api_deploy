import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import ArduinoDataController from "../controller/ArduinoDataController";

const arduinoDataRouter = Router();
const arduinoDataController = new ArduinoDataController();

arduinoDataRouter.post("/", celebrate({
    [Segments.BODY]: {
        arduinoId: Joi.string().required(),
        distance: Joi.number().required(),
        sendAt: Joi.string().required()
    }
}),
    arduinoDataController.addData);

export default arduinoDataRouter;


