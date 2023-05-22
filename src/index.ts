import "@nomiclabs/hardhat-ethers";
import { Wallet } from "@ethersproject/wallet"
import { extendEnvironment } from "hardhat/config"
import { SafeProviderAdapter } from "./adapter"

export const setupSafeDeployer = (safe: string, serivceUrl: string, signer?: Wallet) => {
  extendEnvironment((hre) => {
    hre.network.provider = new SafeProviderAdapter(
      hre,
      safe,
      serivceUrl,
      signer ? signer.connect(hre.ethers.provider): undefined,
    )
  })
}

(() => {
  const { DEPLOYER_SAFE, SAFE_SERVICE_URL, PRIV_KEY } = process.env
  if (PRIV_KEY && DEPLOYER_SAFE && SAFE_SERVICE_URL) setupSafeDeployer(DEPLOYER_SAFE, SAFE_SERVICE_URL, new Wallet(PRIV_KEY))
  else if (DEPLOYER_SAFE && SAFE_SERVICE_URL) setupSafeDeployer(DEPLOYER_SAFE, SAFE_SERVICE_URL)
})()