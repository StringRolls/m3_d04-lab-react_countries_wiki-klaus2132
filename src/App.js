// src/App.js
import "./App.css";
import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";



function App() {
  return <div className="App">
    <Navbar />
    <Routes >   

      <Route exact path="/" element={Navbar} />
      <Route exact path="/wikicountries" element={<CountriesList/>}/>
      <Route exact path="/wikicountries/:id" element={<CountryDetails/>}/>
      
          

    </Routes>
    {/*<CountriesList />*/}
    {/*<CountriesList />*/}

  </div>;
}
export default App;
