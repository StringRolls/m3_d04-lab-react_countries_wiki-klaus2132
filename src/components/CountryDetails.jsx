//CountryDetails: Is the component that we will render via the
//react-router-dom's Route and will be receiving the country code 
//(alpha3Code) via the URL.
/*
import Country from "../countries.json";

const CountryDetails = ({ countries, ...rest }) => {
    const { id: countryId } = useParams();
}


function  CountryDetails() {
    const  countryDetails = Country; //equals what you import from api database or json file
  

  return (
    <div className="list">
      <h2>Countries Details</h2>

        { countryDetails.map(countries => {
            return (
                <div className="ListCountries">
                    <h3> Official Name: { countries.name.official } </h3>
                    <p> Official Alpha3Code: { countries.alpha3Code } </p>
                    <p> { countries.currencies.AWG.name } </p>
                </div>
            )})
        }

    </div>
  );
}

export default  CountryDetails;*/

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

const CountryDetails = ({ countries, ...rest }) => {
  const { id: countryId } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundCountry = countries.find(
      (country) => country.alpha3Code === countryId
    )});



  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default CountryDetails;