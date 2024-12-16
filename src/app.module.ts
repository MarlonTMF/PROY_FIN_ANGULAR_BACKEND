import { Module } from '@nestjs/common';
import { Producto } from './producto/entities/producto.entity';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    ProductoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username:'root',
      password:'Marlon22',
      database:'tienda_reloj',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ClienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
