import React from 'react'
import AvailableMeals from '../mealcomponents/AvailableMeals'
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import image from '../images/nonveg.svg';

const Url = '/getitems';

const NonVegetarian = () => {
  const [nonvegetarian,setNonVegetarian]=useState([]);
  const type = 'non-vegetarian';
  const axiosPrivate = useAxiosPrivate();
  useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await axiosPrivate.post(Url,{type:type});
          setNonVegetarian(response.data.data);
        }
        catch(error){
          console.log(error)
        }
      }
      fetchData();
  },[]);
  return (
    <div className='flex'>
    <AvailableMeals meals={nonvegetarian}/>
    <img src={image} width="500px" className='hidden xl:block fixed right-0 mr-8 min-h-screen animate-jump'/>
  </div>
  )
}

export default NonVegetarian