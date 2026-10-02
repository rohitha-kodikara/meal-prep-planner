import React from 'react'

const MealTabList = () => {
  return (
    <div className="flex gap-2 rounded-full bg-white p-1 shadow-sm w-fit">
                <button className="rounded-full bg-green-700 px-4 py-1.5 text-sm font-semibold text-white">All</button>
                <button className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">Breakfast</button>
                <button className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">Lunch</button>
                <button className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">Dinner</button>
              </div>
  )
}

export default MealTabList
