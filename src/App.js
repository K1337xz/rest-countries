import React from "react";
import "./assets/css/index.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
	const [theme, setTheme] = React.useState({
		darkTheme: false,
	});
	function themeToggle(event) {
		setTheme((prevVal) => !prevVal);
	}
	return (
		<div className="app" data-theme={theme ? "light" : "dark"}>
			<Navbar themeSwitcher={themeToggle} />
			<Main />
		</div>
	);
}
