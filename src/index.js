import createMerkleTree from "./MerkleTree";

const MerkleTree = createMerkleTree([
  "str1",
  "str2",
  "str1",
  "str2",
  "str1",
  "str2",
  "str1",
  "str2"
]);
MerkleTree.root();
MerkleTree.height();
MerkleTree.level(1);
