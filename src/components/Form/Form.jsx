import "./Form.css"
import { Link } from "react-router-dom"
import { useRef } from "react"

export default function Form() {
	const form = {
		pageTitle: "form",
		inputFields: {
			name: "Name",
			email: "Email",
		},
	}

	const userForm = useRef()

	return (
		<div>
			<header className='page-header'>
				<h2>{form.pageTitle}</h2>
			</header>
			<form ref={userForm}>
				<section>
					<div>
						<label htmlFor='name'>{form.inputFields.name}</label>
						<input name='name' type='name' required />
					</div>
					<div>
						<label htmlFor='email'>{form.inputFields.email}</label>
						<input name='email' type='email' required />
					</div>
				</section>
				<div className='form__button-container'>
					<Link to='/'>
						<button className='button_decline'>Decline</button>
					</Link>
					<button type='submit'>submit</button>
				</div>
			</form>
		</div>
	)
}
