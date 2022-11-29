(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type ColorFruits = "red" | "yellow" | "purple";
  function getFruitsByColor(color: ColorFruits): string[] {
    const colorFruits = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(colorFruits).includes(color)) {
      throw Error("the color must be: red, yellow, purple");
    }

    return colorFruits[color];
    // switch (color) {
    //   case "red":
    //     return ["manzana", "fresa"];
    //   case "yellow":
    //     return ["piña", "banana"];
    //   case "purple":
    //     return ["moras", "uvas"];
    //   default:
    //     throw Error("the color must be: red, yellow, purple");
    // }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps(): string {
    if (!isFourthStepWorking) {
      return "Fourth step broken.";
    }

    if (!isThirdStepWorking) {
      return "Third step broken.";
    }

    if (!isSecondStepWorking) {
      return "Second step broken.";
    }

    if (!isFirstStepWorking) {
      return "First step broken.";
    }

    return "Working properly!";

    // if (
    //   isFirstStepWorking &&
    //   isSecondStepWorking &&
    //   isThirdStepWorking &&
    //   isFourthStepWorking
    // )
    //   return "Working properly!";

    // if (isFirstStepWorking && isSecondStepWorking && isThirdStepWorking)
    //   return "Fourth step broken.";

    // if (isFirstStepWorking && isSecondStepWorking) return "Third step broken.";

    // return isFirstStepWorking ? "Second step broken." : "First step broken.";
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
