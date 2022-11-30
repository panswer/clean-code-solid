(() => {
  // No aplicando el principio de responsabilidad unica

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  /* 
    Clase declarada de forma larga
  */
  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // interface UserProps {
  //   email: string;
  //   person: Person;
  //   role: string;
  // }
  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;

    private lastAccess: Date;

    constructor({ email, role, birthdate, gender, name }: UserProps) {
      super({ birthdate, gender, name });

      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });

      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/home",
    email: "ricardo@gmail.com",
    role: "Admin",
    name: "Ricardo Mejias",
    gender: "M",
    birthdate: new Date("1997/04/09"),
  });

  console.log({
    userSettings,
    isChecked: userSettings.checkCredentials(),
  });
})();
