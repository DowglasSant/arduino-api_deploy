import { Router } from "express";
import arduinoDataRouter from "../../../../modules/arduinodata/infra/http/routes/arduinodata.routes";
import bairroRouter from "../../../../modules/bairro/infra/http/routes/bairro.routes";
import bueiroRouter from "../../../../modules/bueiro/infra/http/routes/bueiro.routes";

const routes = Router();

routes.use("/arduinodata", arduinoDataRouter);
routes.use("/bueiro", bueiroRouter);
routes.use("/bairro", bairroRouter);

routes.get('/', (req, res) => {
  res.send('Arduino API Data is Running...')
})

export default routes;