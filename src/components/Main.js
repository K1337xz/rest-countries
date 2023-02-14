import React from "react";
import axios from "axios";
import Countries from "./Countries";

export default function Main() {
	const [allCountries, setAllCountires] = React.useState([]);
	const [clickedCountry, setClickedCountry] = React.useState([]);
	const [regionCountry, setRegionCountry] = React.useState([]);
	const [isActive, setIsActive] = React.useState(false);
	/* 	const [filter, setFilter] = React.useState(false);
	 */
	const url = `https://restcountries.com/v3.1/`;

	React.useEffect(() => {
		getAllCountries();
	}, [isActive]);

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
			console.log(data.borders);
		} catch (error) {
			console.log(error);
		}
	}

	async function filterByReg(e) {
		const { value } = e.target;
		try {
			const response = await axios.get(`${url}region/${value}`);
			const data = response.data;
			setAllCountires(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function searchCountry(e) {
		const url = `https://restcountries.com/v3.1/name/`;
		let inpVal = e.target.value;
		try {
			if (inpVal < 0) {
				const response = await axios.get(
					`https://restcountries.com/v3.1/all`
				);
				const data = response.data;
				setAllCountires(data);
			} else {
				const response = await axios.get(`${url}${inpVal}`);
				const data = response.data;
				setAllCountires(data);
			}
		} catch (error) {
			console.log(error);
		}
		console.log(`${url}${inpVal}`);
	}

	function goBack(e) {
		e.preventDefault();
		setIsActive((prevVal) => !prevVal);
	}

	const filtredElements = regionCountry.map((item) => {
		const altImg = item.flags.alt;
		return (
			<Countries
				isActive={isActive}
				key={item.cca2}
				alt={altImg ? altImg : "Flag img"}
				src={item.flags.svg}
				nameCountry={item.name.common}
				countryPopulation={item.population}
				countryRegion={item.region}
				countryCapital={item.capital}
				toggleClick={() => getOneContry(item.cca2)}
			/>
		);
	});

	const oneElement = clickedCountry.map((item) => {
		const altImg = item.flags.alt;
		const currencies = Object.values(item.currencies);
		const nativeName = Object.values(item.name.nativeName);
		const languages = Object.values(item.languages);
		/* const borders = Object.values(item.borders); */
		const activeCard = {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "55%",
		};

		return (
			<Countries
				isActive={isActive}
				key={item.cca2}
				alt={altImg ? altImg : "Flag img"}
				src={item.flags.svg}
				nameCountry={item.name.common}
				countryNativeName={nativeName[0].official}
				countryPopulation={item.population}
				countrySub={item.subregion}
				countryRegion={item.region}
				countryCapital={item.capital}
				countryDomain={item.tld}
				countryCurriences={currencies[0].name}
				countryLanguages={languages.join(",")}
				countryBorders={
					item.borders && Object.values(item.borders).join(" , ")
				}
				style={activeCard}
			/>
		);
	});

	const cardElement = allCountries.map((item) => {
		const altImg = item.flags.alt;
		return (
			<Countries
				isActive={isActive}
				key={item.cca2}
				src={item.flags.svg}
				alt={altImg ? altImg : "Flag img"}
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
							<button id="goBack" onClick={goBack}>
								Back!
							</button>
						) : (
							<input
								type="text"
								id="searchCountry"
								placeholder="Search for Country..."
								onChange={searchCountry}
							/>
						)}
					</label>
					{!isActive && (
						<select
							name="selectRegion"
							defaultValue="filter"
							onChange={(e) => filterByReg(e)}
						>
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
					)}
				</form>
			</div>
			<div
				className={
					isActive ? "countriesWrapper auto" : "countriesWrapper"
				}
			>
				{isActive ? oneElement : cardElement}
			</div>
		</main>
	);
}
