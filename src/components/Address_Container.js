import React, { useState } from "react";

const Address_Container = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <main className=" mt-[28px] mx-auto flex flex-col gap-[18px] w-[322px] min-h-[474px]">
      <p className="font-[600] text-[#125B57] text-[24px] leading-[26.4px]">
        Add a new address
      </p>
      <section className="flex flex-col gap-[18px]">
        <div className="h-[72px] relative">
          <label
            htmlFor="Flat, House no., Building, Company"
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Flat, House no., Building, Company
          </label>
          <div
            className={`w-[322px] absolute top-[24px] ${
              focusedInput === "Flat, House no., Building, Company"
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="text"
              required
              id="Flat, House no., Building, Company"
              name="Flat, House no., Building, Company"
              onFocus={() =>
                setFocusedInput("Flat, House no., Building, Company")
              }
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px] p-[12px] ${
                focusedInput === "Flat, House no., Building, Company"
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </div>

        <div className="h-[72px] relative">
          <label
            htmlFor="Area, Street, Sector, Village"
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Area, Street, Sector, Village
          </label>
          <div
            className={`w-[322px] absolute top-[24px] ${
              focusedInput === "Area, Street, Sector, Village"
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="text"
              required
              id="Area, Street, Sector, Village"
              name="Area, Street, Sector, Village"
              onFocus={() => setFocusedInput("Area, Street, Sector, Village")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px]  p-[12px]  ${
                focusedInput === "Area, Street, Sector, Village"
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </div>

        <div className="h-[72px] relative">
          <label
            htmlFor="Landmark"
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Landmark
          </label>
          <div
            className={`w-[322px] absolute top-[24px] ${
              focusedInput === "Landmark"
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="text"
              required
              id="Landmark"
              name="Landmark"
              onFocus={() => setFocusedInput("Landmark")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px] p-[12px]  ${
                focusedInput === "email"
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </div>

        <div className="h-[72px] relative">
          <label
            htmlFor="Pin-code"
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Pin-code
          </label>
          <div
            className={`w-[322px] absolute top-[24px] ${
              focusedInput === "Pin-code"
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="Number"
              required
              id="Pin-code"
              name="Pin-code"
              onFocus={() => setFocusedInput("Pin-code")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px] p-[12px] ${
                focusedInput === "email"
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </div>

        <div className="h-[72px] relative">
          <label
            htmlFor="Mobile No."
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Mobile No.
          </label>
          <div
            className={`w-[322px] absolute top-[24px] ${
              focusedInput === "Mobile No."
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="number"
              required
              id="Mobile No."
              name="Mobile No."
              onFocus={() => setFocusedInput("Mobile No.")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px]  p-[12px] ${
                focusedInput === "Mobile No."
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{ boxSizing: "border-box" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Address_Container;
