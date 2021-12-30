import { Wallet } from "@sensible-contract/abstract-wallet";
import { SensiblequeryProvider } from "@sensible-contract/providers";
import { Sensible } from "./sensible";
import * as utils from "./utils";
let version = require("../package.json").version;
export default class Web3 {
  provider: SensiblequeryProvider;
  wallet: Wallet;
  sensible: Sensible;
  version: string = version;
  utils = utils;

  static readonly utils = utils;
  static readonly version: string = version;
  modules: Modules = {
    Sensible,
  };

  constructor(wallet: Wallet, provider?: SensiblequeryProvider) {
    this.wallet = wallet;
    if (!provider) provider = new SensiblequeryProvider();
    this.provider = provider;

    this.sensible = new Sensible(wallet, provider);
  }

  setProvider(provider: SensiblequeryProvider) {
    this.provider = provider;
    this.sensible.provider = provider;
  }
}

export interface Modules {
  Sensible: new (wallet: Wallet, provider?: SensiblequeryProvider) => Sensible;
}
