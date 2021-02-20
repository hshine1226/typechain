class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const uijeong = new Human("uijeong", 25, "female");
const person = {
  name: "Bellamy",
  gender: "male",
  age: 29,
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hi ${name}, you are ${age}, you are a ${gender}`;
};

const sayHiToGirlfriend = (girlfriend: Human): string => {
  const { name, age, gender } = girlfriend;
  return `Hi ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(person));
console.log(sayHiToGirlfriend(uijeong));

export {};
