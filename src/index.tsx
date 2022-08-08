import "jquery";
import "bootstrap/dist/js/bootstrap";

import "./assets/css/bootstrap.min.css";
import "./assets/css/mediumish.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
