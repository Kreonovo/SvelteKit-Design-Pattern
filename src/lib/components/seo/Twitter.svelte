<script lang="ts">
	import type { Twitter } from './twitter.type';
	export let componentData: Twitter;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={componentData?.pageTitle} />
	<meta name="twitter:description" content={componentData?.metadescription} />
	<meta name="twitter:url" content={componentData?.url} />
	{#if componentData?.image}
		<meta name="twitter:image" content={componentData?.image.url} />
		<meta name="twitter:image:alt" content={componentData?.image.alt} />
	{/if}
	{#if componentData?.twitterUsername}
		<meta name="twitter:creator" content={`@${componentData?.twitterUsername}`} />
		<meta name="twitter:site" content={`A;@${componentData?.twitterUsername}`} />
	{/if}
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content={componentData?.author} />
	{#if componentData?.article && componentData?.timeToRead > 0}
		<meta name="twitter:label2" content="Est. reading time" />
		<meta
			name="twitter:data2"
			content={componentData?.timeToRead !== 1
				? `${componentData?.timeToRead} minutes`
				: '1 minute'}
		/>
	{/if}
</svelte:head>
