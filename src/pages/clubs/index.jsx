import SearchBar from "../../components/common/search/Search";
import style from "@/styles/Clubs.module.css";
import Image from "next/image";

const Clubs = () => {
  return (
    <div>
      <div class="m-12">
        <div class="flex flex-wrap gap-10">
          <div
            className={`w-1/6 soup flex-wrap overflow-y-scroll rounded-lg shadow-lg ${style.soup}`}
          >
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">Search Club</h1>
            </header>

            <SearchBar></SearchBar>
          </div>
          <div
            class={`w-4/5 flex flex-wrap  ${style.soup} ${style.aboutContainer}`}
          >
            <div
              class="bg-cover bg-bottom  w-full md:w-1/4 h-70"
              style={{
                backgroundImage:
                  " url('https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-logo.png')",
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
                  <div class="w-full lg:w-2/6 lg:border-right lg:border-solid text-center md:text-left ml-6 mb-2 ">
                    <table>
                      <tbody>
                        <tr>
                          <th width="30%">Full Name</th>
                          <td width="2%">:</td>
                          <td>Manchester United</td>
                        </tr>
                        <tr>
                          <th width="30%">Club ID</th>
                          <td width="2%">:</td>
                          <td>321000001</td>
                        </tr>
                        <tr>
                          <th width="30%">League</th>
                          <td width="2%">:</td>
                          <td>Premier League</td>
                        </tr>
                        <tr>
                          <th width="30%">Nation</th>
                          <td width="2%">:</td>
                          <td>England</td>
                        </tr>
                        <tr>
                          <th width="30%">Founded</th>
                          <td width="2%">:</td>
                          <td>1902</td>
                        </tr>
                        <tr>
                          <th width="30%">Ranking</th>
                          <td width="2%">:</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <th width="30%">Confederation</th>
                          <td width="2%">:</td>
                          <td>UEFA</td>
                        </tr>
                        <tr>
                          <th>Continent</th>
                          <td>:</td>
                          <td>Europe</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="w-full lg:w-3/5 pl-2">
                    <p class="text-lg font-bold mb-2">About</p>
                    <p class="text-md  text-justify text-md">
                      Manchester United Football Club, commonly referred to as
                      Man United (often stylised as Man Utd), or simply United,
                      is a professional football club based in Old Trafford,
                      Greater Manchester, England. The club competes in the
                      Premier League, the top division in the English football
                      league system. Nicknamed the Red Devils, it was founded as
                      Newton Heath LYR Football Club in 1878, but changed its
                      name to Manchester United in 1902. The club moved from
                      Newton Heath to its current stadium, Old Trafford, in
                      1910. Manchester United have won a record 20 League
                      titles, 12 FA Cups, five League Cups, and a record 21 FA
                      Community Shields. They have won the European Cup/UEFA
                      Champions League three times, and the UEFA Europa League,
                      the UEFA Cup Winners' Cup, the UEFA Super Cup, the
                      Intercontinental Cup and the FIFA Club World Cup once
                      each.[5][6] In 1968, under the management of Matt Busby,
                      10 years after eight of the club's players were killed in
                      the Munich air disaster, they became the first English
                      club to win the European Cup. Alex Ferguson is the club's
                      longest-serving and most successful manager, winning 38
                      trophies, including 13 league titles, five FA Cups, and
                      two Champions League titles between 1986 and 2013.[7][8]
                      In the 1998–99 season, under Ferguson, the club became the
                      first in the history of English football to achieve the
                      European treble of the Premier League, FA Cup, and UEFA
                      Champions League.[9] In winning the UEFA Europa League
                      under José Mourinho in 2016–17, they became one of five
                      clubs to have won the original three main UEFA club
                      competitions (the Champions League, Europa League and Cup
                      Winners' Cup). Manchester United is one of the most widely
                      supported football clubs in the world[10][11] and has
                      rivalries with Liverpool, Manchester City, Arsenal and
                      Leeds United. Manchester United was the highest-earning
                      football club in the world for 2016–17, with an annual
                      revenue of €676.3 million,[12] and the world's third most
                      valuable football club in 2019, valued at £3.15 billion
                      ($3.81 billion).[13] After being floated on the London
                      Stock Exchange in 1991, the club was taken private in 2005
                      after a purchase by American businessman Malcolm Glazer
                      valued at almost £800 million, of which over £500 million
                      of borrowed money became the club's debt.[14] From 2012,
                      some shares of the club were listed on the New York Stock
                      Exchange, although the Glazer family retains overall
                      ownership and control of the club.
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

export default Clubs;
