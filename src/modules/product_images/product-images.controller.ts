import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { ProductImagesService } from './product-images.service';
import { CreateProductImageDto } from './dto/create-product-images.dto';
import { UpdateProductImageDto } from './dto/update-product-images.dto';


@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @Post()
  create(@Body() createProductImageDto: CreateProductImageDto) {
    return this.productImagesService.create(createProductImageDto);
  }

  @Get()
  findAll() {
    return this.productImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productImagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductImageDto: UpdateProductImageDto) {
    return this.productImagesService.update(id, updateProductImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productImagesService.remove(id);
  }
}