import React from 'react'
import MealsEtalase from './MealsEtalase'
import MealsOrder from './MealsOrder'

const Meals = () => {
    return (
        <React.Fragment>
            <MealsOrder />
            <MealsEtalase />
        </React.Fragment>
    )
}

export default Meals;