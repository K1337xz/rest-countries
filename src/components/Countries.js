import React from "react";
import axios from "axios";

export default function Countries(props) {
	function elo() {
		console.log("x");
	}
	return (
		<div className="card">
			<div className="topImg">
				<img src={props.src} />
			</div>
			<div className="cardContent">
				<h3>{props.nameCountry}</h3>
				<p>Population: {props.countryPopulation}</p>
				<p>Region: {props.countryRegion}</p>
				<p>Capital: {props.countryCapital}</p>
			</div>
		</div>
	);
}
