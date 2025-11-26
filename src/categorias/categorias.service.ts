import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entity/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

    constructor(@InjectRepository(Categoria) private categoriaRepositori: Repository<Categoria>) { }


    finAll() {
        return this.categoriaRepositori.find()
    }


}
