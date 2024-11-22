export const createArray = (arg: number) => {
  return Array.from({ length: arg }, (_, i) => i + 1);
};
