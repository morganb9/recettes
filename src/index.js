/*Fait par Morgan Blais et Antoine Leblanc */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Link, Redirect } from "@reach/router";

import "./styles.css";
import { Recettes } from "./list-recette";
import { Courses } from "./list-course";
import { DetailRecette } from "./detail-recette";
import { DetailCourse } from "./detail-course";

//react-19-20.cleverapps.io/morgan/recettes

function App() {
  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
        <h1>Recettes by Morgan & Antoine</h1>
      </Link>
      <Link to="/recettes">
      <button>Recettes</button>
      </Link>
      <Link to ="/courses">
      <button>Courses</button>
      </Link>

      <Router>
        <Redirect from="/" to="/recettes"/>
        <Recettes path="/recettes" />
        <DetailRecette path="/recette/new" newR={true}/>
        <DetailRecette path="/recette/:id" />
      </Router>
      <Router>
        <Courses path="/courses"/>
        <DetailCourse path="/course/new" newR={true}/>
        <DetailCourse path="/course/:id" />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
