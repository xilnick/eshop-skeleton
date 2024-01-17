import { Test, TestingModule } from '@nestjs/testing';
import { ShippingProviderController } from './shipping-provider.controller';
import { ShippingProviderService } from './shipping-provider.service';

describe('ShippingProviderController', () => {
  let controller: ShippingProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingProviderController],
      providers: [ShippingProviderService],
    }).compile();

    controller = module.get<ShippingProviderController>(
      ShippingProviderController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
