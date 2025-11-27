import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entitys/productos.entity';
import { Repository } from 'typeorm';
import { createProductoDTO } from './dto/create-productos.dto';
import{UpdateCategoriaDto} from './dto/update-productos.dto'
@Injectable()
export class ProductosService {

  constructor(@InjectRepository(Producto) private productoRepositori: Repository<Producto>) { }



  //listar todos los productos
  async findAll() {
    return this.productoRepositori.find({
      relations:['categoria']
    });
  }


  //Logica para buscar por id
  async findOne(id: number) {
    const producto = await this.productoRepositori.findOne({ where: { id } })
    if (!producto) {
      throw new NotFoundException(`Producto con el id ${id} no encontrada`)
    }

    return producto;
  }

  //Logica para crear
  async create(createCategori: createProductoDTO) {
    const existe = await this.productoRepositori.findOne({
      where: { nombre: createCategori.nombre }
    })
    if (existe) {
      throw new ConflictException(`Ya existe la producto ${existe.nombre}`)
    }

    const producto = this.productoRepositori.create(createCategori)
    return this.productoRepositori.save(producto)

  }

  //Logica para actualizar
  async update(id: number, updateproducto: UpdateCategoriaDto) {
    const producto = await this.findOne(id);
    if ( updateproducto.nombre&& updateproducto.nombre! == producto.nombre) {
      const existe = await this.productoRepositori.findOne({
        where: {
          nombre: updateproducto.nombre
        }
      })

      if (existe) {
        throw new ConflictException('Ya existe una producto con ese nombre')
      }

    }
    Object.assign(producto, UpdateCategoriaDto)
    return this.productoRepositori.save(producto)
  }

  //Logica para eliminar
  async remove(id: number) {
    const category = await this.findOne(id);

    await this.productoRepositori.remove(category);

    return {
      message: 'Categoría eliminada correctamente',
      category,
    };
  }



}
