/* eslint-disable no-console */
import React from "react";


export default function Product(props) {
	const products = props.data;
	//const history = useHistory();
	//const dispatch = useDispatch();

	return (
		<table>
		<tr  className="table-head-row">
					<td>{products.name}</td> 
					<td> {products.cost} </td>
				</tr>
		</table>
		
	);
}