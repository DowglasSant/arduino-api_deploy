import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, OneToMany, UpdateDateColumn } from "typeorm";

@Entity()
export class Bairro {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    nome: string;

    @Column()
    longitude: string;

    @Column()
    latitude: string;

    @CreateDateColumn()
    createdAt: Date;
}