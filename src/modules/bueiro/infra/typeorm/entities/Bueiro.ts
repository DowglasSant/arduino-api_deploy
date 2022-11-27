import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, OneToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class Bueiro {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    arduinoId: string;

    @Column()
    rua: string;

    @Column()
    longitude: string;

    @Column()
    latitude: string;

    @Column('boolean', { default: false })
    entupido: boolean = false;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}