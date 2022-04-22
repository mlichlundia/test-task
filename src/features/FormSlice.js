import { createSlice } from "@reduxjs/toolkit"

export const formSlice = createSlice({
	name: "form",
	initialState: {
		name: "",
		email: "",
	},
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},
		setEmail: (state, action) => {
			state.email = action.payload
		},
	},
})

export const { setName, setEmail } = formSlice.actions
export default formSlice.reducer
