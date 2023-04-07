import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CustomersModule } from './modules/customers/customers.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [UsersModule, AuthModule, CustomersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
