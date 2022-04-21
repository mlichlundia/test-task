import "./Main.css"
import PopUpDelete from "../PopUpDelete/PopUpDelete"
import { Outlet } from "react-router-dom"

export default function Main() {
	const appName = "Dashboard"
	return (
		<div className='main__wrapper'>
			<header>
				<h1>{appName}</h1>
			</header>
			<Outlet />
			<PopUpDelete />
		</div>
	)
}
