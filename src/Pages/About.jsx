import CountriesInfo from "../Components/Api/CountriesInfo.json";
import "./About.css";

export const About = () => {
  return (
    <section className="Heading">
      <h1>Here Are Some Interesting <br />Facts of Countries</h1>

      <div className="gradient-cards">
        {CountriesInfo.map((country) => {
          const { id, name, capital, population, currency, languages, fact } = country;
          return (
            <div className="card" key={id} >
              <div className="title">{name}</div>
              <p><span className="description">Capital:</span> {capital}</p>
              <p><span className="description">Population:</span> {population}</p>
              <p><span className="description">Currency:</span> {currency}</p>
              <p><span className="description">Language:</span> {languages.join(", ")}</p>
              <p><span className="description">Facts:</span> {fact}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
