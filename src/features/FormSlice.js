import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"

export const formSlice = createSlice({
	name: "form",
	initialState: {
		name: "",
		email: "",
		isName: true,
		isEmail: true,
	},
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		},
		setEmail: (state, action) => {
			state.email = action.payload
		},
		isNameValid: (state, action) => {
			if (action.payload) {
				state.isName = action.payload
				return
			}
			if (state.name.length > 50 || state.name.length < 2) {
				state.isName = false
			} else {
				state.isName = true
			}
		},
		isEmailValid: (state, action) => {
			if (action.payload) {
				state.isEmail = action.payload
				return
			}
			if (state.email.indexOf("@") === -1) {
				state.isEmail = false
			} else {
				state.isEmail = true
			}
		},
	},
})

export const { setName, setEmail, isNameValid, isEmailValid } =
	formSlice.actions
export default formSlice.reducer
