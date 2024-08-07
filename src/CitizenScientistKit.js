import React from "react";
import Top_Header from "./components/Top_Header";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";


const CitizenScientistKit = () => {
  return (
    <div className="w-screen mx-auto">
      <Top_Header title="Citizen scientist kit" />
      <section className="w-[324px] h-[326px] mx-auto flex flex-col gap-[31px] mt-[14px] ">
        <section className="w-full flex justify-center">
          <Navbar />
        </section>
        <section className="w-full h-[269.7px] mx-auto flex flex-col gap-[18px] ">
          <UserList name="Admin 1" message="hello" />
          <UserList name="Rajesh Shetty" message="Mandala garden is the best for this season."/>
          <UserList name="Admin 2" message="Let us know if you have any more queries?"/>
         
        </section>
      </section>
    </div>
  );
};

export default CitizenScientistKit;
