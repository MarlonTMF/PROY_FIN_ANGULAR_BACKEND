import { Controller,Query, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productoService.findOne(+id);
  }


  // Ruta para obtener relojes por categoría
  @Get('categoria/:categoria')
  findByCategoria(@Param('categoria') categoria: string) {
    return this.productoService.findByCategoria(categoria);
  }

  // Ruta para buscar relojes por nombre y caja
  @Get('buscar')
  findByNombreYCaja(
    @Query('nombre') nombre: string,
    @Query('caja') caja: 
    string
  ) {
    return this.productoService.findByNombreYCaja(nombre, caja);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productoService.remove(+id);
  }
}

