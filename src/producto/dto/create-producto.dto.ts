import { IsNumber, IsOptional, IsString, IsUrl,ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductoDto {

    @IsString()
    nombre!: string;

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

