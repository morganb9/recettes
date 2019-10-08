import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { getCourses } from "./api";

const Course = ({id, recettes, ingredients}) => {
  return (
    <Link
      to={`/listes/${id}`}
      style={{ textDecoration: "none", color: "#000000" }}
    >
    <div style={{ border: "1px solid black", margin: "5px" }}>
      <h3>{id}</h3>
      <div style={{ textAlign: "left", padding: "5px" }}> 
      </div>
    </div>
    </Link>
  );
};

export const GetListCourses = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    getCourses().then(res => setCourses(res));
  }, [setCourses]);

  if (!courses) return <div>Chargerment en cours</div>;

  return courses.map(course => (
    <Course
      key={course.id}
      id={course.id}
      recettes={course.recettes}
      ingredients={course.ingredients}
    />
  ));
};

export const Courses = () =>{
  return (
    <>
      <hr/>
      <div>{GetListCourses()}</div>
      <div>{AddButton()}</div>
    </>
  )
};

const AddButton = () =>{
  return <Link to={'/course/new'}><button>Ajouter une nouvelle liste de courses</button></Link>
};