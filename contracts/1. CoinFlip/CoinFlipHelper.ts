import { expect } from "chai";
import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
  let wins = await victim.consecutiveWins();

  while(wins < 10) {
    await attacker.hackContract();
    wins = await victim.consecutiveWins();
  }
};

export default helper;
