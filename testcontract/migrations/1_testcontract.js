const testcontract = artifacts.require("testcontract");

module.exports = function(deployer) {
  deployer.deploy(testcontract);
};

