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

export function addUserThunk(user) {
	return function (dispatch) {
		return axios
			.post(API_BASE_URL, user)
			.then(res => {
				dispatch(addUser({ ...res.data }))
			})
			.catch(err => console.error(err))
	}
}

export function updateUserThunk(user) {
	return function (dispatch) {
		return axios
			.put(API_BASE_URL, user)
			.then(res => {
				dispatch(updateUser({ ...res.data }))
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
		updateIdx: 0,
		hasUsers: true,
		isNewUser: true,
		az: "initial",
	},
	reducers: {
		setDeleteId: (state, action) => {
			state.deleteId = action.payload
		},

		setIsNew: (state, action) => {
			state.isNewUser = action.payload
		},

		setUpdateIdx: (state, action) => {
			state.updateIdx = action.payload
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
					username: action.payload.username,
					email: action.payload.email,
					address: { city: action.payload.city },
				},
			]
			state.tableData = [
				...state.tableData,
				{
					id: action.payload.id,
					name: action.payload.name,
					username: action.payload.username,
					email: action.payload.email,
					address: { city: action.payload.city },
				},
			]
		},

		updateUser: (state, action) => {
			state.tableDataCopy[state.updateIdx] = {
				...state.tableDataCopy[state.updateIdx],
				name: action.payload.name,
				username: action.payload.username,
				email: action.payload.email,
				address: { city: action.payload.city },
			}

			state.tableData[state.updateIdx] = {
				...state.tableData[state.updateIdx],
				name: action.payload.name,
				username: action.payload.username,
				email: action.payload.email,
				address: { city: action.payload.city },
			}
		},

		sortByUsername: state => {
			if (state.az === "initial") {
				return
			}
			state.tableDataCopy = state.az
				? state.tableDataCopy.sort((a, b) =>
						a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1
				  )
				: state.tableDataCopy.sort((a, b) =>
						a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1
				  )
		},

		sortAz: state => {
			if (state.az === "initial") {
				state.az = true
			} else {
				state.az = state.az ? false : true
			}
		},

		tableHasUsers: state => {
			state.hasUsers = state.tableData.length ? true : false
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

export const {
	addUser,
	updateUser,
	deleteUser,
	setDeleteId,
	setIsNew,
	setUpdateIdx,
	sortByUsername,
	sortAz,
	tableHasUsers,
} = tableSlice.actions
export default tableSlice.reducer
