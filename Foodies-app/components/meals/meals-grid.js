import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />//pass all key-value pairs  of an object as props to a component.
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
