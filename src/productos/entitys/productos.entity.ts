import { Categoria } from "src/categorias/entity/categoria.entity";
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from "typeorm";


@Entity('productos')
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    cantidad: number;

    @Column()
    total: number;

    // ✔️ Relación con la tabla categorías
    @ManyToOne(() => Categoria, categoria => categoria.productos)
    @JoinColumn({ name: 'categoria_id' })
    categoria: Categoria;

    // 🔥 Se calcula antes de guardar o actualizar
    @BeforeInsert()
    @BeforeUpdate()
    calcularTotal() {
        this.total = this.precio * this.cantidad;
    }
}
