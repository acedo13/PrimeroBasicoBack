import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'ProyecBasico',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // Solo en desarrollo, crea las tablas automáticamente
    }),
    
    ProductosModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
