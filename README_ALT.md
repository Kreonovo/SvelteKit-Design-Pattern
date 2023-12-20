# Kreonovo.com SvelteKit MVC Design Pattern Template

## Introduction

This template is a foundation for SvelteKit projects, using a Model-View-Controller (MVC) design pattern. It's designed for effective organization and scalability, especially when working with external services or databases. The current version focuses on read data flow, with plans to include CRUD operations and API examples in the future.

## Core Design Pattern Principles

1. **Data Fetching**: The server is responsible for fetching data from databases or APIs (Model/Consumer).
2. **Endpoints**: Establish connections between the server and client, functioning as Controllers.
3. **View Management**: Views are handled through `+page.svelte` files, receiving data from `+page.server.ts`.
4. **Request and Response Models**: TypeScript classes define request and response structures for consistency.
5. **Data Transfer Objects (DTOs)**: TypeScript classes facilitate data transfer between the server and UI.
6. **Component Guidelines**: Components should focus on rendering data and emitting events, avoiding business logic.
7. **Route Structure**: Routes contain `+page.svelte`, `+layout.svelte`, and `+page.server.ts` files.

## Collaborative Benefits

Enables simultaneous development by different team members, allowing independent work on service integration, middleware, and UI development.

## Getting Started

1. Clone this repository.
2. Install necessary dependencies.
3. Follow outlined directory structure and design principles for effective project scaling and management.

# Template Documentation

## Project Structure - lib/server Directory

### httpConsumers Directory

- **Organizing by Domain**: Each domain has its own `httpConsumer` managing API integrations.
- **Models Directory**: Within each domain's `httpConsumer`, define request and response models.
- **Response Directory**: Contains definitions for API response schemas, organized by domain.
- **index.ts File**: Exports contents of directories, enhancing code organization.

### index.ts Files for Namespace Organization

Each directory includes an `index.ts` file. This file serves the purpose of exporting the contents of the directory, allowing for the creation of namespaces. While this is an optional discipline, it proves beneficial as the project expands in size and complexity.

Instead of importing modules from specific directories individually, you can streamline imports using a single namespace for example:

```typescript
import type {
	BaseCollectionResponse,
	BaseResponse,
	CharacterResponse,
	ProductCollectionResponse
} from '$lib/server/httpConsumers';
```

### repositories Directory

- **Organizing by Domain**: Separate directories for each domain, facilitating clear database management.
- **Database Connection**: Define domain-specific database connection details.
- **Entities Directory**: Contains entity/model definitions for database tables.

## Project Structure - lib/shared Directory

Houses universally applicable functionality for both client and server.

### Data Transfer Objects (DTOs)

- **Overview**: DTOs manage data flow between different application components.
- **Purpose**:
  - Encapsulation and Structure.
  - Decoupling Layers.
  - Consistent Data Shape.
- **Organization by Domain**: DTOs are organized by domain, reflecting specific data requirements.
- **Composite DTOs in the Views Directory**: Define composite DTOs aggregating data from multiple sources.
- **How to Use DTOs**: Utilize DTOs in routes (`+page.server.ts`) to structure and package data.

### Example:

Here `BasePageDataDto` defines a strict data structure for the page ensuring consistency across all pages.

```typescript
//+page.server.ts
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

## Conclusion

This template from Kreonovo.com ensures scalable, maintainable, and well-structured SvelteKit projects. Adapt it to your needs for a robust MVC architecture in your development endeavors.
