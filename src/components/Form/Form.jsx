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
		<div className='form__container'>
			<header className='page-header'>
				<h2>{form.pageTitle}</h2>
			</header>

			<Link to='/'>
				<button>submit</button>
			</Link>
		</div>
	)
}
