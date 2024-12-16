import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { DeleteDateColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    caja?: string;

    @Column()
    precio?:number;

    @Column()
    stock?:number;

    @Column()
    movimiento?:string;

    @Column()
    descripcion?:string;

    @Column()
    imagen_url?:string;

    @Column()
    material_pulsera?:string;

    @Column()
    categoria?:string;

          // Añadir la columna soft delete
    @DeleteDateColumn()
    deletedAt: Date;
      
}
