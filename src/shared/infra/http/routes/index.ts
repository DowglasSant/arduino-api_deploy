import { Router } from "express";
import arduinoDataRouter from "../../../../modules/arduinodata/infra/http/routes/arduinodata.routes";

const routes = Router();

routes.use("/arduinodata", arduinoDataRouter);

export default routes;