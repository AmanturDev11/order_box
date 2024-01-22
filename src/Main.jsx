import React, { useState } from "react";
import { PRODUCTS } from "./product";
import "./Main.css";

function Main() {
	const [cartItems, setCartItems] = useState({
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
	});

	const addToCart = (id) => {
		setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
	};

	const subFromCart = (id) => {
		setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] - 1 }));
	};
	const removeFromCart = (id) => {
		setCartItems((cartItems) => ({ ...cartItems, [id]: (cartItems[id] = 0) }));
	};

	const totalAmount = () => {
		let amount = 0;
		for (const key in cartItems) {
			if (cartItems[key] > 0) {
				let productInfo = PRODUCTS.find(
					(product) => product.id === Number(key)
				);
				amount += Math.floor(cartItems[key] * productInfo.price);
			}
		}

		return amount;
	};

	return (
		<div className="container">
			{PRODUCTS.map((product) => (
				<div key={product.id}>
					<img
						className="img_div"
						src={product.productImage}
						alt={product.productName}
					/>
					<p>{product.productName}</p>
					<p>${product.price}</p>
					<button onClick={() => addToCart(product.id)} className="button">
						Купить{" "}
					</button>
				</div>
			))}
			<div className="conta">
				<div className="container2">
					<h1>Корзину</h1>
					<p>Все цуме: ${totalAmount()}</p>
					{PRODUCTS.map((product) => {
						if (cartItems[product.id] > 0) {
							return (
								<>
									<div className="content">
										<div className="container3">
											<img
												className="imgres"
												src={product.productImage}
												alt=""
											/>
											x <p>{cartItems[product.id]}</p>
										</div>
										<div className="containerbutton">
											<button
												onClick={() => removeFromCart(product.id)}
												className="buttont">
												Delete
											</button>
											<button
												onClick={() => addToCart(product.id)}
												className="botton">
												+
											</button>
											<button
												onClick={() => subFromCart(product.id)}
												className="bottonred">
												-
											</button>
										</div>
									</div>
									<div className="container4">
										<p>{product.productName}</p>
										<p>-</p>
										<p>${product.price}</p>
									</div>
								</>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default Main;
