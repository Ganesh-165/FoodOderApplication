import MealItem from './MealItem';

const AvailableMeals = (props)=>{
    const mealtype = props.meals; 
    const meals = mealtype.map((meal)=><MealItem key={meal._id} id={meal._id} name={meal.name} description={meal.description} price={meal.price}/>);
    return(
        <section className='lg:ml-80 ml-20 max-w-fit flex flex-col p-4 rounded w-full'>
            <div className='flex flex-col bg-white rounded-3xl'>
                {meals}
            </div>
        </section>
    )
}

export default AvailableMeals;