export abstract class SeoHead {
	metaTitle?: string | undefined | null;
	metaDescription?: string | undefined | null;
	metaUrl?: string | undefined | null;
	metaCanonicalUrl?: string | undefined | null;
	openGraphImage?: string | undefined | null;
	useCanonical: boolean = true;
	article: boolean = false;
}
