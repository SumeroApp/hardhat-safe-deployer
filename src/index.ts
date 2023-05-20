import "@nomiclabs/hardhat-ethers";
import { Wallet } from "@ethersproject/wallet"
import { extendEnvironment } from "hardhat/config"
import { SafeProviderAdapter } from "./adapter"

export const setupSafeDeployer = (signer: Wallet, safe: string, serivceUrl: string) => {
  extendEnvironment((hre) => {
    hre.network.provider = new SafeProviderAdapter(
      hre,
      safe,
      serivceUrl,
      signer.connect(hre.ethers.provider),
    )
  })
}