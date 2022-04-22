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

export function AddUserThunk(user) {
	return function (dispatch) {
		return axios
			.post(API_BASE_URL, user)
			.then(res => {
				const id = res.data.id
				const name = res.data.name
				const email = res.data.email
				dispatch(addUser({ id, name, email }))
			})
			.catch(err => console.error(err))
	}
}

export const tableSlice = createSlice({
	name: "table",
	initialState: {
		tableData: [],
		tableDataCopy: [],
		deleteId: 0,
	},
	reducers: {
		setDeleteId: (state, action) => {
			state.deleteId = action.payload
		},
		deleteUser: state => {
			state.tableDataCopy = state.tableDataCopy.filter(
				item => item.id !== state.deleteId
			)
			state.tableData = state.tableData.filter(
				item => item.id !== state.deleteId
			)
		},
		addUser: (state, action) => {
			state.tableDataCopy = [
				...state.tableDataCopy,
				{
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
				},
			]
			state.tableData = [
				...state.tableData,
				{
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
				},
			]
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getTableData.fulfilled, (state, action) => {
				state.tableData = action.payload
				state.tableDataCopy = [...state.tableData]
			})
			.addCase(getTableData.rejected, (state, action) => {
				console.log(state, action)
			})
	},
})

export const { addUser, deleteUser, setDeleteId } = tableSlice.actions
export default tableSlice.reducer
