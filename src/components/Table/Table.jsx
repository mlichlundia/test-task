import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { changeIsActive } from "../../features/popUpDeleteSlice"
import { setDeleteId } from "../../features/tableSlice"
import "./Table.css"

export default function Table() {
	const dispatch = useDispatch()
	const tableHeader = [
		"id",
		"name",
		"username",
		"email",
		"city",
		"edit",
		"delete",
	]

	const tableData = useSelector(state => state.table.tableDataCopy)

	return (
		<div className='table__container'>
			<table>
				<thead>
					<tr>
						{tableHeader.map(item => (
							<th key={item}>
								<h3>{item}</h3>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map(item => (
						<tr key={item.email}>
							<td>
								<p className='p1'>{item?.id}</p>
							</td>
							<td>
								<p className='p1'>{item.name}</p>
							</td>
							<td>
								<p className='p1'>{item?.username}</p>
							</td>
							<td>
								<p className='p1'>{item.email}</p>
							</td>
							<td>
								<p className='p1'>{item?.address?.city}</p>
							</td>
							<td>
								<Link to='/form'>
									<button className='button_edit'>edit</button>
								</Link>
							</td>
							<td>
								<button
									className='button_delete'
									onClick={() => {
										dispatch(setDeleteId(item.id))
										dispatch(changeIsActive())
									}}
								>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
