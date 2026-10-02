import { useState } from 'react'
import Header from './components/Header'
import StatList from './components/StatList'
import MealList from './components/MealList'
import AddMealForm from './components/AddMealForm'
import Footer from './components/Footer'

import ListControls from './components/ListControls'


const initialMeals = [
  {
    id: 1,
    mealName: "Oatmeal with Berries",
    mealType: "Breakfast",
    calories: 320,
    prepTime: 10,
    prepared: true,
  },
  {
    id: 2,
    mealName: "Grilled Chicken Salad",
    mealType: "Lunch",
    calories: 450,
    prepTime: 20,
    prepared: false,
  },
  {
    id: 3,
    mealName: "Vegetable Fried Rice",
    mealType: "Dinner",
    calories: 580,
    prepTime: 30,
    prepared: false,
  },
  {
    id: 4,
    mealName: "Greek Yogurt with Honey",
    mealType: "Snack",
    calories: 180,
    prepTime: 5,
    prepared: true,
  },
  {
    id: 5,
    mealName: "Scrambled Eggs on Toast",
    mealType: "Breakfast",
    calories: 380,
    prepTime: 15,
    prepared: false,
  },
];


const App = () => {
  const [meals, setMeals] = useState(initialMeals)

  const handleTogglePrepared = (mealId) => {
    setMeals((currentMeals) =>
      currentMeals.map((meal) =>
        meal.id === mealId
          ? { ...meal, prepared: !meal.prepared }
          : meal
      )
    )
  }
 

  return (
    <div className="min-h-screen bg-[#eef3ea] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
      <Header />

        {/* Stats */}
       <StatList />

        {/* Main content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Add a meal form */}
          <AddMealForm />

          {/* Meal list */}
          <div>
            {/* Filters + sort */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
             <ListControls /> 
            </div>

            {/* Meal cards */}
            <MealList
              meals={meals}
              onTogglePrepared={handleTogglePrepared}
            />

            {/* Footer action */}
            <Footer />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
