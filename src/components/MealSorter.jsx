import React from 'react'

const MealSorter = () => {
  return (
   <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                <option>Sort by input order</option>
                <option>Sort by calories</option>
                <option>Sort by prep time</option>
              </select>
      
  )
}

export default MealSorter
