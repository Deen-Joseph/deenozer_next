import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Players.module.css";
import SearchBar from "../../components/common/search/Search";
import Image from "next/image";

const Players = () => {
  const [data, setData] = useState("");
  const getAllData = () => {
    axios
      .get("http://localhost:3001/players")
      .then((response) => {
        console.log(response.data);
        setData(response.data[7]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (




    <div>
    <div class="m-12">
      <div class="flex flex-wrap gap-10">
        <div
          className={`w-1/6 soup flex-wrap rounded-lg shadow-lg ${style.colorCont} `}
        >
          <div className={`${style.searchFont} text-2xl flex items-center justify-between leading-tight p-2 md:p-4`}>
            <p >Search Players</p>
          </div>
          <SearchBar></SearchBar>
        </div>
        <div
          class={`w-4/5 flex flex-wrap  ${style.soup} ${style.aboutContainer}`}
        >
          <div
            class="bg-cover bg-bottom  w-full md:w-1/4 h-70"
            style={{
              backgroundImage:
                " url('https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/002/411/828/ScreenShot2013-07-23at9.25.57AM_crop_north.jpg')",
            }}
          >
            <div class="absolute text-xl">
              <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>

          <div class={`w-full md:w-2/3 ${style.aboutContainer}`}>
            <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:pb-6 md:-ml-6 relative">
              <div
                class={`bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center ${style.about}`}
              >
                <div class="w-full lg:w-1/4 lg:border-right lg:border-solid text-center md:text-left ml-6 mb-2 mr-6 pr-2">
                  <table>
                    <tbody>
                      <tr>
                        <th>Full Name</th>
                        <td>:</td>
                        <td>{data.first_name} {data.last_name}</td>
                      </tr>
                      <tr>
                        <th>Player ID</th>
                        <td>:</td>
                        <td>320000</td>
                      </tr>
                      <tr>
                      <th>Position</th>
                      <td>:</td>
                      <td>{data.position}</td>
                    </tr>
                    <tr>
                    <th>Club</th>
                    <td>:</td>
                    <td>{data.club}</td>
                  </tr>
                      <tr>
                        <th>Nationality</th>
                        <td>:</td>
                        <td>{data.nationality}</td>
                      </tr>
                      <tr>
                        <th>Gender</th>
                        <td>:</td>
                        <td>{data.gender}</td>
                      </tr>
                      <tr>
                        <th>Current Club</th>
                        <td>:</td>
                        <td>{data.club}</td>
                      </tr>
                      <tr>
                        <th>Ranking</th>
                        <td>:</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <th>Date of Birth</th>
                        <td >:</td>
                        <td> {data.dob}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="w-full lg:w-3/5 pl-4">
                  <p class="text-lg font-bold mb-2">About</p>
                  <p class="text-md  text-justify text-md">
                  {data.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Players;
