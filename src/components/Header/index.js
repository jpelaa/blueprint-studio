import React from "react";
import Logo from "../../assets/images/website.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-center align-items-center shadow-sm headerWrapper bg-light p-2 text-center">
      <img className="px-2" src={Logo} alt="Logo " />
      <h4 className="text-secondary">
        Blueprint <span className="text-primary">Studio</span>
      </h4>
    </div>
  );
};

export default Header;
