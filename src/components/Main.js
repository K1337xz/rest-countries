import React, { useEffect } from "react";
import axios from "axios";
import Countries from "./Countries";

export default function Main(props) {
	const [countriesItems, setCountriesItems] = React.useState([]);
	const [url, setUrl] = React.useState({
		urlAll: "https://restcountries.com/v3.1/all",
	});

	function selectRegion(event) {
		let selectRegion = event.target.value;
		url.urlAll = `https://restcountries.com/v3.1/region/${selectRegion}`;
	}
	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(url.urlAll);
			setCountriesItems(result.data);
		};
		fetchData();
	}, [selectRegion]);
	const elements = countriesItems.map((item, idx) => {
		return (
			<Countries
				key={idx}
				src={item.flags.svg}
				nameCountry={item.name.common}
				countryPopulation={item.population}
				countryRegion={item.region}
				countryCapital={item.capital}
			/>
		);
	});
	return (
		<main className="container">
			<div className="topSearchForm">
				<form className="mainForm">
					<label htmlFor="searchCountry">
						<input type="text" id="searchCountry" />
					</label>
					<select name="selectRegion" onChange={selectRegion}>
						<option
							value="filterByRegion"
							style={{ display: "none" }}
						>
							Filter by Region
						</option>
						<option value="africa">Africa</option>
						<option value="america">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
				</form>
			</div>
			<div className="countriesWrapper">{elements}</div>
		</main>
	);
}
