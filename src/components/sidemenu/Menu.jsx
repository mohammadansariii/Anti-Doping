import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./SideMenu.css"; 

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    
    setIsOpen(!isOpen);
  };
  




  return (
    <>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-toggle" onClick={toggleMenu}></div>
        <nav className="menu-nav">
          <ul>
            <li style={{fontWeight:"600", fontSize:'25px', marginBottom:'10vh'}}>
              Play Clean
            </li>
            <li>
              <NavLink to="/" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 22.5C2.5 20.575 2.5 19.6125 2.93375 18.905C3.17625 18.5087 3.50875 18.1763 3.905 17.9338C4.61125 17.5 5.575 17.5 7.5 17.5C9.425 17.5 10.3875 17.5 11.095 17.9338C11.4913 18.1763 11.8237 18.5087 12.0662 18.905C12.5 19.6112 12.5 20.575 12.5 22.5C12.5 24.425 12.5 25.3875 12.0662 26.0963C11.8237 26.4913 11.4913 26.8237 11.095 27.0662C10.3888 27.5 9.425 27.5 7.5 27.5C5.575 27.5 4.6125 27.5 3.905 27.0662C3.50919 26.8242 3.17635 26.4918 2.93375 26.0963C2.5 25.3875 2.5 24.425 2.5 22.5ZM17.5 22.5C17.5 20.575 17.5 19.6125 17.9338 18.905C18.1763 18.5087 18.5087 18.1763 18.905 17.9338C19.6112 17.5 20.575 17.5 22.5 17.5C24.425 17.5 25.3875 17.5 26.0963 17.9338C26.4913 18.1763 26.8237 18.5087 27.0662 18.905C27.5 19.6112 27.5 20.575 27.5 22.5C27.5 24.425 27.5 25.3875 27.0662 26.0963C26.8236 26.4913 26.4913 26.8236 26.0963 27.0662C25.3875 27.5 24.425 27.5 22.5 27.5C20.575 27.5 19.6125 27.5 18.905 27.0662C18.5092 26.8242 18.1764 26.4918 17.9338 26.0963C17.5 25.3875 17.5 24.425 17.5 22.5ZM2.5 7.5C2.5 5.575 2.5 4.6125 2.93375 3.905C3.17625 3.50875 3.50875 3.17625 3.905 2.93375C4.61125 2.5 5.575 2.5 7.5 2.5C9.425 2.5 10.3875 2.5 11.095 2.93375C11.4913 3.17625 11.8237 3.50875 12.0662 3.905C12.5 4.61125 12.5 5.575 12.5 7.5C12.5 9.425 12.5 10.3875 12.0662 11.095C11.8237 11.4913 11.4913 11.8237 11.095 12.0662C10.3888 12.5 9.425 12.5 7.5 12.5C5.575 12.5 4.6125 12.5 3.905 12.0662C3.50904 11.8238 3.1762 11.491 2.93375 11.095C2.5 10.3888 2.5 9.425 2.5 7.5ZM17.5 7.5C17.5 5.575 17.5 4.6125 17.9338 3.905C18.1763 3.50875 18.5087 3.17625 18.905 2.93375C19.6112 2.5 20.575 2.5 22.5 2.5C24.425 2.5 25.3875 2.5 26.0963 2.93375C26.4913 3.17625 26.8237 3.50875 27.0662 3.905C27.5 4.61125 27.5 5.575 27.5 7.5C27.5 9.425 27.5 10.3875 27.0662 11.095C26.8237 11.4913 26.4913 11.8237 26.0963 12.0662C25.3875 12.5 24.425 12.5 22.5 12.5C20.575 12.5 19.6125 12.5 18.905 12.0662C18.509 11.8238 18.1762 11.491 17.9338 11.095C17.5 10.3888 17.5 9.425 17.5 7.5Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="learning-path" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 21.0938H22.5C23.4946 21.0938 24.4484 20.6987 25.1516 19.9954C25.8549 19.2921 26.25 18.3383 26.25 17.3438C26.25 16.3492 25.8549 15.3954 25.1516 14.6921C24.4484 13.9888 23.4946 13.5938 22.5 13.5938H9.375C8.38044 13.5937 7.42661 13.1987 6.72335 12.4954C6.02009 11.7921 5.625 10.8383 5.625 9.84375C5.625 8.84919 6.02009 7.89536 6.72335 7.1921C7.42661 6.48884 8.38044 6.09375 9.375 6.09375H15.4537M8.4375 18.75C9.18342 18.75 9.89879 19.0463 10.4262 19.5738C10.9537 20.1012 11.25 20.8166 11.25 21.5625C11.25 22.3084 10.9537 23.0238 10.4262 23.5512C9.89879 24.0787 9.18342 24.375 8.4375 24.375C7.69158 24.375 6.97621 24.0787 6.44876 23.5512C5.92132 23.0238 5.625 22.3084 5.625 21.5625C5.625 20.8166 5.92132 20.1012 6.44876 19.5738C6.97621 19.0463 7.69158 18.75 8.4375 18.75ZM18.75 3.75C19.1193 3.75 19.4851 3.82275 19.8263 3.96409C20.1675 4.10543 20.4776 4.3126 20.7387 4.57376C20.9999 4.83493 21.2071 5.14497 21.3484 5.4862C21.4898 5.82743 21.5625 6.19316 21.5625 6.5625C21.5625 6.93184 21.4898 7.29757 21.3484 7.6388C21.2071 7.98003 20.9999 8.29007 20.7387 8.55124C20.4776 8.8124 20.1675 9.01957 19.8263 9.16091C19.4851 9.30225 19.1193 9.375 18.75 9.375C18.0041 9.375 17.2887 9.07868 16.7613 8.55124C16.2338 8.02379 15.9375 7.30842 15.9375 6.5625C15.9375 5.81658 16.2338 5.10121 16.7613 4.57376C17.2887 4.04632 18.0041 3.75 18.75 3.75Z" stroke="black" strokeOpacity="0.7" strokeWidth="3"/>
</svg>
</span> Learning Path</NavLink>
            </li>
            <li>
              <NavLink to="modules" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.22875 9.0475C11.9875 9.71 14.2275 11.0962 15 11.8925C15.7725 11.0962 18.0125 9.71 21.7725 9.0475C23.6762 8.71125 24.6287 8.54375 25.4387 9.1875C26.25 9.83 26.25 10.875 26.25 12.965V20.4737C26.25 22.385 26.25 23.34 25.73 23.9362C25.2087 24.5325 24.0637 24.735 21.7725 25.1387C19.7287 25.4987 18.135 26.0725 16.9813 26.6487C15.845 27.2162 15.2775 27.5 15 27.5M15 27.5C14.7225 27.5 14.1537 27.2162 13.0187 26.65C11.865 26.0725 10.2713 25.4987 8.22875 25.1375C5.93625 24.735 4.79125 24.5325 4.27 23.9362C3.74875 23.34 3.75 22.385 3.75 20.4737V12.965C3.75 10.875 3.75 9.83 4.56125 9.1875C5.37125 8.54375 6.32375 8.7125 8.2275 9.0475M15 27.5V11.25M10.625 3.82375C11.9206 2.95875 13.444 2.49813 15.0019 2.50036C16.5598 2.50259 18.0818 2.96755 19.375 3.83625M17.0275 6.875C16.4168 6.50398 15.7163 6.30673 15.0017 6.30453C14.2871 6.30233 13.5855 6.49525 12.9725 6.8625" stroke="black" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Modules</NavLink>
            </li>
            <li>
              <NavLink to="playground" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.8719 17.4959C31.5781 11.6473 29.6593 7.91648 26.5838 7.00734C25.9882 6.83358 25.3705 6.74691 24.7501 6.75C22.8594 6.75 21.3673 7.875 18.0001 7.875C14.6328 7.875 13.138 6.75 11.2501 6.75C10.6037 6.74657 9.96003 6.83318 9.33757 7.00734C6.25788 7.91648 4.35522 11.6508 3.04671 17.4959C1.71077 23.4661 1.95264 28.1834 4.56405 29.089C6.39218 29.7218 8.02694 28.4133 9.57522 26.4874C11.333 24.2937 13.498 23.6187 18.0001 23.6187C22.5022 23.6187 24.5827 24.2937 26.3433 26.4874C27.8902 28.4147 29.5855 29.707 31.3651 29.1002C34.2493 28.1152 34.2085 23.5364 32.8719 17.4959Z" stroke="black" strokeOpacity="0.7" strokeWidth="3" strokeMiterlimit="10"/>
<path d="M20.5312 17.1562C21.3079 17.1562 21.9375 16.5267 21.9375 15.75C21.9375 14.9733 21.3079 14.3438 20.5312 14.3438C19.7546 14.3438 19.125 14.9733 19.125 15.75C19.125 16.5267 19.7546 17.1562 20.5312 17.1562Z" fill="black" fillOpacity="0.7"/>
<path d="M23.625 20.25C23.3467 20.25 23.0747 20.1674 22.8434 20.0128C22.612 19.8581 22.4318 19.6382 22.3255 19.3811C22.2191 19.1239 22.1915 18.841 22.246 18.5681C22.3006 18.2952 22.4349 18.0447 22.6319 17.8481C22.8289 17.6516 23.0798 17.518 23.3528 17.4641C23.6258 17.4102 23.9087 17.4386 24.1656 17.5456C24.4225 17.6525 24.6419 17.8333 24.796 18.065C24.9501 18.2968 25.0319 18.569 25.0312 18.8473C25.0303 19.2196 24.8817 19.5764 24.6181 19.8394C24.3545 20.1023 23.9973 20.25 23.625 20.25Z" fill="black" fillOpacity="0.7"/>
<path d="M23.625 14.0625C24.4017 14.0625 25.0312 13.4329 25.0312 12.6562C25.0312 11.8796 24.4017 11.25 23.625 11.25C22.8483 11.25 22.2188 11.8796 22.2188 12.6562C22.2188 13.4329 22.8483 14.0625 23.625 14.0625Z" fill="black" fillOpacity="0.7"/>
<path d="M26.7188 17.1562C27.4954 17.1562 28.125 16.5267 28.125 15.75C28.125 14.9733 27.4954 14.3438 26.7188 14.3438C25.9421 14.3438 25.3125 14.9733 25.3125 15.75C25.3125 16.5267 25.9421 17.1562 26.7188 17.1562Z" fill="black" fillOpacity="0.7"/>
<path d="M11.25 12.375V19.125M14.625 15.75H7.875" stroke="black" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Playground</NavLink>
            </li>
            <li>
              <NavLink to="leaderboard" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 31.6667H15M25 31.6667V14.3333C25 14.0681 24.8946 13.8138 24.7071 13.6262C24.5196 13.4387 24.2652 13.3333 24 13.3333H16C15.7348 13.3333 15.4804 13.4387 15.2929 13.6262C15.1054 13.8138 15 14.0681 15 14.3333V31.6667M25 31.6667H34C34.2652 31.6667 34.5196 31.5613 34.7071 31.3738C34.8946 31.1862 35 30.9319 35 30.6667V25.1667C35 24.9015 34.8946 24.6471 34.7071 24.4596C34.5196 24.272 34.2652 24.1667 34 24.1667H26C25.7348 24.1667 25.4804 24.272 25.2929 24.4596C25.1054 24.6471 25 24.9015 25 25.1667V31.6667ZM15 31.6667V21.8333C15 21.5681 14.8946 21.3138 14.7071 21.1262C14.5196 20.9387 14.2652 20.8333 14 20.8333H6C5.73478 20.8333 5.48043 20.9387 5.29289 21.1262C5.10536 21.3138 5 21.5681 5 21.8333V30.6667C5 30.9319 5.10536 31.1862 5.29289 31.3738C5.48043 31.5613 5.73478 31.6667 6 31.6667H15ZM25 8.33334H15" stroke="black" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> Leaderboard</NavLink>
            </li>
            <li>
              <NavLink to="ai-assistant" style={({ isActive }) => isActive ? { backgroundColor: "#80AF81", opacity:1 , color: '#000000',padding: '8px 5px' ,borderRadius: '1rem' } : {}}> <span><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83301 17.5C5.83301 12.0006 5.83301 9.25022 7.54217 7.54251C9.25134 5.8348 12.0003 5.83334 17.4997 5.83334C22.999 5.83334 25.7495 5.83334 27.4572 7.54251C29.1649 9.25168 29.1663 12.0006 29.1663 17.5C29.1663 22.9994 29.1663 25.7498 27.4572 27.4575C25.748 29.1652 22.999 29.1667 17.4997 29.1667C12.0003 29.1667 9.24988 29.1667 7.54217 27.4575C5.83447 25.7483 5.83301 22.9994 5.83301 17.5Z" stroke="black" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9373 21.875L13.6236 13.8163C13.691 13.6151 13.8199 13.4403 13.9921 13.3164C14.1643 13.1925 14.3711 13.1259 14.5832 13.1259C14.7953 13.1259 15.002 13.1925 15.1742 13.3164C15.3464 13.4403 15.4753 13.6151 15.5428 13.8163L18.229 21.875M12.3957 18.9583H16.7707M22.604 13.125V21.875M11.6665 2.91667V5.83334M23.3332 2.91667V5.83334M17.4998 2.91667V5.83334M11.6665 29.1667V32.0833M17.4998 29.1667V32.0833M23.3332 29.1667V32.0833M32.0832 23.3333H29.1665M5.83317 11.6667H2.9165M5.83317 23.3333H2.9165M5.83317 17.5H2.9165M32.0832 11.6667H29.1665M32.0832 17.5H29.1665" stroke="black" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span> AI Assistant</NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
