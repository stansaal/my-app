import React from "react";
import { Link } from "react-router-dom";
import { IArticleCardCardProps } from "./ArticleCard";
import { Card } from "./Card";
import { CardBlock } from "./CardBlock";

const ArticleCardRow: React.FC<IArticleCardCardProps> = (props) => {
	const { thumbUrl, title, link } = props;
	return (
		<Card>
			<div className="row">
				{!!thumbUrl && (
					<div className="col-md-5 wrapthumbnail">
						<Link to={link ?? "#"}>
							<img className="thumbnail" src={thumbUrl} alt={title ?? ""} />
						</Link>
					</div>
				)}
				<div className="col-md-7">
					<CardBlock {...props} />
				</div>
			</div>
		</Card>
	);
};

export { ArticleCardRow };
