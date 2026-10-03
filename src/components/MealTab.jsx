import React from 'react'

const MealTab = ({ mealType,handleToggleActiveTab, activeTab }) => {
 
  
 
  return (
     <button 
       className={`rounded-full px-4 py-1.5 text-sm font-semibold ${activeTab === mealType ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
       onClick={() => 
         handleToggleActiveTab(mealType)
       }
     >
       {mealType}
     </button>
  )
}

export default MealTab
