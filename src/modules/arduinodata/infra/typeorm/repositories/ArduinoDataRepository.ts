import { EntityRepository, Repository } from "typeorm";
import ArduinoData from "../entities/ArduinoData";

@EntityRepository(ArduinoData)
class ArduinoDataRepository extends Repository<ArduinoData> { }

export default ArduinoDataRepository;