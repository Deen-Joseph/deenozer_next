
import SearchBar from "../../components/common/Carousel/Carousel";
import style from '../../styles/FA.module.css'
// import "./FA.module.css";
import Image from 'next/image'

const FA = () => {
  return (
    <div>
      <div className={style.playerProfile}>
        <div className={style.flexContainer}>
          <div >
            <div className={`${style.card} ${style.search}`}>
              <div className={style.cardHeader} >
                <h2>Search Club</h2>
              </div>
              <div className={`${style.cardBody} ${style.searchBody}`}>
                <SearchBar></SearchBar>
              </div>
            </div>
          </div>
          <div >
            <div className={`${style.card} ${style.fa_logo}`}>
              <div className={style.cardHeader}>
                <Image
                  className={style.fa_img_logo}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/England_national_football_team_crest.svg/170px-England_national_football_team_crest.svg.png"
                  alt="Logo"
                  height="1"
                  width="1"
                />
                <h1>England FA</h1>
              </div>
              <div className={style.cardBody}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>FA ID: 321000001</h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>Continent: Europe</h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>Country: England</h4>
                </div>
                <div style={{ marginBottom: "0" }}>
                  <h4 style={{ paddingRight: "0.25rem" }}>
                    Confederation: UEFA
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={`${style.card} ${style.details}`}>
              <div className={style.cardHeader}>
                <h3 style={{ marginBottom: "0" }}>General Information</h3>
              </div>
              <div className={style.cardBody} style={{ paddingTop: "0.25rem" }}>
                <table className={`${style.table} ${style.tableBordered}`}>
                  <tbody>
                    <tr>
                      <th width="30%">Full Name</th>
                      <td width="2%">:</td>
                      <td>England FA</td>
                    </tr>
                    <tr>
                      <th width="30%">Nation</th>
                      <td width="2%">:</td>
                      <td>England</td>
                    </tr>
                    <tr>
                      <th width="30%">Founded</th>
                      <td width="2%">:</td>
                      <td>1870</td>
                    </tr>
                    <tr>
                      <th width="30%">Ranking</th>
                      <td width="2%">:</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th width="30%">Confederation</th>
                      <td width="2%">:</td>
                      <td>UEFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className={`${style.card} ${style.about}`} style={{ height: "388px" }}>
                <div className={style.cardHeader} style={{ marginBottom: "1rem" }}>
                  <h3>About</h3>
                </div>
                <div className={style.cardBody} style={{ paddingRight: "0.25rem" }}>
                  <p>
                   {` The England national football team has represented England
                    in international football since the first international
                    match in 1872. It is controlled by The Football Association
                    (FA), the governing body for football in England, which is
                    affiliated with UEFA and comes under the global jurisdiction
                    of world football's governing body FIFA.[3][4] England
                    competes in the three major international tournaments
                    contested by European nations: the FIFA World Cup, the UEFA
                    European Championship, and the UEFA Nations League. England
                    is the joint oldest national team in football having played
                    in the world's first international football match in 1872,
                    against Scotland. England's home ground is Wembley Stadium,
                    London, and its training headquarters is St George's Park,
                    Burton upon Trent. The team's manager is Gareth Southgate.
                    England won the 1966 World Cup Final (a tournament it also
                    hosted), making it one of eight nations to have won the
                    World Cup.[5] They have qualified for the World Cup 16
                    times, with their best other performances being fourth place
                    in both 1990 and 2018. England has never won the European
                    Championship, with their best performance to date being
                    runners-up in 2020. As a constituent country of the United
                    Kingdom, England is not a member of the International
                    Olympic Committee and so does not compete at the Olympic
                    Games. England is currently the only team to have won the
                    World Cup at senior level, but not their major continental
                    title, and the only non-sovereign entity to have won the
                    World Cup.`}
                  </p>
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
