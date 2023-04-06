import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdressesModule } from './modules/adresses/adresses.module';
import { RecipientsModule } from './modules/recipients/recipients.module';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, AdressesModule, RecipientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
