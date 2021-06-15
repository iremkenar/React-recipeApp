import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{Math.trunc(calories)} kcal</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
