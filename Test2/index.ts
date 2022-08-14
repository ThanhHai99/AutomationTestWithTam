// const a = () => {
//   return "hi";
// };

// console.log(a());
// console.log("ahaa");

interface Account {
  id: number;
  displayName: string;
  version: 1;
}

function welcome(user: Account) {
  console.log(user.id);
  return "ahaa";
}

const u1: Account = {
  id: 1,
  displayName: "mot",
  version: 1,
};

console.log(welcome(u1));
