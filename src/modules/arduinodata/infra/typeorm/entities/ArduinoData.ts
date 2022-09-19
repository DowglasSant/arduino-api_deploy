import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class ArduinoData {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    arduinoId: string;

    @Column()
    distance: number;

    @Column()
    sendAt: string;

    @CreateDateColumn()
    createdAt: Date;
}