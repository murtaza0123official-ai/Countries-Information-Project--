import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP data for Countrycard where every indivisual country goes to indivisual page
export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
