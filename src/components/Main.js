import React from "react";
import axios from "axios";
import Countries from "./Countries";

export default function Main() {
	const [allCountries, setAllCountires] = React.useState([]);
	const [clickedCountry, setClickedCountry] = React.useState([]);
	const [isActive, setIsActive] = React.useState(false);
	const url = `https://restcountries.com/v3.1/`;

	React.useEffect(() => {
		getAllCountries();
	}, []);

	const getAllCountries = async () => {
		try {
			const response = await axios.get(`${url}all`);
			const data = response.data;
			setAllCountires(data);
		} catch (error) {
			console.log(error);
		}
	};

	async function getOneContry(id) {
		setIsActive((prevVal) => !prevVal);
		const url = `https://restcountries.com/v3.1/alpha/`;
		try {
			const response = await axios.get(`${url}/${id}`);
			const data = response.data;
			setClickedCountry(data);
			console.log(clickedCountry);
		} catch (error) {
			console.log(error);
		}
	}

	const oneElement = clickedCountry.map((item) => {
		const { currencies } = item;
		return (
			<Countries
				isActive={isActive}
				key={item.cca2}
				src={item.flags.svg}
				nameCountry={item.name.common}
				countryPopulation={item.population}
				countrySub={item.subregion}
				countryRegion={item.region}
				countryCapital={item.capital}
				countryDomain={item.tld}
				toggleClick={() => getOneContry(item.cca2)}
			/>
		);
	});

	const cardElement = allCountries.map((item) => {
		return (
			<Countries
				isActive={isActive}
				key={item.cca2}
				src={item.flags.svg}
				nameCountry={item.name.common}
				countryPopulation={item.population}
				countryRegion={item.region}
				countryCapital={item.capital}
				toggleClick={() => getOneContry(item.cca2)}
			/>
		);
	});
	return (
		<main className="container">
			<div className="topSearchForm">
				<form className="mainForm">
					<label htmlFor="searchCountry">
						{isActive ? (
							<input type="submit" id="goBack" value="Go Back!" />
						) : (
							<input
								type="text"
								id="searchCountry"
								placeholder="Search for Country..."
							/>
						)}
					</label>
					<select name="selectRegion">
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
			<div className="countriesWrapper">
				{isActive ? oneElement : cardElement}
			</div>
		</main>
	);
}
