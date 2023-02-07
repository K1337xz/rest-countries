import React from "react";
import axios from "axios";

export default function Countries(props) {
	return (
		<div className="card" onClick={props.toggleClick}>
			<div className="topImg">
				<img src={props.src} />
			</div>
			{props.isActive ? (
				<div className="cardContent">
					<h3>{props.nameCountry}</h3>
					<p>Population: {props.countryPopulation}</p>
					<p>Region: {props.countryRegion}</p>
					<p>Sub Region: {props.countrySub}</p>
					<p>Capital: {props.countryCapital}</p>
					<div className="bottomContent">
						<p>Top Level Domain: {props.countryDomain}</p>
						<p>Currencies: {props.countryCurriences}</p>
						<p>Capital: {props.countryCapital}</p>
					</div>
				</div>
			) : (
				<div className="cardContent">
					<h3>{props.nameCountry}</h3>
					<p>Population: {props.countryPopulation}</p>
					<p>Region: {props.countryRegion}</p>
					<p>Capital: {props.countryCapital}</p>
				</div>
			)}
		</div>
	);
}
