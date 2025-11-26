import { IsString, MaxLength, MinLength } from "class-validator";


export class createCategoriaDTO {

    @IsString()
    @MinLength(2, { message: 'Minimo 3 caracteres' })
    @MaxLength(30, { message: 'Maximo 30 caracteres' })
    nombre: string
}



