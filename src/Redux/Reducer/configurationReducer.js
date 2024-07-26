import { createSlice } from "@reduxjs/toolkit";

export const configurationReducer = createSlice({
	name: "configuration",
	initialState: {
		message: {
			toast: {
				position: "top-end",
				animation: "true",
				delay: 5000,
			},
		},
		grid: {
			variant: "ag-theme-quartz", //ag-theme-quartz-dark   ||    ag-theme-quartz
			pagination: true,
			paginationPageSize: 5,
			paginationPageSizeSelector: [15, 20, 30],
			rowSelection: "multiple",
		},
		button: {
			variant: "secondary",
			size: "lg",
		},
	},
	reducers: {
		resetConfigurationMessageToast: (state) => {
			state.configuration.message.toast = {
				position: "top-end",
				animation: "true",
				delay: 5000,
			};
		},
	},
});

export const { resetConfigurationMessageToast } = configurationReducer.actions;

export default configurationReducer.reducer;
