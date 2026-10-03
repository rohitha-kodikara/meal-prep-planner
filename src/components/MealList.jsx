
import Meal from './Meal'

const MealList = ({ meals, onTogglePrepared, onRemoveMeal }) => {

  return (
    <div className="flex flex-col gap-3">

      {
      meals.length === 0 ? (
        <div className="rounded-2xl bg-white px-4 py-6 shadow-sm">
          <p className="text-center text-gray-500">No meals to display.</p>
        </div>
      ) : ( 
      
      meals.map((meal) => (
                <Meal 
                  key={meal.id}
                  meal={meal}
                  onTogglePrepared={onTogglePrepared}
                  onRemoveMeal={onRemoveMeal}
                />
              ))
      )
      }
            </div>
  )
}

export default MealList
