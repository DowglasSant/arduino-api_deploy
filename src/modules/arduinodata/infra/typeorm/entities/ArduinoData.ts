import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class ArduinoData {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    arduinoId: string;

    @Column()
    longitude: string;

    @Column()
    latitude: string;

    @Column()
    entupido: boolean;

    @Column()
    sendAt: string;

    @CreateDateColumn()
    createdAt: Date;
}