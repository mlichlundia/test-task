import "./Form.css"
import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../features/tableSlice"

export default function Form() {
	const form = {
		pageTitle: "form",
		inputFields: {
			name: "Name",
			email: "Email",
		},
	}

	const userForm = useRef()
	const dispatch = useDispatch()
	const [nameValue, setNameValue] = useState("")

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
					<button type='submit' onSubmit={() => dispatch(addUser())}>
						submit
					</button>
				</div>
			</form>
		</div>
	)
}
