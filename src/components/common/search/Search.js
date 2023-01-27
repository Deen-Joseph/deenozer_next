import { useState } from "react";

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
    <div>
      <input
      style={{marginBottom:"2.5rem"}}
        type="search"
        placeholder="Search Player"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <table >
        <tbody >
          <tr>
            <th >
              <h2 style={{paddingBottom:"0.5rem"}}>Country</h2>
            </th>
          </tr>
        </tbody>

        {countries
          .filter((country) => {
            if (searchInput === "") {
              return country;
            } else if (
              country.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{country.name}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default SearchBar;
