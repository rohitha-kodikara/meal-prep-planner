
import Meal from './Meal'

const MealList = ({ meals, onTogglePrepared }) => {
  return (
    <div className="flex flex-col gap-3">
              {meals.map((meal) => (
                <Meal
                  key={meal.id}
                  meal={meal}
                  onTogglePrepared={onTogglePrepared}
                />
              ))}
            </div>
  )
}

export default MealList
