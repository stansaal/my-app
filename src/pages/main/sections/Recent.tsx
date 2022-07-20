import React from "react";
import { ArticleCard, CardColumns } from "../../../components/elements/Card";

import { SectionTitle } from "../../../components/sections/common";

//mock data
import { recentArticles } from "./articlesMockData";

const RecentSection = () => {
	return (
		<section className="recent-posts">
			<SectionTitle>All Stories</SectionTitle>
			<CardColumns className="listrecent">
				{recentArticles.map((article) => (
					<ArticleCard
						key={article.id}
						link={`/post/${article.id}`}
						thumbUrl={article.thumbUrl}
						title={article.title}
						text={article.text}
						postDate={article.postDate}
						postReadTime={article.postReadTime}
						authorName={article.authorName}
						authorLink={`/author/${article.authorId}`}
						authorAvatarUrl={article.authorAvatarUrl}
					/>
				))}
			</CardColumns>
		</section>
	);
};

export default RecentSection;
