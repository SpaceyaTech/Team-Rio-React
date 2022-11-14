import React from "react";
import ItemsContainer from "./ItemsContainer";

 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-gray-900 py-7">
        <div>
         
        </div>
      </div>
      <ItemsContainer />
      <div
        className="flex justify-center and items-center 
      text-center pt-2 text-teal-400 text-sm pb-8"
      >
        <span>© 2022 SpaceyaTech|All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer


