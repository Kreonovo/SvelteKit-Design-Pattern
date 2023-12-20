<script lang="ts">
	import { SeoHead, GridCols4, ProductCard, CharacterCard, Container } from '$lib/components';
	import type { SeoDataDto, BasePageDataDto, ProductCharacterViewDto } from '$lib/shared/dtos';

	export let data: BasePageDataDto<ProductCharacterViewDto, SeoDataDto>;

	const dummyProducts = data.pageData?.productCollection?.products!;
	const rickAndMortyCharacters = data.pageData?.characterCollection?.characters!;
	const seoData = data.pageMetadata!;
</script>

<SeoHead componentData={seoData} />
<Container>
	<div class="pb-20">
		<h1 class="text-6xl sm:text-4xl font-bold">Sveltekit MVC Design Pattern Template</h1>
		<p class="mt-4">
			This template is a foundation for our SvelteKit projects, using a Model-View-Controller (MVC)
			design pattern. It's designed for effective organization and scalability, especially when
			working with external services or databases. The current version focuses on read data flow,
			with plans to include CRUD operations and API examples in the future.
		</p>
	</div>

	<div class="max-w-screen-sm">
		<h2 class="text-2xl font-bold">Dummy Json API Products</h2>
		<hr class="mt-4" />
	</div>
	<GridCols4>
		{#each dummyProducts as product}
			<ProductCard componentData={product} />
		{/each}
	</GridCols4>

	<div class="max-w-screen-sm sm:mt-10 mt-20">
		<h2 class="text-2xl font-bold">Rick and Morty API Characters</h2>
		<hr class="mt-4" />
	</div>
	<GridCols4>
		{#each rickAndMortyCharacters as character}
			<CharacterCard componentData={character} />
		{/each}
	</GridCols4>
</Container>
