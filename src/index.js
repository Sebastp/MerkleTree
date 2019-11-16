import createMerkleTree from "./MerkleTree";
import _ from "lodash"; // 或 const _ = require("lodash");

const words = ["a", "b", "c"];
_.forEach(words, word => {
  console.log("word:" + word);
});
const MerkleTree = createMerkleTree();
