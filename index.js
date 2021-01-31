const names = ["nico", "lynn", "flynn"];

// const hearts = names.map(item => {return item + "❤";});
const hearts = names.map((item, index) => item + "❤" + index);

console.log(hearts);