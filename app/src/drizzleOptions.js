import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import GameItems from "./contracts/GameItems.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [
    SimpleStorage,
    ComplexStorage,
    TutorialToken,
    GameItems,
  ],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
