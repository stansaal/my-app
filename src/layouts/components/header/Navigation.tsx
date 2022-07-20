import React from "react";
import { Link } from "react-router-dom";

export interface INavigation {
	links: { name: string; to: string }[];
}

const Navigation: React.FC<INavigation> = ({ links }) => {
	return (
		<ul className="navbar-nav ml-auto">
			{links.map((link, index) => (
				<li key={index} className="nav-item">
					<Link className="nav-link" to={link.to}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export { Navigation };
