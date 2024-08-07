import React from "react";
import Top_Header from "./components/Top_Header";
import Address_Container from "./components/Address_Container";



const Address = () => {
  return (
    <div className=" w-[100%]   mx-auto">
    <Top_Header title="My address" />
      <Address_Container />
      <div className="mt-10">
    
      </div>

    </div>
  );
};

export default Address;
