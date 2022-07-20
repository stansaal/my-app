import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/main";
import PostPage from "./pages/post";
import AuthorPage from "./pages/author";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<MainPage />} />
					<Route path={"post/:id"} element={<PostPage />} />
					<Route path={"author/:id"} element={<AuthorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
