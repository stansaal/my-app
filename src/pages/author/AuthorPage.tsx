import React from "react";
import { useParams } from "react-router-dom";

//layout
import { MainLayout } from "../../layouts";
import ArticlesList from "./sections/ArticlesList";

//mock data
import { authorPosts } from "./articlesMockData";
import { author } from "./authorMockData";

import AuthorMeta from "./sections/AuthorMeta";

const AuthorPage = () => {
	const { id } = useParams();

	return (
		<MainLayout>
			ID: {id} {/* TODO: Убрать эту строку, когда сделаем запросы */}
			<AuthorMeta name={author.name} description={author.description} avatarUrl={author.avatarUrl} />
			<ArticlesList list={authorPosts} />
		</MainLayout>
	);
};

export default AuthorPage;
