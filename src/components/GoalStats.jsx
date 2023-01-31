import React from "react";

function GoalStats({ goal }) {
//   Calculating Rating average
    let average =
      goal.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / goal.length;
    average = average.toFixed(1).replace(/[.,]0$/, "");
  
  return (
    <div className="feedback-stats">
      <h4>{goal.length}:Reviews</h4>
      <h4>Average Rating:{isNaN(average) ? 0 : average}</h4>
      
    </div>
  );
}

export default GoalStats;
