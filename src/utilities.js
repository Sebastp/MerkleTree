import sha256 from "sha256";
const newLevel = array => {
  if (array.length % 2 != 0) {
    //if even num of elements array.pop();
  }
  let arrayHashed = array.map(string => sha256(string));
  console.log(arrayHashed);
};
const createLevels = (array, currLevels) => {
  currLevels = currLevels ? currLevels : [];
  newLevel(array);
  // createLevels(array, currLevels)
};

const createMerkleTree = arrayOfStrs => {
  const root = () => {
    console.log("roott");
  };
  return { root };
};
export default createMerkleTree;
