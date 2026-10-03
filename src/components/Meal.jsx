const Meal = ({ meal, onTogglePrepared, onRemoveMeal }) => {
  
  return (
           <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={meal.prepared}
                    onChange={() => onTogglePrepared(meal.id)}
                    className="h-5 w-5 rounded border-gray-300 accent-green-700"
                  />
                  <div>
                    <p className={`font-semibold ${meal.prepared ? 'text-gray-400 line-through' : 'text-gray-900'}`}>{meal.mealName}</p>
                    <div className="mt-1 flex gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${meal.prepared ? 'bg-gray-200 text-gray-400' : 'bg-green-100 text-green-700'}`}>{meal.mealType}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${meal.prepared ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{meal.calories} kcal</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${meal.prepared ? 'bg-gray-200 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>{meal.prepTime} min</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600" onClick={() => onRemoveMeal(meal.id)}>✕</button>
              </div>
  )
}

export default Meal
