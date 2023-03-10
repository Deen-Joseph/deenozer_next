import { useEffect, useState } from "react";
import styles from "../../../styles/Search.module.css";

const SearchBar = ({ setStateId, bata }) => {
  const [searchInput, setSearchInput] = useState("");
  // const countries = [
  //   { name: "Belgium", continent: "Europe" },
  //   { name: "India", continent: "Asia" },
  //   { name: "Bolivia", continent: "South America" },
  //   { name: "Ghana", continent: "Africa" },
  //   { name: "Japan", continent: "Asia" },
  //   { name: "Canada", continent: "North America" },
  //   { name: "New Zealand", continent: "Australasia" },
  //   { name: "Italy", continent: "Europe" },
  //   { name: "South Africa", continent: "Africa" },
  //   { name: "China", continent: "Asia" },
  //   { name: "Paraguay", continent: "South America" },
  //   { name: "Usa", continent: "North America" },
  //   { name: "France", continent: "Europe" },
  //   { name: "Botswana", continent: "Africa" },
  //   { name: "Spain", continent: "Europe" },
  //   { name: "Senegal", continent: "Africa" },
  //   { name: "Brazil", continent: "South America" },
  //   { name: "Denmark", continent: "Europe" },
  //   { name: "Mexico", continent: "South America" },
  //   { name: "Australia", continent: "Australasia" },
  //   { name: "Tanzania", continent: "Africa" },
  //   { name: "Bangladesh", continent: "Asia" },
  //   { name: "Portugal", continent: "Europe" },
  //   { name: "Pakistan", continent: "Asia" },
  // ];

  const playerId = (stateId) => {
    setStateId(stateId);
  };

  return (
    <div className={styles.soup}>
      <input
        className={`${styles.search} bg-white rounded-md m-2 py-2 pl-3  focus:outline-none sm:text-sm`}
        type="search"
        placeholder="Search"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <div className="grid h-screen pl-2 overflow-y-scroll">
        {bata
          .filter((data) => {
            if (searchInput === "") {
              return data;
            } else if (
              data.first_name
                ?.toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              data.last_name?.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return data;
            } else if (
              data.fa_name?.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return data;
            } else if (
              data.club_name?.toLowerCase().includes(searchInput.toLowerCase())
            )
              return data;
          })
          .map((data, index) => {
            const stateId = data.id;
            if (data.first_name) {
              data = data.first_name + " " + " " + data.last_name;
            } else if (data.fa_name) {
              data = data.fa_name;
            } else if (data.club_name) {
              data = data.club_name;
            }

            return (
              <ul class="list-none mt-4">
                <button
                  onClick={() => {
                    playerId(stateId);
                  }}
                >
                  {data}
                </button>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
