import React, { useEffect, useState } from 'react'
import AvailableMeals from '../mealcomponents/AvailableMeals'
import image from '../images/veg.svg';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Url = '/getitems'
const type = 'vegetarian'

const Vegetarian = () => {
  const [vegetarian,setVegetarian]=useState([]);
  const axiosPrivate = useAxiosPrivate();
  useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await axiosPrivate.post(Url,{type:type});
          setVegetarian(response.data.data);
        }
        catch(error){
          console.log(error)
        }
      }
      fetchData();
  },[]);
  return (
    <div className='flex'>
      <AvailableMeals meals={vegetarian}/>
      <img src={image} width="500px" className='hidden xl:block fixed right-0 mr-8 min-h-screen animate-jump'/>
    </div>
  )
}

export default Vegetarian