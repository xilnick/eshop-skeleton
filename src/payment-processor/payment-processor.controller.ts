import { Body, Controller, Get } from '@nestjs/common';
import { PaymentProcessorService } from './payment-processor.service';

@Controller('payment-processor')
export class PaymentProcessorController {
  constructor(
    private readonly paymentProcessorService: PaymentProcessorService,
  ) {}

  @Get('process-payment')
  processPayment(@Body() body: any) {
    return this.paymentProcessorService.processPayment(body);
  }

  @Get('process-webhook')
  processWebhook(@Body() body: any) {
    return this.paymentProcessorService.processPayment(body);
  }
}
