import { Injectable } from '@nestjs/common';
import config from '../config';

@Injectable()
export class PaymentProcessorService {
  async processPayment(
    paymentRequest: PaymentRequestDto,
  ): Promise<ProviderResponseDto> {
    return new config.paymentProcessor.provider().requestPayment(
      paymentRequest,
    );
  }
}
