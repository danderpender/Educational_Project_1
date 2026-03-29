interface Person {
  firstName: string;
  lastName: string;
  position: string;
}

function formatPersonInfo(person: Person): string {
  return `${person.position} ${person.firstName} ${person.lastName}`;
}

const employee: Person = {
  firstName: "Иван",
  lastName: "Иванов",
  position: "Разработчик"
};

console.log(formatPersonInfo(employee));