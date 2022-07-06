import React, { PropsWithChildren } from "react";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="card">{children}</div>;
};

export { Card };
