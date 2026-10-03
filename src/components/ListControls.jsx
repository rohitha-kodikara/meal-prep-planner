import React from 'react'
import MealTabList from './MealTabList'
import MealSorter from './MealSorter'

const ListControls = ({  activeTab, mealTypes,handleToggleActiveTab, handleSortChange }) => {
  return (
        <>
        <MealTabList 
        activeTab={activeTab} 
        mealTypes={mealTypes} 
        handleToggleActiveTab={handleToggleActiveTab} 
        />
        <MealSorter handleSortChange={handleSortChange} />
        </>
  )
}

export default ListControls
