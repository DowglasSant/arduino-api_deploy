import { Router } from "express";
import arduinoDataRouter from "../../../../modules/arduinodata/infra/http/routes/arduinodata.routes";

const routes = Router();

routes.use("/arduinodata", arduinoDataRouter);

routes.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default routes;