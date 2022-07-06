import React from "react";

export interface INavigation {
	links: { name: string; to: string }[];
}

const Navigation: React.FC<INavigation> = ({ links }) => {
	return (
		<ul className="navbar-nav ml-auto">
			{links.map((link, index) => (
				<li key={index} className="nav-item">
					<a className="nav-link" href={link.to}>
						{link.name}
					</a>
				</li>
			))}
		</ul>
	);
};

export { Navigation };
