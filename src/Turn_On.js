import React from "react";
import Top_Header from "./components/Top_Header";
import CTA from "./components/CTA";



const Turn_On = () => {
  return (
    <div className=" w-[100%]   mx-auto">
      <Top_Header title="Notification" />
      <section className=" w-full mt-[134px] flex justify-center">
        <CTA btn_name="Turn On Notification"/>
      </section>
      
      
    </div>
  );
};

export default Turn_On;
