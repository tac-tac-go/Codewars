export const min = (list: number[]): number => {
  return list.reduce((a,b) => Math.min(a,b))
};

export const max = (list: number[]): number => {
  return list.reduce((a,b) => Math.max(a,b))
};

