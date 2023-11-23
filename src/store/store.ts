import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { goodsApi } from "@services/goodsApi"


const rootReducer = combineReducers({
	// userReducer,
	// [postAPI.reducerPath]: postAPI.reducer
	[goodsApi.reducerPath]: goodsApi.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
