import { Link } from "react-router-dom"
import Table from "../Table/Table"
import "./TableInterface.css"

export default function TableInterface() {
	const tableInterface = {
		tableTitle: "user list",
		button: "add new",
	}
	return (
		<main className='table-interface__container'>
			<header>
				<h2>{tableInterface.tableTitle}</h2>
				<Link to='/form'>
					<button>{tableInterface.button}</button>
				</Link>
			</header>
			<Table />
		</main>
	)
}
