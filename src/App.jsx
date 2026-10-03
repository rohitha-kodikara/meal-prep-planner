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

const mealTypes = ["All", "Breakfast", "Lunch", "Dinner"];

const App = () => {
  const [meals, setMeals] = useState([]);
    const[activeTab, setActiveTab] = useState("All");

    const displayedMeals = activeTab === "All" ? meals : meals.filter((meal) => meal.mealType === activeTab);
    
   
  
  const handleTogglePrepared = (mealId) => {
    setMeals((currentMeals) =>
      currentMeals.map((meal) =>
        meal.id === mealId
          ? { ...meal, prepared: !meal.prepared }
          : meal
      )
    )
  }
 
  function removeMeal(mealId) {
    setMeals((currentMeals) =>
      currentMeals.filter((meal) => meal.id !== mealId)
    ) 
  }

   function handleToggleActiveTab(mealType) {
    setActiveTab(mealType);
  }

  function removeAllMeals() {
    setMeals([]);
  }

  function handleSortChange(sortBy) {
    const sortedMeals = meals.slice().sort((a, b) => {
      if (sortBy === "calories") {
        return a.calories - b.calories;
      } else if (sortBy === "prepTime") {
        return b.prepTime - a.prepTime;
      }
      return 0;
    });
    setMeals(sortedMeals);
  }


  const mealsPrepared = meals.filter((meal) => meal.prepared).length;
  const totalMeals = meals.length;
  const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
  const totalPrepTime = meals.reduce((total, meal) => total + meal.prepTime, 0);

  const statValues ={
    totalMeals: totalMeals,
    mealsPrepared: mealsPrepared,
    totalCalories: totalCalories,
    totalPrepTime: totalPrepTime
  }

  return (
    <div className="min-h-screen bg-[#eef3ea] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
      <Header />

        {/* Stats */}
       <StatList 
        {...statValues}
       />

        {/* Main content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          {/* Add a meal form */}
          <AddMealForm setMeals={setMeals} />

          {/* Meal list */}
          <div>
            {/* Filters + sort */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
             <ListControls 
             activeTab={activeTab}
             mealTypes={mealTypes}
             setActiveTab={setActiveTab}
             handleToggleActiveTab={handleToggleActiveTab}
             handleSortChange={handleSortChange}
             /> 
            </div>

            {/* Meal cards */}
            <MealList
              meals={displayedMeals}
              onTogglePrepared={handleTogglePrepared}
              onRemoveMeal={removeMeal}
            
            />
            <Footer removeAllMeals={removeAllMeals} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
