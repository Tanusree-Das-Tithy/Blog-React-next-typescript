/** @format */

export interface Blog {
	avatar?: string;
	title?: string;
	shortdesc?: string;
	userid?: number;
	longdesc?: string;
	ID: string;
}

export interface BlogDetail {
	blog: Blog;
}
