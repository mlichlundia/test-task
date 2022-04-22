import "./Form.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, setIsNew, updateUser } from "../../features/tableSlice"
import {
	isEmailValid,
	isNameValid,
	setEmail,
	setName,
} from "../../features/formSlice"

export default function Form() {
	const form = {
		pageTitle: "form",
		inputFields: {
			name: "Name",
			email: "Email",
		},
	}

	const isName = useSelector(state => state.form.isName)
	const isEmail = useSelector(state => state.form.isEmail)

	const userForm = useRef()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const id = useSelector(state => state.table.tableDataCopy).length + 1
	const name = useSelector(state => state.form.name)
	const email = useSelector(state => state.form.email)
	const isNewUser = useSelector(state => state.table.isNewUser)
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
		dispatch(setIsNew(true))
		dispatch(isNameValid(true))
		dispatch(isEmailValid(true))
		navigate("/")
	}

	function handleSubmit() {
		if (isName && isEmail) {
			dispatch(setName(""))
			dispatch(setEmail(""))
			dispatch(setIsNew(true))
			dispatch(isNameValid(true))
			dispatch(isEmailValid(true))
			navigate("/")
		}
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
							onChange={e => {
								dispatch(setName(e.target.value))
								dispatch(isNameValid())
							}}
							value={name}
							name='name'
							type='name'
							required
						/>
					</div>
					<p className={isName ? "text-no-error" : "text-error"}>
						Name is invalid. The name should contain from 2 to 50 symbols
					</p>
					<div>
						<label htmlFor='email'>{form.inputFields.email}</label>
						<input
							onChange={e => {
								dispatch(setEmail(e.target.value))
								dispatch(isEmailValid())
							}}
							value={email}
							name='email'
							type='email'
							required
						/>
					</div>
					<p className={isEmail ? "text-no-error" : "text-error"}>
						Email is invalid. The email should contain @ symbol
					</p>
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
							isNewUser
								? dispatch(addUser(formObject))
								: dispatch(updateUser(formObject))
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
