import React from "react";
import "./assets/css/index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
	const [theme, setTheme] = React.useState({
		darkTheme: false,
	});
	function themeToggle(event) {
		setTheme((prevVal) => !prevVal);
	}
	return (
		<div className="app" data-theme={theme ? "dark" : "light"}>
			<Navbar themeSwitcher={themeToggle} />
			<Main />
			<Footer />
		</div>
	);
}
