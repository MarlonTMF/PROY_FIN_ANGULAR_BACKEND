import { Module } from '@nestjs/common';
import { Producto } from './producto/entities/producto.entity';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal:true,
    }),

    ProductoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT), 
      username:process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true, 
      ssl: process.env.POSTGRES_SSL === "true",
      extra: {
        ssl:
          process.env.POSTGRES_SSL === "true"
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }), 
    ClienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
