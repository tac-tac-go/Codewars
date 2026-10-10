export const toQueryString = (obj: object): string => {
  return Object.entries(obj).map(([k, v1]) => Array.isArray(v1) ? v1.map(v2 => `${k}=${v2}`).join("&") : `${k}=${v1}`).join("&");
};
