import { motion, animatePresence, AnimatePresence } from "framer-motion";
import React from "react";
import GoalsItem from "./GoalsItem";

function GoalsList({ goal, handleDelete }) {
  if (!goal || goal.lenght === 0) {
    return <p>Not Goal set yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {goal.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
            <GoalsItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {goal.map((item) => (
  //       <GoalsItem key={item.id} item={item}
  //       handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

export default GoalsList;
