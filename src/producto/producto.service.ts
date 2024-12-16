import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {


  constructor(

    @InjectRepository(Producto)
    private readonly ProductoRepository: Repository<Producto>,
  ){}

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

  async remove(id: number) {
    return await this.ProductoRepository.softDelete({ id }); //  se le pasa el ID
  }
  async restore(id: number) {
    await this.ProductoRepository.restore(id); // Restaurar un producto eliminado
  }
}
