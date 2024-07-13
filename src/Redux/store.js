import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Reducer/counterSlice";
import clientReducer from "../Redux/Reducer/clientSlice";
import generalReducer from "../Redux/Reducer/generalReducer";
import configurationReducer from "../Redux/Reducer/configurationReducer";

export default configureStore({
	reducer: {
		counter: counterReducer,
		client: clientReducer,
		general: generalReducer,
		configuration: configurationReducer,
	},
});
