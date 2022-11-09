import React from "react";
import Typed from "react-typed";



const Header = () => {
  return (
    <section id="home" className="bg-gray-900">
    <div className="header-wrapper">
        <div className="main-info">
            <h1>web development</h1>
            <Typed className="typed-text"
            strings={["personal websites", "portfolio websites", "business websites", "blog websites", "ecommerce websites", "news websites", "online forum"]}
            typeSpeed={40}
            backSpeed={60} 
             loop   
            /> 
        </div>
    </div>
    </section>
  )
}

export default Header