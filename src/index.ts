interface Human {
  name: string;
  gender: string;
  age: number;
}

const person = {
  name: "Bellamy",
  gender: "male",
  age: 29,
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hi ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi(person));

export {};
