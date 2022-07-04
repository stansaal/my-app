import React from "react";

//layout
import { MainLayout } from "../../layouts";
import ArticlesList from "./sections/ArticlesList";

//mock data
import { authorPosts } from "./sections/articlesMockData";

const AuthorPage = () => {
	return (
		<MainLayout>
			<ArticlesList list={authorPosts} />
		</MainLayout>
	);
};

export default AuthorPage;
