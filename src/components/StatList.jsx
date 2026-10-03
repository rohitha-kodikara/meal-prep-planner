import React from 'react'
import Stat from './Stat'

const StatList = ({mealsPrepared, totalMeals, totalCalories, totalPrepTime}) => {
  return (
     <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Stat 
      >
        <p className="text-sm text-gray-500">Meals prepped</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              { mealsPrepared } <span className="text-base font-medium text-gray-500">of {totalMeals}</span>
            </p>
        <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-green-700" style={{ width: `${(mealsPrepared / totalMeals) * 100}%` }}></div>
        </div>
      </Stat>

      <Stat>
        <p className="text-sm text-gray-500">Total calories</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              { totalCalories } <span className="text-base font-medium text-gray-500">kcal</span>
            </p>
      </Stat>
      <Stat>
        <p className="text-sm text-gray-500">Total prep time</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              { totalPrepTime } <span className="text-base font-medium text-gray-500">min</span>
            </p>
      </Stat>
  
        </section> 
  )
}

export default StatList
