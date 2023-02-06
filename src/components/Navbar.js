import React from "react";

export default function Navbar(props) {
	return (
		<header>
			<nav className="mainNav">
				<h1>Where in the world?</h1>
				<label htmlFor="themeSwitcher">
					<input type="checkbox" id="themeSwitcher" />
					Darkmode
				</label>
			</nav>
		</header>
	);
}