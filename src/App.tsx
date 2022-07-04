import React, { useState } from "react";

//pages
import MainPage from "./pages/main";
import PostPage from "./pages/post";
import AuthorPage from "./pages/author";

function App() {
	const [page] = useState(2);

	return (
		<div className="App">
			{page === 0 && <MainPage />}
			{page === 1 && <PostPage />}
			{page === 2 && <AuthorPage />}
		</div>
	);
}

export default App;
