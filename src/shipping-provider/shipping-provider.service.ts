import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingProviderService {
  get() {
    return `This action returns shippingProvider`;
  }
}
