import React from "react";
import image from '../images/dashboardimage.jpg'


const UserDashboard = () => {
  return (
    <div className="flex flex-row justify-center p-4 gap-20 lg:ml-36 mt-20 items-center rounded-lg">
      <section className="w-full max-w-lg flex flex-col relative p-4 min-h-[350px] items-center bg-slate-50 rounded-lg animate-container origin-top">
        <h2 className="text-2xl font-bold">Delicious Food, Delivered To You</h2>
        <svg className=" w-2/3 h-10">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="4" />
        </svg>
        <h3 className="text-lg font-semibold">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </h3>
        <h3 className="text-lg font-semibold mt-10">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </h3>
      </section>
      <img src={image} width='400px' height='600px' className="hidden md:block rounded-xl relative animate-container origin-top"></img>
    </div>
  );
};

export default UserDashboard;
