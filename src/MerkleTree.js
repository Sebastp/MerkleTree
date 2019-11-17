import sha256 from "sha256";
const newLevel = (array, singleNodes = false) => {
  if (array.length % 2 != 0) {
    //if even num of elements array.pop();
    array.pop();
  }
  let arrayHashed = [];

  if (singleNodes) {
    for (let s = 0; s < array.length; s++) {
      let newLeafe = sha256(array[s]);
      arrayHashed.push(newLeafe);
    }
  } else {
    for (let s = 0; s < array.length; s += 2) {
      let newLeafe = sha256(array[s] + array[s + 1]);
      arrayHashed.push(newLeafe);
    }
  }

  return arrayHashed;
};
const createLevels = (array, currLevels) => {
  currLevels = currLevels ? currLevels : [];
  const level = newLevel(array);
  currLevels.push(level);

  if (level.length > 1) {
    createLevels(level, currLevels);
  }

  return currLevels;
};

const createMerkleTree = arrayOfStrs => {
  const firstLevel = newLevel(arrayOfStrs, true);
  const allLevelsArr = createLevels(firstLevel, [firstLevel]);
  const root = () => {
    //get first elem from last layer array
    let topHash = allLevelsArr[allLevelsArr.length - 1][0];
    console.log(topHash);
    return topHash;
  };
  const height = () => {
    const levelsCount = allLevelsArr.length;
    console.log(levelsCount);
    return levelsCount;
  };
  const level = levelIndex => {
    const layerToReturn = allLevelsArr[levelIndex];
    console.log(layerToReturn);
    return layerToReturn;
  };
  return { root, height, level };
};
export default createMerkleTree;
