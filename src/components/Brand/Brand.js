import React from "react";

import { Link } from "react-router-dom";

export const Brand = () => {
	return (
		<Link to="/">
			<h1
				onClick={() => {
					console.log(`soy el titulo`);
				}}>
				Soccer Sportewear
			</h1>
		</Link>
	);
};
