import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTableData } from "../../features/tableSlice"
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
	const tableData = useSelector(state => state.table.tableData)

	useEffect(() => {
		dispatch(getTableData())
	}, [])

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
						<tr key={item.id}>
							<td>
								<p className='p1'>{item.id}</p>
							</td>
							<td>
								<p className='p1'>{item.name}</p>
							</td>
							<td>
								<p className='p1'>{item.username}</p>
							</td>
							<td>
								<p className='p1'>{item.email}</p>
							</td>
							<td>
								<p className='p1'>{item.address.city}</p>
							</td>
							<td>
								<button className='button_edit'>edit</button>
							</td>
							<td>
								<button className='button_delete'>delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
