import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { getRecettes } from "./api";

const Recette = ({ id, name, description, note }) => {
  return (
    <Link
      to={`/recette/${id}`}
      style={{ textDecoration: "none", color: "#000000" }}
    >
      <div style={{ border: "1px solid black", margin: "5px" }}>
        <h3>{name}</h3>
        <div style={{ textAlign: "left", padding: "5px" }}>
          <span>{description}</span>
          <span style={{ float: "right", padding: "1px" }}>{note}/5</span>
        </div>
      </div>
    </Link>
  );
};

export const GetListRecettes = () => {
  const [recettes, setRecettes] = useState();

  useEffect(() => {
    getRecettes().then(res => setRecettes(res));
  }, [setRecettes]);

  console.log(recettes);
  if (!recettes) return <div>Chargerment en cours</div>;

  return recettes.map(recette => (
    <Recette
      key={recette.id}
      id={recette.id}
      description={recette.description}
      name={recette.name}
      note={recette.note}
    />
  ));
};

export const Recettes = () =>{
  return (
    <>
      <div>{GetListRecettes()}</div>
      <div>{AddButton()}</div>
    </>
  )
};

const AddButton = () =>{
  return <Link to={'/recette/new'}><button>Ajouter une nouvelle recette</button></Link>
}
