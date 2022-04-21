import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import popUpDeleteReducer from "../features/popUpDeleteSlice"
import tableReducer from "../features/tableSlice"

export default configureStore({
	reducer: {
		table: tableReducer,
		popUpDel: popUpDeleteReducer,
	},
	middleware: [thunk],
})
