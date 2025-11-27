import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { createProductoDTO } from './dto/create-productos.dto';
import { UpdateCategoriaDto } from './dto/update-productos.dto';

@Controller('productos')
export class ProductosController {
    constructor(private productoServices: ProductosService) { }

    @Get()
    findAll() {
        return this.productoServices.findAll()
    }


    //ruta para buscar por id
    @Get(':id')
    finOne(@Param('id') id: number) {
        return this.productoServices.findOne(id)
    }

    //Ruta para agregar
    @Post()
    crete(@Body() createProducto: createProductoDTO) {
        return this.productoServices.create(createProducto)
    }

    //Ruta para actualizar
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProducto:UpdateCategoriaDto) {
        return this.productoServices.update(+id, updateProducto)
    }

    //Ruta para eliminar

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productoServices.remove(+id)
    }





}
