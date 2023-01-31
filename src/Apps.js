import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import GoalsItem from "./components/GoalsItem";
import GoalData from "./data/GoalsData";
import GoalsList from "./components/GoalsList";
import GoalStats from "./components/GoalStats";
import GoalForm from "./components/GoalForm";
import AboutPages from "./pages/AboutPages";
import AboutIconLink from "./AboutIconLink";

function App() {
  const [goal, setGoal] = useState(GoalData);

  const addGoal = (newGoal) => {
    newGoal.id = uuidv4();
    setGoal([newGoal, ...goal]);
  };

  const deleteGoal = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setGoal(goal.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <GoalForm handleAdd={addGoal} />
                <GoalStats goal={goal} />
                <GoalsList goal={goal} handleDelete={deleteGoal} />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPages />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
