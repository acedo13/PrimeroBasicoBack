import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entity/categoria.entity';
import { Repository } from 'typeorm';
import { createCategoriaDTO } from './dto/create-categories.dto';
import { UpdateCategoriaDto } from './dto/update-categories.dto';

@Injectable()
export class CategoriasService {

    constructor(@InjectRepository(Categoria) private categoriaRepositori: Repository<Categoria>) { }


    //Logica para listar
    finAll() {
        return this.categoriaRepositori.find()
    }

    //Logica para buscar por id
    async findOne(id: number) {
        const categoria = await this.categoriaRepositori.findOne({ where: { id } })
        if (!categoria) {
            throw new NotFoundException(`categoria con el id ${id} no encontrada`)
        }

        return categoria;
    }

    //Logica para crear
    async create(createCategori: createCategoriaDTO) {
        const existe = await this.categoriaRepositori.findOne({
            where: { nombre: createCategori.nombre }
        })
        if (existe) {
            throw new ConflictException(`Ya existe la categoria ${existe.nombre}`)
        }

        const categoria = this.categoriaRepositori.create(createCategori)
        return this.categoriaRepositori.save(categoria)

    }

    //Logica para actualizar
    async update(id: number, updateCategori: UpdateCategoriaDto) {
        const categoria = await this.findOne(id);
        if (updateCategori.nombre && UpdateCategoriaDto.name! == categoria.nombre) {
            const existe = await this.categoriaRepositori.findOne({
                where: {
                    nombre: updateCategori.nombre
                }
            })

            if (existe) {
                throw new ConflictException('Ya existe una categoria con ese nombre')
            }

        }
        Object.assign(categoria, updateCategori)
        return this.categoriaRepositori.save(categoria)
    }

//Logica para eliminar
   async remove(id: number) {
    const category = await this.findOne(id);

    if (category.productos && category.productos.length > 0) {
      throw new ConflictException(
        `No se puede eliminar la categoría porque tiene ${category.productos.length} producto(s) asociado(s)`,
      );
    }

    await this.categoriaRepositori.remove(category);

    return {
      message: 'Categoría eliminada correctamente',
      category,
    };
  }


}
