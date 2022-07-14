import React, { useEffect, useState } from "react";

import classes from './MealsEtalase.module.css';
import Card from "../UI/Card";
import MealProduct from "./MealsProduct,.js/MealProduct";

const MealsEtalase = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, sethttpError] = useState(null)


    useEffect(() => {
        const fetchMeals = async () => {
            
            const response = await fetch('https://food-app-61d90-default-rtdb.firebaseio.com/meals.json')
            
            if (!response.ok) {
                throw new Error('Something went wrong !!!')
            }
            
            
            const responseData = await response.json()


            const loadedMeals = [] // BENTUK DATA DI FIREBASE ARRAY
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals)
            setIsLoading(false)
        }
        fetchMeals().catch(error => {
            setIsLoading(false)
            sethttpError(error.message)
        });
    }, [])

    if ( isLoading ) {
        return (
            <section className={classes.loading}>
                <h3>Loading ...</h3>
            </section>
        )
    }

    if ( httpError) {
        return (
            <section className={classes.httpError}>
                <h3>{httpError}</h3>
            </section>
        )
    }



    const mealsList = meals.map((meal) =>
        <MealProduct
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default MealsEtalase;