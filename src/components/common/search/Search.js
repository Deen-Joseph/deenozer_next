import { useState } from "react";
import styles from "../../../styles/Search.module.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  return (
    <div className={styles.soup}>
      <input
        className={`${styles.search} bg-white rounded-md m-2 py-2 pl-3  focus:outline-none sm:text-sm`}
        type="search"
        placeholder="Search"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div className="grid h-screen place-items-center overflow-y-scroll">
        {/* <div className="text-3xl mb-4 font-bold"> 
          <p>Country</p>
        </div> */}
        {countries
          .filter((country) => {
            if (searchInput === "") {
              return country;
            } else if (
              country.name.toLowerCase().includes(searchInput.toLowerCase())
            )
              return country;
          })
          .map((country, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <button>
                    {country.name}
                    </button>
                    </td>
                </tr>
              </tbody>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
