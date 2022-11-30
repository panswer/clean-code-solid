(() => {
  // No aplicando el principio de responsabilidad unica
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

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);

      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "ricardo@gmail.com",
    "Admin",
    "Ricardo Mejias",
    "M",
    new Date("1997/04/09")
  );
  console.log({
    userSettings,
    isChecked: userSettings.checkCredentials(),
  });
})();
