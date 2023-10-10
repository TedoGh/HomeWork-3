const userObj = {
  firstName: "Temo",
  age: 25,
  address: {
    city: "Batumi",
    street: "Tamar Mefis 25",
  },
};

const calculateSum = (firstElement, secondElement, ...args) => {
  let totalFirstArr = (firstElement += secondElement);
  let total = 1;
  for (const num of args) {
    total *= num;
  }
  return [totalFirstArr, total];
};
const resultCalculateSum = calculateSum(30, 14, 23, 9, 12, 7);
console.log(resultCalculateSum);

const destructuringFunc = ({ address: { city } }) => {
  if (city) {
    return city;
  } else {
    return undefined;
  }
};

const resultDestructuringFunc = destructuringFunc(userObj);

console.log(resultDestructuringFunc);

const newObject = () => {
  const userObj2 = {
    ...userObj,
    address: {
      ...userObj.address,
    },
  };
  userObj2.firstName = "Lasha";
  userObj2.age = 21;
  userObj2.address.city = "Tbilisi";
  userObj2.address.street = "Tamarashvilis 19";

  return userObj2;
};

const resultNewObject = newObject(userObj);
console.log(resultNewObject);
