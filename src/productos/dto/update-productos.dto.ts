

import { PartialType } from '@nestjs/mapped-types';
import { createProductoDTO } from './create-productos.dto';


export class UpdateCategoriaDto extends PartialType(createProductoDTO) {}


