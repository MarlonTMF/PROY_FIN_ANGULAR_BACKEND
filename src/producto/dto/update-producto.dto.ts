import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsNumber, IsOptional, IsString, IsUrl,ValidateNested } from "class-validator";

export class UpdateProductoDto  {

    @IsString()
    @IsOptional()
    nombre?: string;

    @IsString()
    @IsOptional()
    caja?: string;

    @IsNumber()
    @IsOptional()
    precio?:number;

    @IsNumber()
    @IsOptional()
    stock?:number;

    @IsString()
    @IsOptional()
    movimiento?:string;

    @IsString()
    @IsOptional()
    descripcion?:string;

    @IsUrl()
    @IsOptional()
    imagen_url?:string;

    @IsString()
    @IsOptional()
    material_pulsera?:string;

    
    @IsString()
    @IsOptional()
    categoria?:string;


}
