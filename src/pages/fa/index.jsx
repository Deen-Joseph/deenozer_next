import SearchBar from "../../components/common/search/Search";
import style from "../../styles/FA.module.css";
import Image from "next/image";

const FA = () => {
  return (
    <div>
      <div class="m-12">
        <div class="flex flex-wrap gap-10">
          <div
            className={`w-1/6 soup flex-wrap rounded-lg shadow-lg ${style.soup}`}
          >
            <div className={`${style.searchFont} text-2xl flex items-center justify-between leading-tight p-2 md:p-4`}>
            <p >Search Football Associations</p>
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
                  " url('https://thesportsgrail.com/wp-content/uploads/2021/10/England-min.jpg.webp')",
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
                          <td>England FA</td>
                        </tr>
                        <tr>
                          <th>FA ID</th>
                          <td>:</td>
                          <td>320000</td>
                        </tr>
                        <tr>
                          <th>Nation</th>
                          <td>:</td>
                          <td>England</td>
                        </tr>
                        <tr>
                          <th>Continent</th>
                          <td>:</td>
                          <td>Europe</td>
                        </tr>
                        <tr>
                          <th>Founded</th>
                          <td>:</td>
                          <td>1870</td>
                        </tr>
                        <tr>
                          <th>Ranking</th>
                          <td>:</td>
                          <td>5</td>
                        </tr>
                        <tr>
                          <th>Confederation</th>
                          <td width="2%">:</td>
                          <td>UEFA</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="w-full lg:w-3/5 pl-4">
                    <p class="text-lg font-bold mb-2">About</p>
                    <p class="text-md  text-justify text-md">
                      The England national football team has represented England
                      in international football since the first international
                      match in 1872. It is controlled by The Football
                      Association (FA), the governing body for football in
                      England, which is affiliated with UEFA and comes under the
                      global jurisdiction of world football's governing body
                      FIFA.[3][4] England competes in the three major
                      international tournaments contested by European nations:
                      the FIFA World Cup, the UEFA European Championship, and
                      the UEFA Nations League. England is the joint oldest
                      national team in football having played in the world's
                      first international football match in 1872, against
                      Scotland. England's home ground is Wembley Stadium,
                      London, and its training headquarters is St George's Park,
                      Burton upon Trent. The team's manager is Gareth Southgate.
                      England won the 1966 World Cup Final (a tournament it also
                      hosted), making it one of eight nations to have won the
                      World Cup.[5] They have qualified for the World Cup 16
                      times, with their best other performances being fourth
                      place in both 1990 and 2018. England has never won the
                      European Championship, with their best performance to date
                      being runners-up in 2020. As a constituent country of the
                      United Kingdom, England is not a member of the
                      International Olympic Committee and so does not compete at
                      the Olympic Games. England is currently the only team to
                      have won the World Cup at senior level, but not their
                      major continental title, and the only non-sovereign entity
                      to have won the World Cup.
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
