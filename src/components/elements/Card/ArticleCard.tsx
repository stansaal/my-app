import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { CardBlock, ICardBlockProps } from "./CardBlock";

export interface IArticleCardCardProps extends ICardBlockProps {
	thumbUrl?: string;
}

const ArticleCard: React.FC<IArticleCardCardProps> = (props) => {
	const { link, title, thumbUrl } = props;

	return (
		<Card>
			{!!thumbUrl && (
				<Link to={link ?? "#"}>
					<img className="img-fluid" src={thumbUrl} alt={title ?? ""} />
				</Link>
			)}
			<CardBlock {...props} />
		</Card>
	);
};

export { ArticleCard };
