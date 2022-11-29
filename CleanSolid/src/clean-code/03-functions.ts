(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActoresByMovieId(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getBioByActorId(actorId: string) {
    console.log({ actorId });
  }

  interface NewMoview {
    title: string;
    description: string;
    rating: number;
    casts: string[];
  }
  // Crear una película
  function saveMovie({ title, description, rating, casts }: NewMoview) {
    console.log({ title, description, rating, casts });
  }

  // Crea un nuevo actor
  function saveActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // Continuar
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
