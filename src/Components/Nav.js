import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";


function Nav() {
    // const[show, handleShow]= useState(false);

    // useEffect(()=>{
    //     window.addEventListener("scroll", ()=> {
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };

    // }, []);

  return (
    <div className="nav">
        <img className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo"  />
        <SearchBar className="nav_search-bar" />
        <img className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Netflix Avatar"  />
    </div>

  )
}

export default Nav