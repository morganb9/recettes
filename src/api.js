const base = "https://react-19-20.cleverapps.io/morgan";

export const getRecettes = async () => {
  try {
    const res = await fetch(`${base}/recettes`);
    if (res.status !== 200) {
      console.error("Erreur lors du chargement", res);
      throw new Error("Impossible de charger les recettes");
    }

    const recettes = await res.json();

    return recettes;
  } catch (err) {
    console.error(err);
  }
};

export const getRecette = async id => {
  try {
    const res = await fetch(`${base}/recettes/${id}`);
    if (res.status !== 200) {
      console.error("Erreur lors du chargement", res);
      throw new Error("Impossible de charger la recette");
    }

    const recette = await res.json();
    return recette;
  } catch (err) {
    console.error(err);
  }
};

export const getCourse = async id => {
  try {
    const res = await fetch(`${base}/listes/${id}`);
    if (res.status !== 200) {
      console.error("Erreur lors du chargement", res);
      throw new Error("Impossible de charger la course");
    }

    const course = await res.json();
    return course;
  } catch (err) {
    console.error(err);
  }
};

export const getIngredients = async () => {
  try {
    const res = await fetch(`${base}/ingredients`);
    if (res.status !== 200) {
      console.error("Erreur lors du chargement", res);
      throw new Error("Impossible de charger les ingredients");
    }
    const ingredients = await res.json();
    return ingredients;
  } catch (err) {
    console.error(err);
  }
};

export const updateRecette = async (recette, newR) => {
  const url = newR ? base + "/recettes" : base + "/recettes/" + recette.id;
  const method = newR ? "POST" : "PUT";
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(recette),
    headers: { "Content-Type": "application/json" }
  });
  if (res.status !== 200) {
    throw new Error("Erreur lors de la sauvegarde de la recette");
  } else {
    alert("Recette sauvegardée");
  }
  return res.json();
};

export const deleteRecette = async recette => {
  const res = await fetch(base + "/recettes/" + recette.id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });

  if (res.status !== 200) {
    throw new Error("Erreur lors de la sauvegarde de la recette");
  }
};


export const getCourses = async () => {
  try {
    const res = await fetch(`${base}/listes`);
    if (res.status !== 200) {
      console.error("Erreur lors du chargement", res);
      throw new Error("Impossible de charger les recettes");
    }

    const recettes = await res.json();

    return recettes;
  } catch (err) {
    console.error(err);
  }
};