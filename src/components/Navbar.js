import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
	return (
		<header>
			<nav className="mainNav">
				<h1>Where in the world?</h1>
				<label htmlFor="themeSwitcher" className="themeLabel">
					<span>
						<FontAwesomeIcon icon={faMoon} size="2x" />
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
