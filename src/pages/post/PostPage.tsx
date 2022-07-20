import React from "react";
import { useParams } from "react-router-dom";

import { RelatedSection } from "../../components/sections/Related";

//layout
import { MainLayout } from "../../layouts";

import Share from "./sections/Share";
import Tags from "./sections/Tags";
import Content from "./sections/Content";
import Heading from "./sections/Heading";

//mock data
import { post } from "./postMockData";
import { demopic10 } from "../../assets/img";

const PostPage = () => {
	const { id } = useParams();
	return (
		<MainLayout>
			<div className="container">
				<div className="row">
					<div className="col-md-2 col-xs-12">
						<Share />
					</div>
					<div className="col-md-8 col-md-offset-2 col-xs-12">
						ID: {id} {/* TODO: Убрать эту строку, когда сделаем запросы */}
						<Heading
							title={post.title}
							aboutAuthor={post.aboutAuthor}
							authorId={post.authorId}
							authorName={post.authorName}
							authorAvatarUrl={post.authorAvatarUrl}
							postDate={post.postDate}
							postReadTime={post.postReadTime}
						/>
						<img className="featured-image img-fluid" src={demopic10} alt=""></img>
						<Content>
							<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
						</Content>
						<Tags tags={post.tags} />
					</div>
				</div>
			</div>
			<RelatedSection />
		</MainLayout>
	);
};

export default PostPage;
