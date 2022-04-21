import "./Main.css"
import TableInterface from "../TableInterface/TableInterface"

export default function Main() {
	const appName = "Dashboard"
	return (
		<div className='main__wrapper'>
			<header>
				<h1>{appName}</h1>
			</header>
			<TableInterface />
		</div>
	)
}
