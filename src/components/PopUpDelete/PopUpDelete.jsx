import { useDispatch, useSelector } from "react-redux"
import { changeIsActive } from "../../features/popUpDeleteSlice"
import { deleteUser } from "../../features/tableSlice"
import "./PopUpDelete.css"

export default function PopUpDelete() {
	const dispatch = useDispatch()
	const active = useSelector(state => state.popUpDel.isActive)

	return (
		<div
			className={active ? "pop-up" : "pop-up_closed"}
			onClick={() => {
				dispatch(changeIsActive())
			}}
		>
			<div className='pop-up__container' onClick={e => e.stopPropagation()}>
				<h2>Delete</h2>
				<p className='p1'>Are you sure you want to delete this user?</p>
				<button
					className='button_delete'
					onClick={() => {
						dispatch(deleteUser())
						dispatch(changeIsActive())
					}}
				>
					delete
				</button>
				<button
					className='button_decline'
					onClick={() => {
						dispatch(changeIsActive())
					}}
				>
					decline
				</button>
			</div>
		</div>
	)
}
