import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/common/search/Search";
import style from "../../styles/FA.module.css";
import Image from "next/image";

const FA = () => {
  let url = "";
  const [data, setData] = useState("");
  const [bata, setBata] = useState([]);
  const [stateId, setStateId] = useState();

  const getOneData = () => {    
      url = `http://localhost:3001/fa/${stateId}`;
    axios
      .get(url)
      .then((response) => {   
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllData = () => {
   url = `http://localhost:3001/fa`;
    axios
      .get(url)
      .then((response) => {
        setBata(response.data);
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllData();
    if(stateId){
      getOneData()
    }
    
  }, [stateId]);

  return (
    <div>
      <div className="m-12">
        <div className="flex flex-wrap gap-10">
          <div
            className={`w-1/6 soup flex-wrap rounded-lg shadow-lg ${style.soup}`}
          >
            <div className={`${style.searchFont} text-2xl flex items-center justify-between leading-tight p-2 md:p-4`}>
            <p >Search Football Associations</p>
          </div>
            <SearchBar bata={bata} setStateId={setStateId} ></SearchBar>
          </div>
          <div
            className={`w-4/5 flex flex-wrap  ${style.soup} ${style.aboutContainer}`}
          >
            <div
              className="bg-cover bg-bottom  w-full md:w-1/4 h-70"
              style={{
                backgroundImage:
                  " url('https://thesportsgrail.com/wp-content/uploads/2021/10/England-min.jpg.webp')",
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
              </div>
            </div>

            <div className={`w-full md:w-2/3 ${style.aboutContainer}`}>
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:pb-6 md:-ml-6 relative">
                <div
                  className={`bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center ${style.about}`}
                >
                  <div className="w-full lg:w-1/4 lg:border-right lg:border-solid text-center md:text-left ml-6 mb-2 mr-6 pr-2">
                    <table>
                      <tbody>
                        <tr>
                          <th>Full Name</th>
                          <td>:</td>
                          <td>{data.fa_name}</td>
                        </tr>
                        <tr>
                          <th>FA ID</th>
                          <td>:</td>
                          <td>{data.id}</td>
                        </tr>
                        <tr>
                          <th>Nation</th>
                          <td>:</td>
                          <td>{data.nationality}</td>
                        </tr>                       
                        <tr>
                          <th>Founded</th>
                          <td>:</td>
                          <td>{data.dof?.split("T")[0]}</td>
                        </tr>
                        <tr>
                          <th>Ranking</th>
                          <td>:</td>
                          <td>{data.ranking}</td>
                        </tr>
                        <tr>
                          <th>Confederation</th>
                          <td width="2%">:</td>
                          <td>{data.confederation}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="w-full lg:w-3/5 pl-4">
                    <p className="text-lg font-bold mb-2">About</p>
                    <p className="text-md  text-justify text-md">
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
export default FA;
