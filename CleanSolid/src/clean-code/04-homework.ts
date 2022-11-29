(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    return ["manzana", "cereza", "ciruela"].includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    switch (color) {
      case "red":
        return ["manzana", "fresa"];
      case "yellow":
        return ["piña", "banana"];
      case "purple":
        return ["moras", "uvas"];
      default:
        throw Error("the color must be: red, yellow, purple");
    }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    if (
      isFirstStepWorking &&
      isSecondStepWorking &&
      isThirdStepWorking &&
      isFourthStepWorking
    )
      return "Working properly!";

    if (isFirstStepWorking && isSecondStepWorking && isThirdStepWorking)
      return "Fourth step broken.";

    if (isFirstStepWorking && isSecondStepWorking) return "Third step broken.";

    return isFirstStepWorking ? "Second step broken." : "First step broken.";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
