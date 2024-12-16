import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNumber, IsOptional, IsString, IsUrl,ValidateNested } from "class-validator";

export class UpdateClienteDto{

    @IsString()
    @IsOptional()
    nombre?:string;

    @IsString()
    @IsOptional()
    correo?:string;
    
    @IsString()
    @IsOptional()
    telefono?:string;

    @IsString()
    @IsOptional()
    preferencias?:string;
}
