import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Cliente } from './entities/cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports:[ClienteService]
})
export class ClienteModule {}
