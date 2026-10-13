import { Issuer } from "./preloaded";

export const getIssuer = (x: number): Issuer => {
  const s = x.toString();
  if (/^3[47]\d{13}$/.test(s)) return Issuer.AMEX;
  if (/^6011\d{12}$/.test(s)) return Issuer.Discover;
  if (/^5[1-5]\d{14}$/.test(s)) return Issuer.Mastercard;
  if (/^4(\d{12}|\d{15})$/.test(s)) return Issuer.VISA;
  return Issuer.Unknown;
};
