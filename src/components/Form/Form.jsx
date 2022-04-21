import { Link } from "react-router-dom"

export default function Form() {
	const form = {
		pageTitle: "form",
		inputFields: {
			name: "",
			email: "",
		},
	}
	return (
		<div className='main__wrapper'>
			<header>
				<h1>{form.pageTitle}</h1>
			</header>

			<Link to='/'>
				<button>submit</button>
			</Link>
		</div>
	)
}
