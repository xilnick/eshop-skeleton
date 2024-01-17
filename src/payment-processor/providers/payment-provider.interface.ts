interface PaymentProvider {
  requestPayment(
    paymentRequest: PaymentRequestDto,
  ): Promise<ProviderResponseDto> | null;

  handleResponse(providerResponse: ProviderResponseDto): void;
}
