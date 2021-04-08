/* eslint-disable no-console */
import React from "react";
import "../../css/main.css";
//import "../../css/boxicons.min.css";


export default function Product(props) {
	const products = props.data;
	//const history = useHistory();
	//const dispatch = useDispatch();

	return (
		<div>
			<article className="sneaker">
				<img className="sneaker__image" src={products.image} alt="featured1" />
				<span className="sneaker__name">{products.name}</span>
				<span className="sneaker__price">${products.cost}</span>
				<a href="#" className="btn-add">Add to Cart <i className='bx bx-right-arrow-alt btn-icon'></i></a>
			</article>			
		</div>
	);
}