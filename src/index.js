import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./app/store"
import { Provider } from "react-redux"
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
	HashRouter,
} from "react-router-dom"
import TableInterface from "./components/TableInterface/TableInterface"
import Form from "./components/Form/Form"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route path='' element={<App />}>
						<Route path='table' element={<TableInterface />} />
						<Route path='form' element={<Form />} />
						<Route path='' element={<Navigate to='table' />} />
					</Route>
				</Routes>
			</HashRouter>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
