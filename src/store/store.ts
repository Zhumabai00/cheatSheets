import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../../src/services/PostService";


const rootReducer = combineReducers({
	userReducer,
	[postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
