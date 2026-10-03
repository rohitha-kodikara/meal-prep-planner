import React, { useState } from 'react'
import MealTab from './MealTab';







const MealTabList = ({ activeTab, mealTypes, handleToggleActiveTab, filterMealsByType }) =>
  {
  return (
    <div className="flex gap-2 rounded-full bg-white p-1 shadow-sm w-fit">
               
                
      {mealTypes.map((mealType) => (
        <MealTab 
        key={mealType} 
        mealType={mealType} 
        activeTab={activeTab}  
        handleToggleActiveTab={handleToggleActiveTab}
        filterMealsByType={filterMealsByType}
        />
      ))}
    </div>
  )
}

export default MealTabList
