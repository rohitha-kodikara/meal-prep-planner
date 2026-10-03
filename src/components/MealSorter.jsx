import React from 'react'

const MealSorter = ({ handleSortChange }) => {
  return (
   <select 
   
   onChange={(e) => handleSortChange(e.target.value)}
   className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                <option value="">Sort by input order</option>
                <option value="calories">Sort by calories</option>
                <option value="prepTime">Sort by prep time</option>
              </select>
      
  )
}

export default MealSorter
