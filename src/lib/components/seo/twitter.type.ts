export abstract class Twitter {
	article: boolean = false;
	author: string | null | undefined;
	twitterUsername: string | null | undefined;
	image?: { url: string | null | undefined; alt: string | null | undefined };
	metadescription: string | null | undefined;
	pageTitle: string | null | undefined;
	timeToRead: number = 0;
	url: string | null | undefined;
}
