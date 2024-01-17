import { Controller, Get } from '@nestjs/common';
import { ShippingProviderService } from './shipping-provider.service';

@Controller('shipping-provider')
export class ShippingProviderController {
  constructor(
    private readonly shippingProviderService: ShippingProviderService,
  ) {}

  @Get()
  get() {
    return this.shippingProviderService.get();
  }
}
