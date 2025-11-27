import { Body, Controller, Delete, Get, Param,Patch, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { createCategoriaDTO } from './dto/create-categories.dto';
import { UpdateCategoriaDto } from './dto/update-categories.dto';

@Controller('categorias')
export class CategoriasController {

    //Conecta con el categoriaServices
    constructor(private categoriaService: CategoriasService) { }

    //Ruta para listar todos los productos
    @Get()
    findAll() {
        return this.categoriaService.finAll();
    }


    //ruta para buscar por id
    @Get(':id')
    finOne(@Param('id') id:number){
        return this.categoriaService.findOne(id)
    }

    //Ruta para agregar
    @Post()
    crete(@Body() createCategoriaDTO:createCategoriaDTO){
        return this.categoriaService.create(createCategoriaDTO)
    }

    //Ruta para actualizar
    @Patch(':id')
    update(@Param('id') id :string , @Body() UpdateCategoriaDto:UpdateCategoriaDto){
        return this.categoriaService.update(+id,UpdateCategoriaDto)
    }

    //Ruta para eliminar

    @Delete(':id')
    remove(@Param('id') id :string){
        return this.categoriaService.remove(+id)
    }


}
