import React from "react";

import { Header, Footer } from "../components";

interface IMainLayoutProps {
	children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export { MainLayout };
