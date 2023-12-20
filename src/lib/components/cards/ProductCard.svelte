<script lang="ts">
	import type { ProductCard } from './productCard.type';
	export let componentData: ProductCard;
</script>

<div id={`product_${componentData.id}`} class="group relative">
	<div
		class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
	>
		<img
			src={componentData.thumbnail}
			alt={componentData.title}
			class="h-full w-full object-cover object-center lg:h-full lg:w-full"
		/>
	</div>
	<div class="mt-4 flex justify-between">
		<div>
			<h3 class="text-sm text-gray-700">
				<a href="/">
					<span aria-hidden="true" class="absolute inset-0" />
					{componentData.title}
				</a>
			</h3>
			<p class="mt-1 text-sm text-gray-500">{componentData.category}</p>
		</div>
		<p class="text-sm font-medium text-gray-900">${componentData.price}</p>
	</div>
</div>
