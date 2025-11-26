

import { PartialType } from '@nestjs/mapped-types';
import { createCategoriaDTO } from './create-categories.dto';



export class UpdateCategoriaDto extends PartialType(createCategoriaDTO) {}







