export const extractIdFrom = (inputString: string) => {
  const match = inputString.match(/\/(\d+)\/$/);
  return match ? match[1] : "";
};
