export class BasePageDataDto<TPageData, TMetaData> {
	isSuccessful: boolean;
	pageData?: TPageData;
	pageMetadata?: TMetaData | undefined | null;
	notificationMessage: string | undefined | null;
	redirectTo?: string | undefined | null;

	constructor({
		pageData,
		pageMetadata,
		notificationMessage = null,
		isSuccessful = true,
		redirectTo = null
	}: {
		pageData: TPageData;
		pageMetadata?: TMetaData | undefined | null;
		notificationMessage?: string | undefined | null;
		isSuccessful?: boolean;
		redirectTo?: string | undefined | null;
	}) {
		this.isSuccessful = isSuccessful;
		this.pageData = pageData;
		this.pageMetadata = pageMetadata;
		this.notificationMessage = notificationMessage;
		this.redirectTo = redirectTo;
	}

	static getFailedResponse(notificationMessage: string): BasePageDataDto<null, null> {
		let basepageDataDto = new BasePageDataDto<null, null>({
			pageData: null,
			pageMetadata: null,
			notificationMessage: notificationMessage,
			isSuccessful: false,
			redirectTo: null
		});
		return JSON.parse(JSON.stringify(basepageDataDto));
	}

	static getSuccessResponse<TPageData, TMetaData>(
		pageData: TPageData,
		pageMetadata?: TMetaData | undefined | null,
		notificationMessage?: string | undefined | null,
		redirectTo?: string | undefined | null
	): BasePageDataDto<TPageData, TMetaData> {
		let basepageDataDto = new BasePageDataDto<TPageData, TMetaData>({
			pageData: pageData,
			pageMetadata: pageMetadata,
			notificationMessage: notificationMessage,
			isSuccessful: true,
			redirectTo: redirectTo
		});
		return JSON.parse(JSON.stringify(basepageDataDto));
	}

	static getEmptySuccessResponse(): BasePageDataDto<null, null> {
		let pageDataDto = new BasePageDataDto<null, null>({
			pageData: null,
			pageMetadata: null,
			notificationMessage: null,
			isSuccessful: true,
			redirectTo: null
		});
		return JSON.parse(JSON.stringify(pageDataDto));
	}
}
