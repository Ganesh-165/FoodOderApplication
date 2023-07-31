import React from "react";
import AvailableMeals from "../mealcomponents/AvailableMeals";
import { useState, useEffect } from "react";
import axios from '../api/axios';
import image from '../images/juice.svg'

const Url = '/getitems';

const Juices = () => {
  const [juices, setJuices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url,{type:'juices'});
        setJuices(response.data.juicesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='flex'>
    <AvailableMeals meals={juices}/>
    <img src={image} width="500px" className='hidden xl:block fixed right-0 mr-8 min-h-screen animate-jump'/>
  </div>
  );
};

export default Juices;
