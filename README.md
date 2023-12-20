# README.md for Kreonovo.com SvelteKit MVC Design Pattern Template

## Introduction

This project serves as a foundational template for our internal design pattern for SvelteKit, which closely resembles the Model-View-Controller (MVC) architecture. Our template is tailored to organize and scale SvelteKit projects effectively, especially when integrating with various external services or databases. This version only demonstrates the read data flow, we would like to include all CRUD operations with examples from APIs in the next.

While initially, the implementation might seem extensive, it is designed to simplify and streamline the process as the project scales. This template currently integrates with a DummyJson product endpoint to demonstrate the basic concepts.

## Core Design Pattern Principles

Our design pattern is grounded in the following core principles:

1. **Data Fetching**: Only the server is responsible for fetching data, whether from a database or an API. This part of the architecture is known as the Model or Consumer, as it consumes services.

2. **Endpoints**: Endpoints in the project establish a connection between the server and the client, functioning as Controllers. Their primary role is to facilitate requests from the server to the consumer and relay responses back without performing any business logic.

3. **View Management**: Views are handled through `+page.svelte` files. These views receive data exclusively from `+page.server.ts`, which, in turn, only requests data from an endpoint.

4. **Request and Response Models**: We use TypeScript classes to define the structure of requests to a consumer (`Request models`) and the structure of responses received (`Response models`). Every response from a consumer is encapsulated in a base response class to ensure consistent data shapes from any service.

5. **Data Transfer Objects (DTOs)**: DTOs are TypeScript classes that facilitate data transfer from the server (Model) to the UI (View). This encapsulation is particularly useful when your SvelteKit project is a part of a larger application.

6. **Component Guidelines**: Components, representing Views, are restricted to rendering data and emitting events. They should not contain any business logic.

7. **Route Structure**: Routes should contain only three files: `+page.svelte`, `+layout.svelte`, and `+page.server.ts`. The `+page.server.ts` file is divided into three segments: the `load` function, `actions` function, and a `page helper` class. The `load` function generates predefined DTOs for the page, while the `page helper` class, acting as a local controller for the route, manages data requests and transformations.

## Collaborative Benefits

One significant advantage of this design pattern is its facilitation of simultaneous development by multiple team members. With a decoupled UI, team members can work independently on different aspects of the project, such as service integration, middleware, and UI development.

## Getting Started

To start using this template for your SvelteKit projects:

1. Clone this repository.
2. Install the necessary dependencies.
3. Follow the directory structure and design principles outlined in this README for effective project scaling and management.

# Template Documentation

## Project Structure - lib/server Directory

### httpConsumers Directory

The `lib/server` directory houses server-related integrations, and within it, the `httpConsumers` directory plays a crucial role in managing API integrations.

#### Organizing by Domain

In this template example, the `httpConsumers` directory is organized by domain. Each domain has its own `httpConsumer`, serving as the integration point with an API where requests are initiated and defined responses are received.

#### Models Directory within Each Domain

Within each domain's `httpConsumer`, you'll find a `models` directory. This is where request and response models for that specific domain are defined. As each domain is unique, the request and response models will differ accordingly.

#### Response Directory

The `response` directory, organized by domain, contains definitions for the schemas returned by the integrated API. For instance, in our template example, the path `/httpConsumers/dummyJson/models/responses` showcases specific domains like `/products` or `/users`, where the schema for API responses is defined.

#### index.ts File for Namespace Organization

Each directory within `httpConsumers` includes an `index.ts` file. This file serves the purpose of exporting the contents of the directory, allowing for the creation of namespaces. While this is an optional discipline, it proves beneficial as the project expands in size and complexity.

##### Namespace Example

Instead of importing modules from specific directories individually, such as:

```typescript
import type { BaseCollectionResponse } from '$lib/server/httpConsumers/rickAndMorty/models/baseCollectionResponse';
import type { BaseResponse } from '$lib/server/httpConsumers/baseResponse';
import type { CharacterResponse } from '$lib/server/httpConsumers/rickAndMorty/models/characters/characterResponse';
import type { ProductCollectionResponse } from '$lib/server/httpConsumers/dummyJson/models/products/productCollectionResponse';
```

You can streamline imports using a single namespace:

```typescript
import type {
	BaseCollectionResponse,
	BaseResponse,
	CharacterResponse,
	ProductCollectionResponse
} from '$lib/server/httpConsumers';
```

### Namespace Organization Benefits

This approach enhances code organization, especially as the project scales. It provides a cleaner and more manageable structure for importing modules, ultimately contributing to a more maintainable codebase.

## Project Structure - lib/server Directory (Continued)

### repositories Directory

The `repositories` directory within the `lib/server` structure is dedicated to database integrations. This section outlines how to structure and utilize the `repositories` directory for effective database management.

### Organizing by Domain

In the `repositories` directory, we recommend organizing by domain. Each domain represents a distinct section of your application that interacts with a specific database. This organizational approach facilitates a clear separation of concerns and makes it easier to manage database connections and entities.

### Database Connection

Within each domain, you should define the database connection. This is the entry point for interacting with the database associated with that domain. The connection configuration, credentials, and any other pertinent details should be specified here.

### Entities Directory

Alongside the database connection, the `entities` directory within each domain contains definitions for entities or models that represent the structure of your database tables. These entities define the fields, relationships, and constraints within the database.

### Example Directory Structure

Here's an example directory structure for the `repositories` directory:

```plaintext
/lib
  /server
    /repositories
      /users
        - index.ts (Exports contents of the users directory)
        - databaseConnection.ts (Database connection configuration)
        /entities
          - UserEntity.ts (Definition for the User entity/model)
      /products
        - index.ts
        - databaseConnection.ts
        /entities
          - ProductEntity.ts
```

## Project Structure - lib/shared Directory

Within `lib/shared`, you can expect to find functionality that is universally applicable to both the client and server aspects of your project. This includes modules, dtos, utilities, and other shared resources that contribute to the overall cohesion of your application.

## Data Transfer Objects (DTOs)

### Overview

In the context of our MVC architecture, Data Transfer Objects (DTOs) manage the flow of data between different components of the application. DTOs act as structured containers for data, defining the format and shape of information exchanged between the server (Models) and the UI (+page.svelte).

### Purpose of DTOs

1. **Encapsulation and Structure**: DTOs encapsulate data, providing a structured and well-defined format. They serve as containers for data that needs to be transferred between different layers of the application.

2. **Decoupling Layers**: By using DTOs, we achieve a level of decoupling between the server and the UI. The server can package data into DTOs, and the UI can expect a consistent data structure, regardless of the complexities within the server.

3. **Consistent Data Shape**: All responses from any consumer (Model) are wrapped in a base response class. DTOs contribute to this consistency by defining the expected structure of the data, ensuring uniformity across various services.

### Organization by Domain

DTOs are organized by domain, aligning with the structure of the application. Each domain has its own set of DTOs, reflecting the specific data requirements for that domain. This organization promotes clarity and ensures that data transfer is contextually relevant.

### Composite DTOs in the Views Directory

In addition to domain-specific DTOs, the `views` directory allows you to define composite DTOs. These composite DTOs aggregate data from multiple sources to create a unified structure for the UI (+page.svelte). This proves particularly useful when your SvelteKit project is part of a larger application with diverse data sources.

### How to Use DTOs

In your routes (`+page.server.ts` files), you can utilize DTOs to structure and package data before sending it to the UI. For example:

```typescript
// +page.server.ts

import type { PageServerLoad } from './$types';
import type { BaseResponse, ProductCollectionResponse } from '$lib/server/httpConsumers';
import { ProductCollectionDto } from '$lib/shared/dtos/products';
import { BasePageDataDto, SeoDataDto } from '$lib/shared/dtos';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const dummyJsonProductsPromise: Promise<ProductCollectionResponse> =
		PageHelper.getDummyJsonProducts(fetch, url.searchParams);
	const [dummyJsonProducts] = await Promise.all([dummyJsonProductsPromise]);

	const seo = PageHelper.getSeoMetaData(url);

	const pageData = new ProductCollectionDto(dummyJsonProducts);
	const pageMeta = new SeoDataDto(seo);

	return {
		...BasePageDataDto.getSuccessResponse<ProductCollectionDto, SeoDataDto>(
			pageData,
			pageMeta,
			null,
			null
		)
	};
};
```

DTOs enhance the clarity, maintainability, and consistency of your application's data flow, contributing to a robust MVC architecture.

---

## Conclusion

This template is an integral part of our development process at Kreonovo.com, ensuring that our SvelteKit projects are scalable, maintainable, and efficiently structured. We hope it serves you well in your development endeavors.

---

Feel free to adapt this template to your specific needs and project details. This README provides a basic overview of your design pattern and how it integrates within a SvelteKit project.
