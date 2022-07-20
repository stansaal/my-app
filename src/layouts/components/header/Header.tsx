import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/img";
import { Search } from "../../../components/elements/Search";
import { Navigation } from "./Navigation";

const navigation = [
	{ name: "Stories", to: "/" },
	{ name: "Post", to: "/post/1" },
	{ name: "Author", to: "/author/1" },
];

const Header = () => {
	const [searchString, setSearchString] = useState("");

	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
			<button
				className="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExampleDefault"
				aria-controls="navbarsExampleDefault"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<Navigation links={navigation} />
					<Search value={searchString} onChange={(e) => setSearchString(e.target.value)} />
				</div>
			</div>
		</nav>
	);
};

export { Header };
