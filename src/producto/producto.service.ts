import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { Like } from 'typeorm';


@Injectable()
export class ProductoService {


  constructor(

    @InjectRepository(Producto)
    private readonly ProductoRepository: Repository<Producto>,
  ){}

    // Método para obtener relojes por categoría
    async findByCategoria(categoria: string) {
      return await this.ProductoRepository.find({ where: { categoria } });
    }
  
    // Método para buscar relojes por nombre y caja
    async findByNombreYCaja(nombre: string, caja: string) {
      return await this.ProductoRepository.find({
        where: {
          nombre: Like(`%${nombre}%`),  // Filtrar por nombre (contiene el texto)
          caja: Like(`%${caja}%`)        // Filtrar por caja (contiene el texto)
        }
      });
    }

  async create(createProductoDto: CreateProductoDto) {
    const Producto = this.ProductoRepository.create(createProductoDto);
    return await this.ProductoRepository.save(Producto);

  }

  async findAll() {
    return await this.ProductoRepository.find();
  }

  async findOne(id: number) {
    return await this.ProductoRepository.findOneBy({ id });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.ProductoRepository.update(id, updateProductoDto);
  }

  // async remove(id: number) {
  //   return await this.ProductoRepository.softDelete({ id }); //  se le pasa el ID
  // }

  async remove(id: number) {
    // Utilizar delete en lugar de softDelete para eliminar realmente el registro
    const result = await this.ProductoRepository.delete(id);

    // Verificar si se eliminó el producto
    if (result.affected === 0) {
        throw new Error('Producto no encontrado');
    }

    return result;
}

  async restore(id: number) {
    await this.ProductoRepository.restore(id); // Restaurar un producto eliminado
  }
}
