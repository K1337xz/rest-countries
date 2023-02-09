import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar(props) {
	return (
		<header>
			<nav className="mainNav">
				<h1>Where in the world?</h1>
				<label htmlFor="themeSwitcher">
					<span>
						<FontAwesomeIcon icon="fa-light fa-moon" />
					</span>
					<input
						type="checkbox"
						id="themeSwitcher"
						onChange={props.themeSwitcher}
					/>
					LightMode
				</label>
			</nav>
		</header>
	);
}
