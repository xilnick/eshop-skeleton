import { Test, TestingModule } from '@nestjs/testing';
import { ShippingProviderService } from './shipping-provider.service';

describe('ShippingProviderService', () => {
  let service: ShippingProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingProviderService],
    }).compile();

    service = module.get<ShippingProviderService>(ShippingProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
