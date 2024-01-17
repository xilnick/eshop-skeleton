import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { ShippingProviderModule } from './shipping-provider/shipping-provider.module';
import { PaymentProcessorModule } from './payment-processor/payment-processor.module';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    CustomerModule,
    OrderModule,
    ShippingProviderModule,
    PaymentProcessorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
