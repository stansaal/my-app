export interface IArticleCard {
	id: number;
	title?: string;
	text?: string;
	postReadTime?: string;
	postDate?: string;
	authorName?: string;
	authorAvatarUrl?: string;
	authorId: number;
	thumbUrl?: string;
}

export interface IArticle {
	id: number;
	title: string;
	content: string;
	tags?: ITag[];
	aboutAuthor?: string;
	postReadTime?: string;
	postDate?: string;
	authorName?: string;
	authorAvatarUrl?: string;
	authorId: number;
}

export interface ITag {
	link?: string;
	title: string;
}
