import { createSlice } from "@reduxjs/toolkit";

const init = {
	message: {
		active: false,
		title: "",
		msg: "",
		variantColor: "",
		hour: "",
		date: "",
	},
};

export const generalReducer = createSlice({
	name: "general",
	initialState: {
		message: {
			active: false,
			title: "",
			msg: "",
			variantColor: "",
			hour: "",
			date: "",
		},
	},
	reducers: {
		changeMessage: (state, action) => {
			state.message = action.payload;
		},
		resetMessage: (state) => {
			state.message = init.message;
		},
	},
});

export const { changeMessage, resetMessage } = generalReducer.actions;

export default generalReducer.reducer;
