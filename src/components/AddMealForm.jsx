import React, { useState } from 'react'

const AddMealForm = ({ setMeals }) => {

  const[mealName, setMealName] = useState('');
  const[mealType, setMealType] = useState('Breakfast');
  const[calories, setCalories] = useState('');
  const[prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      id: Date.now(),
      mealName: mealName,
      mealType: mealType,
      calories: parseInt(calories),
      prepTime: parseInt(prepTime),
    };
    setMeals((currentMeals) => [...currentMeals, newMeal]);
    setMealName('');
    setMealType('Breakfast');
    setCalories('');
    setPrepTime('');
    
  }

  return (
    <div className="rounded-2xl bg-[#13241b] p-6 text-white">
            <h2 className="mb-5 text-lg font-bold">Add a meal</h2>
              <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">

              <label className="mb-1 block text-sm text-gray-300">Meal name</label>
              <input
                type="text"
                placeholder="Lemon chicken bowl"
                className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1 block text-sm text-gray-300">Meal type</label>
              <select 
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white outline-none">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm text-gray-300">Calories</label>
                <input
                  type="number"
                  placeholder="520"
                  className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Prep (min)</label>
                <input
                  type="number"
                  placeholder="25"
                  className="w-full rounded-lg border border-white/10 bg-[#1c3327] px-3 py-2 text-sm text-white placeholder-gray-400 outline-none"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                />
              </div>
            </div>

            <button className="w-full rounded-lg bg-amber-500 py-2.5 text-sm font-bold text-gray-900 hover:bg-amber-400">
              Add meal
            </button>
              </form>
          </div>
  )
}

export default AddMealForm
