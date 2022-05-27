// CountriesList: Displays the list of links with the country names.
// Each link should be a react-router-dom Link which we will use to
// send the country code (alpha3Code) via the URL.
import Country from "../countries.json";
import { Link } from 'react-router-dom';


function CountriesList() {
    const countriesList = Country; 
  

  return (
    <div className="list">
      <h2>Countries List</h2>

        {countriesList.map(countries => {
            return (
                <div className="ListCountries">
                <Link key={countries.alpha3Code} className="list-group-item list-group-item-action" to={countries.alpha3Code}>
                <p>{countries.name.official}</p>
                </Link>
                </div>
            )})
        }

    </div>
  );
}

export default CountriesList;