export const minValue = (values: number[]): number => {
    return Number(([...Array.from(new Set(values)).sort((a,b) => a-b)]).join(""))
};
