import React from "react";

export default function Countries(props) {
	return (
		<div
			className={props.isActive ? "card flex" : "card"}
			onClick={props.toggleClick}
		>
			<div className={props.isActive ? "active" : "topImg"}>
				<img src={props.src} />
			</div>
			{props.isActive ? (
				<div className="cardContent">
					<h3>{props.nameCountry}</h3>
					<div className="cardContemtWrapperr">
						<div className="topC">
							<p>
								Native Name:{" "}
								<span>{props.countryNativeName}</span>
							</p>
							<p>
								Population:{" "}
								<span>{props.countryPopulation}</span>
							</p>
							<p>
								Region: <span>{props.countryRegion}</span>
							</p>
							<p>
								Sub Region: <span>{props.countrySub}</span>
							</p>
							<p>
								Capital: <span>{props.countryCapital}</span>
							</p>
						</div>
						<div className="bottomContent">
							<p>
								Top Level Domain:{" "}
								<span>{props.countryDomain}</span>
							</p>
							<p>
								Currencies:{" "}
								<span>{props.countryCurriences}</span>
							</p>
							<p>
								Capital: <span>{props.countryCapital}</span>
							</p>
							<p>
								Languages: <span>{props.countryLanguages}</span>
							</p>
						</div>
					</div>
					<div className="borders">
						<p>
							Border Countries:{" "}
							<span className="itemBorders">
								{props.countryBorders}
							</span>
						</p>
					</div>
				</div>
			) : (
				<div className="cardContent">
					<h3>{props.nameCountry}</h3>
					<p>
						Population: <span>{props.countryPopulation}</span>
					</p>
					<p>
						Region: <span>{props.countryRegion}</span>
					</p>
					<p>
						Capital: <span>{props.countryCapital}</span>
					</p>
				</div>
			)}
		</div>
	);
}
