(() => {
  type Gender = "M" | "F";
  /* 
        Clase declarada de forma larga
    */
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  const newPerson = new Person("Ricardo Mejias", "M", new Date("1997-04-09"));

  console.log(newPerson);
})();
