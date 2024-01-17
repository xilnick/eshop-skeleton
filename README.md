# Eshop API (nestjs based)

## Lets start with basic file structure

Keep all source files in `src` folder for better maintainability and readability.
The folder structure is organized to keep related files together

### Our entry module and main entry point:
 - app.module.ts - main module
 - app.controller.ts - main controller
 - config.ts - configuration file

### Separate folders foe each module with controller, dto, entities and and services for business logic:
 - category
 - customer
 - order
 - payment-processor
 - product
 - shipping-provider

Separation of Business Logic:
 - Each entity has its own controller, model and service files
 - Controllers handle the business logic, routes handle the HTTP endpoints, models define the data structure, and services handle the communication between controllers and models.

Design Choices:
 - We will choose a quite widespread modular structure to separate concerns following MVC concepts
 - Used a service layer to encapsulate business logic
 - In order to implement payment provider variability we will use Bridge Pattern for handling multiple payment providers encapsulation their integration logic in separate classes with common interface
