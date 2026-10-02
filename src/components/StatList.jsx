import React from 'react'
import Stat from './Stat'

const StatList = () => {
  return (
     <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Meals prepped</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              2 <span className="text-base font-medium text-gray-500">of 4</span>
            </p>
            <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-1/2 rounded-full bg-green-700"></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total calories</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              2,140 <span className="text-base font-medium text-gray-500">kcal</span>
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Prep time left</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              55 <span className="text-base font-medium text-gray-500">min</span>
            </p>
          </div>
        </section>
  )
}

export default StatList
