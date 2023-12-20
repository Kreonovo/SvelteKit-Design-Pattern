export class SeoDataDto {
	metaTitle?: string | undefined | null;
	metaDescription?: string | undefined | null;
	metaUrl?: string | undefined | null;
	metaCanonicalUrl?: string | undefined | null;
	openGraphImage?: string | undefined | null;
	article: boolean = false;
	useCanonical: boolean = true;
	constructor(
		metaTitle?: string | undefined | null,
		metaDescription?: string | undefined | null,
		metaUrl?: string | undefined | null,
		metaCanonicalUrl?: string | undefined | null,
		openGraphImage?: string | undefined | null,
		article?: boolean | undefined | null,
		useCanonical?: boolean | undefined | null
	) {
		this.metaTitle = metaTitle;
		this.metaDescription = metaDescription;
		this.metaUrl = metaUrl;
		this.metaCanonicalUrl = metaCanonicalUrl;
		this.openGraphImage = openGraphImage;
		this.article = article ?? false;
		this.useCanonical = useCanonical ?? true;
	}
}
