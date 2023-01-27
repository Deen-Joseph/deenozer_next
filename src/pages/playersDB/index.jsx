import { useState } from "react";
import styles from '@/styles/PlayersDB.module.css'
// import "../../styles/PlayersDB.module.css";
import ClubTab from "../tabs/ClubsTab";
import FaTabs from "../tabs/FaTabs";
import EventsTab from "../tabs/EventsTab";
import PlayersTab from "../tabs/PlayersTab";

const PlayersDB = () => { 

  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Players",
      content: <PlayersTab></PlayersTab>,
    },
    {
      id: 2,
      tabTitle: "Clubs",
      content: <ClubTab></ClubTab>,
    },
    {
      id: 3,
      tabTitle: "FA",
      content: <FaTabs></FaTabs>,
    },
    {
      id: 4,
      tabTitle: "Events",
      content: <EventsTab></EventsTab>,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div >
      <div className={styles.Tabs}>
        <ul className={styles.nav}>
          {tabs.map((tab, i) => (
            <li
              key={i}
              id={tab.id}
              className={currentTab === `${tab.id}` ? "active" : ""}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersDB;
