import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [UsersModule, AuthModule, ProductsModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
