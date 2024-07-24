import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
	name: "user",
	initialState: {
		login: {
			session: "56uuyghnkj43ewbnfwelidsuafcysd8xcudscxbn",
			user: "jmiranda",
			name: "Jefferson Miranda",
			loginHour: "07:09:90",
			loginDate: "12/12/20024",
		},
	},
	reducers: {
		resetUser: (state) => {
			state.configuration.message.toast = {
				login: {
					session: "56uuyghnkj43ewbnfwelidsuafcysd8xcudscxbn",
					user: "jmiranda",
					name: "Jefferson Miranda",
					loginHour: "07:09:90",
					loginDate: "12/12/20024",
				},
			};
		},
	},
});

export const { resetConfigurationMessageToast } = userReducer.actions;

export default userReducer.reducer;
