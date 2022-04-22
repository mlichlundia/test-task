import "./App.css"
import Main from "./components/Main/Main"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTableData } from "./features/tableSlice"

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTableData())
	}, [])
	return <Main />
}

export default App
