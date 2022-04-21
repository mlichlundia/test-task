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

export function deleteUserThunk(id) {
	return function (dispatch) {
		return axios
			.delete(`${API_BASE_URL}/${id}`)
			.then(res => {
				dispatch(deleteUser(id))
			})
			.catch(err => console.error(err))
	}
}

export const tableSlice = createSlice({
	name: "table",
	initialState: {
		tableData: [],
		deleteId: 0,
	},
	reducers: {
		setDeleteId: (state, action) => {
			state.deleteId = action.payload
		},
		deleteUser: state => {
			state.tableData = state.tableData.filter(
				item => item.id !== state.deleteId
			)
		},
	},
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

export const { deleteUser, setDeleteId } = tableSlice.actions
export default tableSlice.reducer
