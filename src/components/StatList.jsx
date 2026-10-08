import React from 'react'
import Stat from './Stat'

const StatList = ({mealsPrepared, totalMeals, totalCalories, totalPrepTime}) => {
  return (
     <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">


        <Stat
  statTitle="Meals prepared"
  values={mealsPrepared}
  suffix={`of ${totalMeals}`}
  bgColor="bg-green-100"
>
  <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
    <div
      className="h-2 rounded-full bg-green-700"
      style={{
        width: `${totalMeals > 0 ? (mealsPrepared / totalMeals) * 100 : 0}%`,
      }}
    />
  </div>
</Stat>

     <Stat
  statTitle="Total calories"
  values={totalCalories}
  suffix="kcal"
  bgColor="bg-yellow-200"
/>

      <Stat
  statTitle="Total prep time"
  values={totalPrepTime}
  suffix="min"
  bgColor="bg-blue-100"
/>
  
        </section> 
  )
}

export default StatList
