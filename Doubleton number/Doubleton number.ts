export const isDoubleton = (n: number) => new Set(String(n)).size === 2;
export const doubleton = (n: number): number => 
  isDoubleton(n + 1) ? n + 1 : doubleton(n + 1);
