(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(
      public value: string,
      public placeholder: string // id: string,
    ) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

//   interface InputElementProps {
//     value: string;
//     placeholder: string;
//     id: string;
//   }

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;

    constructor(id: string, placeholder: string, value: string ) {
        // constructor({ id, placeholder, value }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, "input");
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement(
    "Fernando",
    "Enter first name",
    "txtName",
  );

  console.log({ nameField });
})();
