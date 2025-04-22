import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [changeMenu, setChangeMenu] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAvailableMenu = () => setChangeMenu(true);
  const handleAllMenu = () => setChangeMenu(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/bg-cafe.jpg')] bg-[length:100%_auto] bg-no-repeat bg-[#111315] bg-top px-4 py-8">
      <div className="flex flex-col w-full max-w-6xl gap-8 bg-[#1B1D1F] justify-center items-center rounded-2xl text-[#FEF7EE] p-6 sm:p-10 md:p-14">
        <div className="flex flex-col w-2/3 gap-4 bg-[url('/vector.svg')] bg-no-repeat bg-right-top">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Our Collection
          </h1>
          <p className="text-sm sm:text-base text-center text-white/50 px-2 sm:px-10">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-center items-center mt-3 gap-2">
            <button
              onClick={handleAllMenu}
              className={`rounded-xl py-2 px-4 ${
                changeMenu ? "" : "bg-[#6F757C]"
              } font-bold cursor-pointer`}
            >
              All Products
            </button>
            <button
              onClick={handleAvailableMenu}
              className={`rounded-xl py-2 px-4 ${
                changeMenu ? "bg-[#6F757C]" : ""
              } font-bold cursor-pointer`}
            >
              Available Now
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {(changeMenu
            ? coffeeData.filter((coffee) => coffee.available)
            : coffeeData
          ).map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
