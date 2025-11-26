import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entitys/productos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

constructor(@InjectRepository(Producto)private productoRepositori:Repository<Producto>){}



//listar todos los productos
   async findAll() {
    return this.productoRepositori.find();
  }



}
