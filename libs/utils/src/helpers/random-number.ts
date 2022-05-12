export const randomNumber = (min: number, max: number): number => {
  const randVal = min + Math.random() * (max - min);
  return Math.round(randVal);
};
