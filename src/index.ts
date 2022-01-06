import { Provider } from "@sensible-contract/abstract-provider";
import { Wallet } from "@sensible-contract/abstract-wallet";
import {
  MetaSVProvider,
  SensiblequeryProvider,
  WhatsOnChainProvider,
} from "@sensible-contract/providers";
import { Sensible } from "./sensible";
import * as utils from "./utils";
let version = require("../package.json").version;
export default class Web3 {
  provider: Provider;
  wallet: Wallet;
  sensible: Sensible;
  version: string = version;
  utils = utils;

  static readonly utils = utils;
  static readonly version: string = version;
  static modules = {
    Sensible,
  };

  static providers = {
    SensiblequeryProvider,
    WhatsOnChainProvider,
    MetaSVProvider,
  };

  constructor(wallet: Wallet, provider?: Provider) {
    this.wallet = wallet;
    if (!provider) provider = new SensiblequeryProvider();
    this.provider = provider;

    this.sensible = new Sensible(wallet, provider);
  }

  setProvider(provider: Provider) {
    this.provider = provider;
    this.sensible.provider = provider;
  }
}
