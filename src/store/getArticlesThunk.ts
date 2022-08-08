import { AppThunk } from "./index";

export const getArticlesThunk = (): AppThunk => async (dispatch) => {
	fetch("/")
		.then((resp) => resp.json())
		.then((data) => {
			dispatch({
				type: "PUSH_ARTICLES",
				payload: data,
			});
		});
};
