import React from "react";
import { Link } from "react-router-dom";

export const ButtonHome = () => {
	return (
		<div>
			<Link to="/">
				<button
					style={{
						fontSize: "1.5rem",
						lineHeight: "1.5rem",
						borderRadius: ".5rem",
						padding: ".5rem",
					}}>
					Home
				</button>
			</Link>
		</div>
	);
};
