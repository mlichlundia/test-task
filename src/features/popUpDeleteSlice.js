import { createSlice } from "@reduxjs/toolkit"

export const PopUpDeleteSlice = createSlice({
	name: "popUpDel",
	initialState: {
		isActive: false,
	},
	reducers: {
		changeIsActive: state => {
			state.isActive = state.isActive ? false : true
		},
	},
})

export const { changeIsActive } = PopUpDeleteSlice.actions
export default PopUpDeleteSlice.reducer
