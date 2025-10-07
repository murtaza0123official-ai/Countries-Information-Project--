import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import { getCountryIndData } from "../Api/PostApi";
import { NavLink } from "react-router-dom";
import "./CountryDetails.css"

export const CountryDetails = () => {
  const { name } = useParams(); // ✅ param key should match route
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryIndData(name);
        console.log("API Response:", res.data);

        startTransition(() => {
          setCountry(res.data[0]); // ✅ first element of array
        });
      } catch (err) {
        console.error("Error fetching country:", err);
      }
    };

    fetchData();
  }, [name]);

  if (isPending || !country) return <Loader />;

  return (
    <div className="Container-indivisulal">
  <div className="image-flag">
    <img src={country.flags?.svg} alt={country.name?.common} />
  </div>

  <div className="details-country">
    <h2>{country.name?.common}</h2>
    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> {country.region}</p>
    <p><strong>Subregion:</strong> {country.subregion}</p>
    <p><strong>Capital:</strong> {country.capital?.[0]}</p>
    <p><strong>Top Level Domain:</strong> {country.tld?.join(", ")}</p>
    <p><strong>Currencies:</strong> 
      {country.currencies &&
        Object.values(country.currencies).map(c => c.name).join(", ")}
    </p>
    <p><strong>Languages:</strong> 
      {country.languages &&
        Object.values(country.languages).join(", ")}
    </p>
    <p><strong>Borders:</strong> {country.borders?.join(", ") || "None"}</p>

    <NavLink to="/country">
      <button>Go Back</button>
    </NavLink>
  </div>
</div>

  );
};
