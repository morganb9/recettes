import React, { Fragment, useState, useEffect } from "react";
import { getIngredients } from "./api";

const Ingredient = ({ ingredient, value, onChange }) => {
  return (
    <div>
      {ingredient.name} {ingredient.qte}
      <button
      onClick={() => {
        const id = value.indexOf(ingredient);
        value.splice(id,1);
        const newValue = [...value];
        onChange(newValue);
      }}> X </button>
    </div>
  );
};

export const Ingredients = ({ value = [], onChange }) => {
  const [newQte, setNewQte] = useState("");
  const [ingredients, setIngredientsDisponibles] = useState();
  const [currentIngredient, selectedIngredient] = useState();
  useEffect(() => {
    getIngredients().then(ingredients =>
      setIngredientsDisponibles(ingredients)
    );
  }, [setIngredientsDisponibles]);
  if (!ingredients) {
    return <h3>Patiente</h3>;
  }
  return (
    <Fragment>
      {value.map(ingredient => (
        <Ingredient key={ingredient.id} ingredient={ingredient} onChange={onChange} value={value}/>
      ))}
      <br />
      <select
        value={currentIngredient}
        onChange={event => selectedIngredient(event.target.value)}
      >
        {ingredients.map(ingredient => (
          <option key={ingredient.id} value={ingredient.id}>
            {ingredient.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={newQte}
        onChange={event => setNewQte(event.target.value)}
        placeholder="Quantité"
      />
      <br />
      <br />
      <button
        onClick={() => {
          const ingredient = ingredients.find(
            item => item.id === currentIngredient
          );

          const newValue = [...value, { qte: newQte, ...ingredient }];
          onChange(newValue);
          selectedIngredient();
          setNewQte("");
        }}
      >
        Ajouter un ingredient
      </button>
    </Fragment>
  );
};
