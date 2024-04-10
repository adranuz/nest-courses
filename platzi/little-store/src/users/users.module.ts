import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { CustomerController } from './controllers/customers/customers.controller';
import { UsersService } from './services/users/users.service';
import { CustomersService } from './services/customers/customers.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
  imports: [ProductsModule],
})
export class UsersModule {}
