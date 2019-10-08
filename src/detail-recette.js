import React, { useState, useEffect } from "react";
import { Ingredients } from "./ingredients";
import { Link } from "@reach/router";
import { getRecette } from "./api";
import { updateRecette, deleteRecette } from "./api";

export const DetailRecette = ({ id, newR }) => {
  const [recette, setRecette] = useState();

  useEffect(() => {
    if(newR){
      const newRecette = {}
      setRecette(newRecette);
    }else{
      getRecette(id).then(res => setRecette(res));
    }
  }, [id, setRecette]);

  if (!recette) {
    return <h2>Recette en chargement</h2>;
  }

  return (
    <div>
      <h2>{recette.name}</h2>
      <div>
        <input
          name="titre"
          value={recette.name}
          onChange={event =>
            setRecette({
              ...recette,
              name: event.target.value
            })
          }
        />
      </div>
      <div>
        <input
          name="description"
          value={recette.description}
          onChange={event =>
            setRecette({
              ...recette,
              description: event.target.value
            })
          }
        />
        <p>{recette.description}</p>
      </div>
      <div>
        <input
          name="note"
          type="number"
          max="5"
          min="0"
          step="0.5"
          value={recette.note}
          onChange={event =>
            setRecette({
              ...recette,
              note: event.target.value
            })
          }
        />
      </div>
      <br/>
      <Ingredients
        value={recette.ingredients}
        onChange={newIngredients =>
          setRecette({
            ...recette,
            ingredients: newIngredients
          })
        }
      />
      <br/>
      <br/>
      <div>
        <button onClick={() => updateRecette(recette, newR)}>Sauvegarder</button>
        
      </div>
      <br/>
      <Link to="/">
        <button onClick={() => deleteRecette(recette)}>Supprimer la recette</button>
      </Link>
    </div>
  );
};
