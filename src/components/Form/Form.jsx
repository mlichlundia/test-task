import "./Form.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../features/tableSlice"
import { setEmail, setName } from "../../features/FormSlice"

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
	const navigate = useNavigate()

	const id = useSelector(state => state.table.tableDataCopy).length + 1
	const name = useSelector(state => state.form.name)
	const email = useSelector(state => state.form.email)
	const [formObject, setFormObject] = useState({ id: id, name: "", email: "" })

	useEffect(() => {
		let obj = { ...formObject }
		obj.id = id
		obj.name = name
		obj.email = email
		setFormObject(obj)
	}, [name, email])

	function handleDecline() {
		dispatch(setName(""))
		dispatch(setEmail(""))
		navigate("/")
	}

	function handleSubmit() {
		dispatch(setName(""))
		dispatch(setEmail(""))
		navigate("/")
	}

	return (
		<div>
			<header className='page-header'>
				<h2>{form.pageTitle}</h2>
			</header>
			<form ref={userForm}>
				<section>
					<div>
						<label htmlFor='name'>{form.inputFields.name}</label>
						<input
							onChange={e => dispatch(setName(e.target.value))}
							value={name}
							name='name'
							type='name'
							required
						/>
					</div>
					<div>
						<label htmlFor='email'>{form.inputFields.email}</label>
						<input
							onChange={e => dispatch(setEmail(e.target.value))}
							value={email}
							name='email'
							type='email'
							required
						/>
					</div>
				</section>
				<div className='form__button-container'>
					<button
						className='button_decline'
						type='button'
						onClick={handleDecline}
					>
						Decline
					</button>
					<button
						type='submit'
						onClick={e => {
							e.preventDefault()
							dispatch(addUser(formObject))
							handleSubmit()
						}}
					>
						submit
					</button>
				</div>
			</form>
		</div>
	)
}
