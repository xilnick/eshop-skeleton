import { Module } from '@nestjs/common';
import { ShippingProviderService } from './shipping-provider.service';
import { ShippingProviderController } from './shipping-provider.controller';

@Module({
  controllers: [ShippingProviderController],
  providers: [ShippingProviderService],
})
export class ShippingProviderModule {}
