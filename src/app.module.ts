import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CustomersModule } from './modules/customers/customers.module';

@Module({
  imports: [UsersModule, AuthModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
