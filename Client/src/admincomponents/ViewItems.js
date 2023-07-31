import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import image from "../images/viewmenu.svg";

const Url = "/admin/getItems";
const ViewItems = () => {
  const [items, setItems] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const data = async () => {
      const response = await axiosPrivate.get(Url);
      setItems(response.data.message);
    };
    data();
  }, []);
  const [value, setValue] = useState("");
  const filterItem = () => {
    return items.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );
  };
  return (
    <section className="lg:ml-80 ml-20 max-w-2xl mr-4 flex flex-col gap-2 p-4 rounded">
      <div className="w-full flex">
        <input
          type="search"
          placeholder="Search Here.."
          className="p-2 rounded-full w-[250px]"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-col bg-white rounded-3xl">
        <ul>
          {filterItem(items).map((item) => (
            <ItemCard
             key={item.name}
              id={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
            ></ItemCard>
          ))}
        </ul>
      </div>
      <img
        src={image}
        width="400px"
        className="hidden xl:block fixed right-0 mr-8 mt-36 animate-jump"
      />
    </section>
  );
};

export default ViewItems;
