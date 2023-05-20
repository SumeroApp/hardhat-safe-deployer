"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSafeDeployer = void 0;
require("@nomiclabs/hardhat-ethers");
const config_1 = require("hardhat/config");
const adapter_1 = require("./adapter");
const setupSafeDeployer = (signer, safe, serivceUrl) => {
    config_1.extendEnvironment((hre) => {
        hre.network.provider = new adapter_1.SafeProviderAdapter(hre, safe, serivceUrl, signer.connect(hre.ethers.provider));
    });
};
exports.setupSafeDeployer = setupSafeDeployer;
//# sourceMappingURL=index.js.map