interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void
}

class Tucan implements Bird {
  public fly(): void {}
  public eat(): void {}
  public run(): void {}
}

class Huminbird implements Bird {
  public fly(): void {}
  public eat(): void {}
  public run(): void {}
}

class Ostrich implements Bird {
  public fly(): void {}
  public eat(): void {}
  public run(): void {}
}

class Penguin implements Bird {
  public eat(): void {}
  public run(): void {}
  public swim(): void {}
}
