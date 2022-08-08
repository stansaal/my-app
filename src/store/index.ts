import { Action, AnyAction, combineReducers, configureStore, Reducer, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const initialState = {
	articles: [],
};

type IArticlesAction =
	| AnyAction
	| {
			type: string;
			payload: Array<any>;
	  };

const articlesReducer: Reducer<any, IArticlesAction> = (state = initialState, action) => {
	switch (action.type) {
		case "PUSH_ARTICLES":
			return { ...state, articles: action.payload };
		default:
			return state;
	}
};

export const rootReducer: Reducer = combineReducers({
	articlesReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnT = void> = ThunkAction<ReturnT, RootStore, unknown, Action<string>>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
