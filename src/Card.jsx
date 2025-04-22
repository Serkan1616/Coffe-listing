import Star_filled from "./assets/Star_fill.svg";
import Star from "./assets/Star.svg";

function Card({ coffee }) {
  const available = coffee.available;
  const popular = coffee.popular;
  return (
    <div className="flex relative  flex-col gap-2  ">
      {popular && (
        <span className="bg-[#F6C768] text-black text-[10px] font-bold px-1.5 py-1 rounded-xl absolute top-2 left-2 ">
          Popular
        </span>
      )}
      <img className="rounded-2xl " src={coffee.image} alt="" />
      <div className="flex justify-between">
        <h1 className="text-white">{coffee.name}</h1>
        <span className="bg-[#BEE3CC] text-black font-bold px-1.5 rounded-sm ">
          {coffee.price}
        </span>
      </div>
      <div className="flex justify-between pt-5 ">
        <span className="flex gap-2">
          <img src={Star_filled} alt="" />
          {coffee.rating}{" "}
          <span className="text-[#4D5562]">({coffee.votes} votes)</span>
        </span>
        {!available && (
          <span className="text-[#ED735D] font-bold text-[14px]">Sold out</span>
        )}
      </div>
    </div>
  );
}

export default Card;
