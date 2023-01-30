import { useState } from "react";
import "./LogReg.module.css";
import  Login  from '../../pages/login';
import  Register  from '../../pages/register';

const LogRegPage = () => { 

  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Login",
      content: <Login></Login>,
    },
    {
      id: 2,
      tabTitle: "Register",
      content: <Register></Register>,
    },
    
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div >
      <div className="Tabs">
        <ul className="nav">
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

export default LogRegPage;
