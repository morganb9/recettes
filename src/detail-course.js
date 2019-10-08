import React, { useState, useEffect } from "react";
import { getCourse } from "./api";

export const DetailCourse = ({id, newR}) => {
  const [course, setCourse] = useState();

  useEffect(() => {
    if(newR){
      const newCourse = {}
      setCourse(newCourse);
    }else{
      getCourse(id).then(res => setCourse(res));
    }
  },[id, setCourse]);

  if(!course){
    return <h2>Course en chargement</h2>;
  }

  return (
    <div>
      
    </div>
  );
};