import { NavLink } from "react-router-dom";
import "./Countrycards.css"
import { FaArrowRight } from "react-icons/fa6";

export const Countrycards = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="Country-card">
      <div className="card-inner">
        {/* Front side */}
        <div className="card-front">
          <div className="image-flag">
            <img src={flags.svg} alt={flags.alt} />
          </div>
          <div className="countries-info" style={{color:"white"}}>
            <h3>{name.common}</h3>
          </div>
          
        </div>

        {/* Back side */}
        <div className="card-back">
          <h3>{name.common}</h3>
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Capital:</strong> {capital}</p>
         
         <NavLink to = {`/country/${name.common}`}>
          <button>Read More <FaArrowRight /></button>
          </NavLink>

        </div>
      </div>
    </li>
  );
};
