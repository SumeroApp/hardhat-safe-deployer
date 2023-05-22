"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSafeDeployer = void 0;
require("@nomiclabs/hardhat-ethers");
const wallet_1 = require("@ethersproject/wallet");
const config_1 = require("hardhat/config");
const adapter_1 = require("./adapter");
const setupSafeDeployer = (safe, serivceUrl, signer) => {
    config_1.extendEnvironment((hre) => {
        hre.network.provider = new adapter_1.SafeProviderAdapter(hre, safe, serivceUrl, signer ? signer.connect(hre.ethers.provider) : undefined);
    });
};
exports.setupSafeDeployer = setupSafeDeployer;
(() => {
    const { DEPLOYER_SAFE, SAFE_SERVICE_URL, PRIV_KEY } = process.env;
    if (PRIV_KEY && DEPLOYER_SAFE && SAFE_SERVICE_URL)
        exports.setupSafeDeployer(DEPLOYER_SAFE, SAFE_SERVICE_URL, new wallet_1.Wallet(PRIV_KEY));
    else if (DEPLOYER_SAFE && SAFE_SERVICE_URL)
        exports.setupSafeDeployer(DEPLOYER_SAFE, SAFE_SERVICE_URL);
})();
//# sourceMappingURL=index.js.map