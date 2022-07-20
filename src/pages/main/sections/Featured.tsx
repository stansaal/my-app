import React from "react";
import { ArticleCardRow, CardColumns } from "../../../components/elements/Card";

import { SectionTitle } from "../../../components/sections/common";

//mock data
import { featuredArticles } from "./articlesMockData";

const FeaturedSection = () => {
	return (
		<section className="featured-posts">
			<SectionTitle>Featured</SectionTitle>
			<CardColumns className="listfeaturedtag">
				{featuredArticles.map((article) => (
					<ArticleCardRow
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

export default FeaturedSection;
