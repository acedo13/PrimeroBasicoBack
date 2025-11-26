import { IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator"
import { isFloat16Array } from "util/types"



export class createProductoDTO{
    
    @IsString()
    @MinLength(2,{message:'Minimo 3 caracteres'})
    @MaxLength(30,{message:'Maximo 30 caracteres'})
    nombre:string

    @IsNumber({},{message:'El precio precio debe ser un numero'})
    @IsPositive({message:'El precio debe ser numero'})
    precio:number

    @IsNumber({},{message:'La cantidad debe ser numero'})
    @IsPositive({message:'Debe ser positivo'})
    cantidad:number

}








