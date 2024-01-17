class FirstProvider implements PaymentProvider {
  requestPayment(
    paymentRequest: PaymentRequestDto,
  ): Promise<ProviderResponseDto> | null {
    return new Promise((resolve) => {
      resolve(new ProviderResponseDto());
    });
  }

  handleResponse(providerResponse: ProviderResponseDto): ProviderResponseDto {
    return null;
  }
}
