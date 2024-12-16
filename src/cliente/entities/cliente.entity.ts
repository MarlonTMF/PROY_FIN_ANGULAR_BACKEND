import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cliente {

    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    nombre?:string;

    @Column()
    correo?:string;
    
    @Column()
    telefono?:string;

    @Column()
    preferencias?:string;
    

}

