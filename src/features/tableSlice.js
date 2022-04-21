import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_BASE_URL } from "../constants"

export const getTableData = createAsyncThunk("getTableData", () =>
	axios
		.get(API_BASE_URL)
		.then(res => {
			return res.data
		})
		.catch(err => console.error(err))
)

export const tableSlice = createSlice({
	name: "table",
	initialState: {
		tableData: [],
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getTableData.fulfilled, (state, action) => {
				state.tableData = action.payload
			})
			.addCase(getTableData.rejected, (state, action) => {
				console.log(state, action)
			})
	},
})

export default tableSlice.reducer
