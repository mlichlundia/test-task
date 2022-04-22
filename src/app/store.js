import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import formReducer from "../features/FormSlice"
import popUpDeleteReducer from "../features/popUpDeleteSlice"
import tableReducer from "../features/tableSlice"

export default configureStore({
	reducer: {
		table: tableReducer,
		popUpDel: popUpDeleteReducer,
		form: formReducer,
	},
	middleware: [thunk],
})
