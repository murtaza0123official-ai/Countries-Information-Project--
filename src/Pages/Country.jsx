import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Components/Api/PostApi";
import { Countrycards } from "../Components/UI/CountryCards";
import "../Components/UI/Countrycards.css"
import { Loader } from "../Components/UI/Loader";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search , setSearch] = useState();
  const [filter , setFilter] = useState("all"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();

        //  put the state update inside startTransition
        startTransition(() => {
          setCountries(res.data);
        });
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchData();
  }, []);


  if (isPending) return <Loader />;

    function searchCountry(country) {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // ✅ allow all if no search
  }

  function filterRegion(country) {
    if (filter === "all") return true;
    return country.region === filter;
  }
 
    const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="Country-section">
      <SearchFilter search={search} setSearch={setSearch} 
                    filter={filter} setFilter={setFilter}
                    countries={countries} setCountries={setCountries}/>
      <ul className="grid-four-columns-in-one-row">
        {filterCountries.map((curCountry, index) => (
          <Countrycards key={index} country={curCountry} />
        ))}
      </ul>
    </section>
  );
};
