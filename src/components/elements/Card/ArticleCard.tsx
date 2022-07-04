import React from "react";
import { Card } from "./Card";
import { CardBlock, ICardBlockProps } from "./CardBlock";

export interface IArticleCardProps extends ICardBlockProps {
	thumbUrl?: string;
}

const ArticleCard: React.FC<IArticleCardProps> = (props) => {
	const { link, title, thumbUrl } = props;

	return (
		<Card>
			{!!thumbUrl && (
				<a href={link ?? "#"}>
					<img className="img-fluid" src={thumbUrl} alt={title ?? ""} />
				</a>
			)}
			<CardBlock {...props} />
		</Card>
	);
};

export { ArticleCard };
