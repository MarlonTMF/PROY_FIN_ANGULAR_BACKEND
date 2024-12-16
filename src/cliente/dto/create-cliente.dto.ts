import { IsDate, IsNumber, IsOptional, IsString, IsUrl,ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateClienteDto {
    
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
