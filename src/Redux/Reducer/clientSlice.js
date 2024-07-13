import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
	name: "client",
	initialState: {
		name: "pepito",
		id: "1",
	},
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload;
		},
		changeId: (state, action) => {
			state.id = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeName, changeId } = clientSlice.actions;

export default clientSlice.reducer;
