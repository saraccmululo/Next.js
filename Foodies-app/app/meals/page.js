import Link from 'next/link'
import React from 'react'

const MealsList = () => {
  return (
    <>
    <h1>List of Meals</h1>
    <p><Link href="/meals/meal-1">Meal 1</Link></p>
    <p><Link href="/meals/meal-2">Meal 2</Link></p>
    </>
  )
}

export default MealsList