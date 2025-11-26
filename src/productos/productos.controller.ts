import { Controller, Get } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private productoServices:ProductosService){}

    @Get()
    findAll(){
        return this.productoServices.findAll()
    }
}
