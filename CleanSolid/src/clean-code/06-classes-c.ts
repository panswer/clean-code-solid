(() => {
  // Aplicando el principio de responsabilidad unica
  // Priorizar la composicion frente a la herencia

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

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;

    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({
        birthdate,
        gender,
        name,
      });

      this.user = new User({
        email,
        role,
      });

      this.settings = new Settings({
        lastOpenFolder,
        workingDirectory,
      });
    }
  }

  const userSettings = new UserSettings({
    lastOpenFolder: "/home",
    workingDirectory: "/user/home",
    email: "ricardo@gmail.com",
    role: "Admin",
    name: "Ricardo Mejias",
    gender: "M",
    birthdate: new Date("1997/04/09"),
  });

  console.log({
    userSettings,
    isChecked: userSettings.user.checkCredentials(),
  });
})();
