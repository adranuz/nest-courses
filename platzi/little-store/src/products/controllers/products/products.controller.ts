import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  // Res
  ParseIntPipe, // transforma el parametro string a un numero
} from '@nestjs/common';

// import { Response } from 'express';
import { ProductsService } from '../../services/products/products.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('filter')
  getProductFilter() {
    return 'yo soy un Filter';
  }

  @Get('')
  getProducts(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string = '',
  ) {
    const filters = { limit, offset, brand };

    return { filters, products: this.productService.findAll() };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduct(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
