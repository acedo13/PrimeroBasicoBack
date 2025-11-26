import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {

    constructor(private categoriaService: CategoriasService) { }

    @Get()
    findAll() {
        return this.categoriaService.finAll();
    }
}
