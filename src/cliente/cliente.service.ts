import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

  constructor(

    @InjectRepository(Cliente)
    private readonly ClienteRepository: Repository<Cliente>,
  ){}

  async create(createClienteDto: CreateClienteDto) {
    const Cliente = this.ClienteRepository.create(createClienteDto);
    return await this.ClienteRepository.save(Cliente);
  }

  async findAll() {
    return await this.ClienteRepository.find();
  }

  async findOne(id: number) {
    return await this.ClienteRepository.findOneBy({ id });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return await this.ClienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    // Utilizar delete en lugar de softDelete para eliminar realmente el registro
    const result = await this.ClienteRepository.delete(id);

    // Verificar si se eliminó el producto
    if (result.affected === 0) {
        throw new Error('Cliente no encontrado');
    }

    return result;
}

}





