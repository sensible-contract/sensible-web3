import { BN, Message } from "@sensible-contract/bsv";

export function fromDecimalUnit(value: string, decimal: number) {
  if (decimal == 0) return new BN(value);
  let negative = value.substring(0, 1) === "-"; //
  if (negative) {
    value = value.substring(1);
  }

  let base = BN.fromNumber(10 ** decimal);
  let comps = value.split(".");
  if (comps.length > 2) {
    throw new Error(
      `while converting number ${value} to non decimal value, too many decimal points`
    );
  }

  let whole = comps[0] || "0";
  let fraction = comps[1] || "0";
  if (fraction.length > decimal) {
    throw new Error(
      `while converting number ${value} to non decimal value, too many decimal places`
    );
  }

  while (fraction.length < decimal) {
    fraction += "0";
  }

  let bnWhole = new BN(whole);
  let bnFraction = new BN(fraction);
  let bnValue = bnWhole.mul(base).add(bnFraction);

  if (negative) {
    bnValue = bnValue.mul(BN.Minus1);
  }

  return new BN(bnValue.toString(10), 10);
}

export function toDecimalUnit(value: string, decimal: number) {
  if (decimal == 0) return value;
  let bnValue = BN.fromString(value, 10);
  let base = BN.fromNumber(10 ** decimal);
  let negative = bnValue.lt(BN.Zero);
  if (negative) {
    bnValue = bnValue.mul(BN.Minus1);
  }

  let fraction = bnValue.mod(base).toString(10);
  while (fraction.length < decimal) {
    fraction = `0${fraction}`;
  }
  let whole = bnValue.div(base).toString(10);
  let result = `${whole}${fraction == "0" ? "" : `.${fraction}`}`;

  if (negative) {
    result = `-${result}`;
  }
  return result;
}

export function toSatoshis(bsv: number | string) {
  return fromDecimalUnit(bsv.toString(), 8).toNumber();
}

export function fromSatoshis(satoshis: number | string) {
  return parseFloat(toDecimalUnit(satoshis.toString(), 8));
}

export function verifyMessage(
  message: string,
  address: string,
  signature: string
) {
  try {
    return Message.verify(message, address, signature);
  } catch (e) {
    return false;
  }
}
