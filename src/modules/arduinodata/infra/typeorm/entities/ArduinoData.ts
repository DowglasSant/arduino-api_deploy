import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
class ArduinoData {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    arduinoId: string;

    @Column()
    distance: number;
}

export default ArduinoData;