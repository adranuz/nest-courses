import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 10,
      image: 'https://i.imgur.com/5x1O2M2.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 20,
      image: 'https://i.imgur.com/5x1O2M2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 30,
      image: 'https://i.imgur.com/5x1O2M2.jpg',
    },
  ];
  private counter = this.products.length;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(payload: any) {
    console.log('payload', payload);
    this.counter = this.counter + 1;
    const newProduct = {
      ...payload,
      id: this.counter,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: any) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFoundException('Product not found');

    this.products[index] = {
      ...this.products[index],
      ...payload,
    };

    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFoundException('Product not found');

    const product = this.products[index];

    this.products.splice(index, 1);

    return product;
  }
}
