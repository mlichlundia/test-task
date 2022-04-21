import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import tableReducer from "../features/tableSlice"

export default configureStore({
	reducer: {
		table: tableReducer,
	},
	middleware: [thunk],
})
