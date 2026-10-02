import React from 'react'

const AddMealForm = () => {
  return (
    <div className="rounded-2xl bg-[#13241b] p-6 text-white">
            <h2 className="mb-5 text-lg font-bold">Add a meal</h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm text-gray-300">Meal name</label>
              <input
                type="text"
                placeholder="Lemon chicken bowl"
                className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm text-gray-300">Meal type</label>
              <select className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white outline-none">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
              </select>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm text-gray-300">Calories</label>
                <input
                  type="number"
                  placeholder="520"
                  className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Prep (min)</label>
                <input
                  type="number"
                  placeholder="25"
                  className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <button className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-bold text-gray-900 hover:bg-amber-400">
              Add meal
            </button>
          </div>
  )
}

export default AddMealForm
