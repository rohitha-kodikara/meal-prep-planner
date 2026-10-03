import React from 'react'

const Footer = ({ removeAllMeals }) => {
  return (
     <div className="mt-5 flex justify-end">
              <button 
              onClick={removeAllMeals}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                Clear all meals
              </button>
            </div>
  )
}

export default Footer
